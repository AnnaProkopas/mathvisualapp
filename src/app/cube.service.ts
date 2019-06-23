import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { TrustedHtmlString } from '@angular/core/src/sanitization/bypass';
import { Vector3 } from 'three';

export enum WAY {
  DRAW_SIMPLE = 0,
  DRAW_HARD = 1,
  Clear = 2,
  WAIT = 3
}
export enum TYPE {
  LINE = 0,
  LINES = 1,
  PLANE = 2
}

@Injectable({
  providedIn: 'root'
})
export class CubeService {
  public side = 100;
  public edges: { vert1: THREE.Vector3, vert2: THREE.Vector3, plane: number[] }[];
  private _queue: { data: THREE.Vector3[], edge_num: number[], drawed: boolean };

  private planeToEdge = [
    [-1, -2, 0, 1, 9, 10],
    [-2, -1, 3, 2, 8, 11],
    [0, 3, -1, -2, 4, 5],
    [1, 2, -2, -1, 7, 6],
    [9, 8, 4, 7, -1, -2],
    [10, 11, 5, 6, -2, -1]];
  public arr: THREE.Vector3[];
  public getDot(i: number): THREE.Vector3 {
    if (i >= this._queue.data.length) {
      console.error("Try to get don't exist dot.");
    }
    return this._queue.data[i];
  }
  get queue() {
    return this._queue.data;
  }
  get drawed() {
    return this._queue.drawed;
  }
  set drawed(i: boolean) { //?
    this._queue.drawed = i;
  }

  public canBuildPlane() {
    if (this._queue.data.length === 3) {
      if (this.isTreeDotsOnCommonStraightInCube(this.queue[0], this.queue[1], this.queue[2])) {
        //alert("Все три точки находятся на одной прямой.");
        this._queue.data.shift();
        return WAY.Clear;
      }
      /*
        основные вычисления для получения координат точек
      */
      const a = this.partExpA(this.queue[0], this.queue[1], this.queue[2]), b = this.partExpB(this.queue[0], this.queue[1], this.queue[2]),
        c = this.partExpC(this.queue[0], this.queue[1], this.queue[2]), d = this.partExpD(this.queue[0], this.queue[1], this.queue[2]);
      let i = 0;
      this.arr = [];
      this._queue.edge_num = [];
      const condition_of_graph = this.isTreeDotsOnOnePlaneOfCube(this.queue[0], this.queue[1], this.queue[2])
        || this.isTwoDotOnOneEdgeOfCube(this.queue[0], this.queue[1]) ||
        this.isTwoDotOnOneEdgeOfCube(this.queue[0], this.queue[2]) || this.isTwoDotOnOneEdgeOfCube(this.queue[1], this.queue[2]);
      for (const edge of this.edges) {
        const numerator = this.Numerator(a, b, c, d, edge.vert1);
        const denominator = this.Denominator(a, b, c, d, edge.vert1, edge.vert2);
        if (denominator === 0) {
          if (numerator === 0) {
            console.log('line in plane');
          } else {
            console.log('||');
          }
        } else {
          const l = numerator / denominator;
          const v = new THREE.Vector3(this.getCoord(edge.vert1.x, edge.vert2.x, l), this.getCoord(edge.vert1.y, edge.vert2.y, l), this.getCoord(edge.vert1.z, edge.vert2.z, l));
          this.arr.push(v);
          if (!condition_of_graph) {
            for (let j = 0; j < 3; j++) {
              if (this._queue.edge_num[j] === undefined) {
                if (this.normalize((new THREE.Vector3()).subVectors(v, this.queue[j])) < 0.1) {
                  this._queue.edge_num[j] = i; // запоминаем номер грани для заданной точки
                }
              }
            }
          }
        }
        i++;
      }
      this._queue.drawed = true;
      return condition_of_graph ? WAY.DRAW_SIMPLE : WAY.DRAW_HARD;
    }
    return WAY.WAIT;
  }
  private normalize(vector3: THREE.Vector3): number {
    return Math.abs(vector3.x) + Math.abs(vector3.y) + Math.abs(vector3.z);
  }
  private Numerator(a: number, b: number, c: number, d: number, dot1: THREE.Vector3): number {
    return (-d - a * dot1.x - b * dot1.y - c * dot1.z);
  }
  private Denominator(a: number, b: number, c: number, d: number, dot1: THREE.Vector3, dot2: THREE.Vector3): number {
    return a * (dot2.x - dot1.x) + b * (dot2.y - dot1.y) + c * (dot2.z - dot1.z);
  }
  private partExpA(d0: THREE.Vector3, d1: THREE.Vector3, d2: THREE.Vector3): number {
    return (d1.y - d0.y) * (d2.z - d0.z) - (d2.y - d0.y) * (d1.z - d0.z);
  }
  private partExpB(d0: THREE.Vector3, d1: THREE.Vector3, d2: THREE.Vector3): number {
    return -(d1.x - d0.x) * (d2.z - d0.z) + (d2.x - d0.x) * (d1.z - d0.z);
  }
  private partExpC(d0: THREE.Vector3, d1: THREE.Vector3, d2: THREE.Vector3): number {
    return (d1.x - d0.x) * (d2.y - d0.y) - (d2.x - d0.x) * (d1.y - d0.y);
  }
  private partExpD(d0: THREE.Vector3, d1: THREE.Vector3, d2: THREE.Vector3): number {
    return -d0.x * this.partExpA(d0, d1, d2) - d0.y * this.partExpB(d0, d1, d2) - d0.z * this.partExpC(d0, d1, d2);
  }
  private getCoord(x1: number, x2: number, a: number): number {
    return x1 + (x2 - x1) * a;
  }
  private isTreeDotsOnCommonStraightInCube(d1: THREE.Vector3, d2: THREE.Vector3, d3: THREE.Vector3): boolean {
    const x = d1.x + d2.x + d3.x, y = d1.y + d2.y + d3.y, z = d1.z + d2.z + d3.z;
    return this.twoOutOfThree((Math.abs(x) === 150), (Math.abs(y) === 150), (Math.abs(z) === 150));
  }
  private isTwoDotOnOneEdgeOfCube(d1: THREE.Vector3, d2: THREE.Vector3): boolean {
    const x = d1.x + d2.x, y = d1.y + d2.y, z = d1.z + d2.z;
    return this.twoOutOfThree((Math.abs(x) === 100), (Math.abs(y) === 100), (Math.abs(z) === 100));
  }
  private isTreeDotsOnOnePlaneOfCube(d1: THREE.Vector3, d2: THREE.Vector3, d3: THREE.Vector3): boolean {
    const x = d1.x + d2.x + d3.x, y = d1.y + d2.y + d3.y, z = d1.z + d2.z + d3.z;
    return (Math.abs(x) === 150) || (Math.abs(y) === 150) || (Math.abs(z) === 150);
  }
  private twoOutOfThree(f: boolean, s: boolean, t: boolean): boolean {
    return (f && s) || (s && t) || (t && f);
  }
  public onEdgeCube(d: THREE.Vector3): boolean {
    return Math.abs(d.x) <= 50 && Math.abs(d.y) <= 50 && Math.abs(d.z) <= 50;
  }
  /*
  private maxArray(array: any[]): number {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (max < array[i]) {
        max = array[i];
      }
    }
    return max;
  }*/
  private find(array: any[], value: any): number {
    if (array.indexOf) { // если браузер поддерживает
      return array.indexOf(value);
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return i;
      }
    }
    return -1;
  }
  private getNumsEdgFromPlane(num_plane: number): number[] {
    switch (num_plane) {
      case 0:
        return [0, 1, 9, 10];
      case 1:
        return [2, 3, 8, 11];
      case 2:
        return [0, 3, 4, 5];
      case 4:
        return [4, 7, 8, 9];
      case 3:
        return [1, 2, 6, 7];
      case 5:
        return [5, 6, 10, 11];
      default:
        console.error('Try to get edge from don\'t exist plane');
        return undefined;
    }
    return undefined;
  }
  private generateGraph(base_edge: number[]): {table: any[][]} {
    const graph = new Array(6), queue_for_draw = new Array(12).fill(1);
    /*
      рассмотрим плоскость i:
      если на пересечении с плоскостью j есть ребро с заданной точкой,
      то количество существующих (отрисованных) точек на плоскости увеличивается
    */
    for (let i = 0; i < this.planeToEdge.length; i++) {
      graph[i] = new Array(6);
      graph[i].fill = false;
      graph[i].ndraw = 0;
      for (let j = 0; j < this.planeToEdge.length; j++) {
        if (this.planeToEdge[i][j] >= 0) {
          graph[i][j] = { way: true };
          if (this.find(base_edge, this.planeToEdge[i][j]) >= 0) {
            graph[i].ndraw++;
          }
        } else {
          graph[i][j] = { way: false };
        }
      }
    }
    return {table: graph};
  }
  private dfsAndDraw(start: number, graph: any, planToDraw: any[]) {
    const n = graph.table.length;
    let visited = new Array(n).fill(false);
    this.DFS(start, visited, graph, planToDraw);
  }
  private DFS(_start: number, _visited: boolean[], _graph: any, planToDraw: any[]) {
    const _n = _graph.table.length;
    _visited[_start] = true;
    if (_graph.table[_start].ndraw >= 2 && !_graph.table[_start].fill) {
      this.addStraightOnPlain(_start, planToDraw);
      _graph.table[_start].fill = true;
      /* для всех плоскостей со смежными ребрами */
      for (const num_edge of this.planeToEdge[_start]) {
        if (num_edge < 0) {
          continue;
        }
        const i = this.edges[num_edge].plane[0] === _start ? this.edges[num_edge].plane[1] : this.edges[num_edge].plane[0];
        _graph.table[i].ndraw++;
      }
    }
    for (let r = 0; r < _n; r++) {
      if ((_graph.table[_start][r].way) && (!_visited[r])) {
        this.DFS(r, _visited, _graph, planToDraw);
      }
    }
  }
  private getWorkPlane(edge_nums: number[], graph: any, planToDraw: any[]) {
    const _plane = new Array(6).fill(0);
    for (let j = 0; j < edge_nums.length; j++) {
      for (const pl of this.edges[edge_nums[j]].plane) {
        _plane[pl]++;
      }
    }
    if (Math.max(..._plane) >= 2) {
      return _plane.indexOf(Math.max(..._plane));
    }
    const _arr = this.arr;
    const edge3 = edge_nums.filter(function (i) {
      return _arr[i].y === -50;
    })[0];
    const v = this.addExtra(edge_nums.filter(function (i) {
      return i !== edge3;
    }).map(function (i) {
      return _arr[i];
    }), planToDraw);
    graph.table[2].ndraw = 2;
    planToDraw.push([v, this.arr[edge3]]);
    planToDraw[planToDraw.length - 1].type = TYPE.LINE;
    return 2;
  }
  private addExtra(dots_under: THREE.Vector3[], planToDraw: any[]) {
    const n_plane = 2;
    const numsedge = this.getNumsEdgFromPlane(n_plane);
    const dots = new Array<THREE.Vector3>();
    for (let i = 0; i < 3; i++) {
      dots.push(this.edges[numsedge[i]].vert1);
    }
    const a = this.partExpA(dots[0], dots[1], dots[2]), b = this.partExpB(dots[0], dots[1], dots[2]),
      c = this.partExpC(dots[0], dots[1], dots[2]), d = this.partExpD(dots[0], dots[1], dots[2]);
    const numerator = this.Numerator(a, b, c, d, dots_under[0]);
    const denominator = this.Denominator(a, b, c, d, dots_under[0], dots_under[1]);
    if (denominator === 0) {
      console.error("Straight line parallel to the plane - try another plane");//!
    } else {
      const l = numerator / denominator;
      const v = new THREE.Vector3(this.getCoord(dots_under[0].x, dots_under[1].x, l),
        this.getCoord(dots_under[0].y, dots_under[1].y, l), this.getCoord(dots_under[0].z, dots_under[1].z, l));
      //рисуем линии
      //вертикали
      let collect = new Array<Array<THREE.Vector3>>();
      for (const dot of dots_under) {
        collect.push([new THREE.Vector3(dot.x, -50, dot.z), dot]);
      }
      planToDraw.push(collect);
      planToDraw[planToDraw.length - 1].type = TYPE.LINES;
      collect = [];
      //верхняя
      for (const dot of dots_under) {
        collect.push([dot, v]);
      }
      //нижняя
      for (const dot of dots_under) {
        collect.push([new THREE.Vector3(dot.x, -50, dot.z), v]);
      }
      //рисуем точку пересечения
      planToDraw.push(collect);
      planToDraw[planToDraw.length - 1].type = TYPE.LINES;
      return v;
    }
  }
  private addStraightOnPlain(num_plane: number, planToDraw: any[]) {
    const _arr = this.arr;
    const ind = this.getNumsEdgFromPlane(num_plane);
    const dots = ind.map(function (j) {
      return _arr[j];
    }) as Array<THREE.Vector3>;
    let dotsFromSection = new Array<THREE.Vector3>();
    let asix = new Array<Array<THREE.Vector3>>();
    for (let i = 0; i < dots.length; i++) {
      if (!this.onEdgeCube(dots[i])) {
        asix.push([dots[i], this.edges[ind[i]].vert1]);
      }
    }
    planToDraw.push({black: dots, gray: asix});
    planToDraw[planToDraw.length - 1].type = TYPE.PLANE;
  }

  public generateExtra(): any {
    let graph = this.generateGraph(this._queue.edge_num);
    let planToDraw = new Array<Array<THREE.Vector3>>();
    let work_plane = this.getWorkPlane(this._queue.edge_num, graph, planToDraw);
    this.dfsAndDraw(work_plane, graph, planToDraw);
    let selectionDots = [];
        for (const dot of this.arr) {
          if (this.onEdgeCube(dot)) {
            selectionDots.push(dot);
          }
        }
    return { plan: planToDraw, dots: selectionDots };
  }
  constructor() {
    //грани куба
    /*(X, Y, Z) = three.(y, z, x)*/
    // ось OY
    const s = this.side;
    this.edges = [];
    this.edges.push({ vert1: new THREE.Vector3(-s / 2, -s / 2, -s / 2), vert2: new THREE.Vector3(s / 2, -s / 2, -s / 2), plane: [0, 2] });
    this.edges.push({ vert1: new THREE.Vector3(s / 2, s / 2, -s / 2), vert2: new THREE.Vector3(-s / 2, s / 2, -s / 2), plane: [0, 3] });
    this.edges.push({ vert1: new THREE.Vector3(s / 2, s / 2, s / 2), vert2: new THREE.Vector3(-s / 2, s / 2, s / 2), plane: [1, 3] });
    this.edges.push({ vert1: new THREE.Vector3(-s / 2, -s / 2, s / 2), vert2: new THREE.Vector3(s / 2, -s / 2, s / 2), plane: [1, 2] });
    //3 
    //ось OX 
    this.edges.push({ vert1: new THREE.Vector3(s / 2, -s / 2, s / 2), vert2: new THREE.Vector3(s / 2, -s / 2, -s / 2), plane: [2, 4] });
    this.edges.push({ vert1: new THREE.Vector3(-s / 2, -s / 2, -s / 2), vert2: new THREE.Vector3(-s / 2, -s / 2, s / 2), plane: [2, 5] });
    this.edges.push({ vert1: new THREE.Vector3(-s / 2, s / 2, s / 2), vert2: new THREE.Vector3(-s / 2, s / 2, -s / 2), plane: [3, 5] });
    this.edges.push({ vert1: new THREE.Vector3(s / 2, s / 2, s / 2), vert2: new THREE.Vector3(s / 2, s / 2, -s / 2), plane: [4, 3] });
    //7 
    //ось OZ 
    this.edges.push({ vert1: new THREE.Vector3(s / 2, s / 2, s / 2), vert2: new THREE.Vector3(s / 2, -s / 2, s / 2), plane: [1, 4] });
    this.edges.push({ vert1: new THREE.Vector3(s / 2, s / 2, -s / 2), vert2: new THREE.Vector3(s / 2, -s / 2, -s / 2), plane: [0, 4] });
    this.edges.push({ vert1: new THREE.Vector3(-s / 2, -s / 2, -s / 2), vert2: new THREE.Vector3(-s / 2, s / 2, -s / 2), plane: [0, 5] });
    this.edges.push({ vert1: new THREE.Vector3(-s / 2, s / 2, s / 2), vert2: new THREE.Vector3(-s / 2, -s / 2, s / 2), plane: [1, 5] });
    //11
    this._queue = { data: [], edge_num: [], drawed: false };
  }
}

/*
class THREE.Vector3 {
  x: number;
  y: number;
  z: number;
  constructor(_x: number, _y: number, _z: number) {
    this.x = _x;
    this.y = _y;
    this.z = _z;
  }
  getThree() {
    return new THREE.Vector3(this.x, this.y, this.z);
  }
}*/