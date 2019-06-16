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
  LINES = 1,
  PLANE = 2
}

@Injectable({
  providedIn: 'root'
})
export class TetrahedronService {
  public side = 100;
  public a = 200 / Math.sqrt(3);
  public edges: { vert1: number, vert2: number, plane: number[] }[];
  private _stack: { data: THREE.Vector3[], edge_num: number[], drawed: boolean };
  private EPS = 0.001;
  public vertices: number[];
  public indices = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
  public arr: THREE.Vector3[];
  private arr_on: boolean[];
  public getDot(i: number): THREE.Vector3 {
    if (i >= this._stack.data.length) {
      console.error("Try to get don't exist dot.");
    }
    return this._stack.data[i];
  }
  get stack() {
    return this._stack.data;
  }
  get drawed() {
    return this._stack.drawed;
  }
  set drawed(i: boolean) { //?
    this._stack.drawed = i;
  }
  public getBuildPlane() {
    if (this._stack.data.length === 3) {
      if (this.isTreeDotsOnCommonStraight(this.stack[0], this.stack[1], this.stack[2])) {
        //alert("Все три точки находятся на одной прямой.");
        this._stack.data.shift();
        return WAY.Clear;
      }
      /*
        основные вычисления для получения координат точек
      */
      const a = this.partExpA(this.stack[0], this.stack[1], this.stack[2]), b = this.partExpB(this.stack[0], this.stack[1], this.stack[2]),
        c = this.partExpC(this.stack[0], this.stack[1], this.stack[2]), d = this.partExpD(this.stack[0], this.stack[1], this.stack[2]);
      let i = 0;
      this.arr = [];
      this.arr_on = new Array<boolean>();
      this._stack.edge_num = [];
      for (const edge of this.edges) {
        const numerator = this.Numerator(a, b, c, d, this.getVertCoord(edge.vert1));
        const denominator = this.Denominator(a, b, c, d, this.getVertCoord(edge.vert1), this.getVertCoord(edge.vert2));
        if (Math.abs(denominator) < this.EPS * 10) {
          if (Math.abs(numerator) < this.EPS) {
            console.log("line in plane");
          } else {
            console.log("||");
          }
          this.arr.push(null);
          this.arr_on.push(false);
        } else {
          const l = numerator / denominator;
          const v = new THREE.Vector3(this.getCoord(this.getVertX(edge.vert1), this.getVertX(edge.vert2), l),
            this.getCoord(this.getVertY(edge.vert1), this.getVertY(edge.vert2), l),
            this.getCoord(this.getVertZ(edge.vert1), this.getVertZ(edge.vert2), l));
          this.arr.push(v);
          this.arr_on.push(this.onEdge(this.getVertCoord(edge.vert1), this.getVertCoord(edge.vert2), v));
          if (this.arr_on[this.arr_on.length - 1]) {
            i++;
          }
        }
      }
      this._stack.drawed = true;
      return i === 3 ? WAY.DRAW_SIMPLE : WAY.DRAW_HARD;
    }
    return WAY.WAIT;
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
  }/*
  private twoOutOfThree(f: boolean, s: boolean, t: boolean): boolean {
    return (f && s) || (s && t) || (t && f);
  }*/
  private isTreeDotsOnCommonStraight(d1: THREE.Vector3, d2: THREE.Vector3, d3: THREE.Vector3): boolean {
    const l1 = (d2.x - d1.x) === 0 ? null : (d3.x - d1.x) / (d2.x - d1.x),
      l2 = (d2.y - d1.y) === 0 ? null : (d3.y - d1.y) / (d2.y - d1.y),
      l3 = (d2.z - d1.z) === 0 ? null : (d3.z - d1.z) / (d2.z - d1.z);
    return (l1 === null && Math.abs(l3 - l2) < this.EPS) ||
      (l2 === null && Math.abs(l1 - l3) < this.EPS) ||
      (l3 === null && Math.abs(l1 - l2) < this.EPS);
  }
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
  private getVertCoord(n: number): THREE.Vector3 {
    return new THREE.Vector3(this.vertices[3 * n], this.vertices[3 * n + 1], this.vertices[3 * n + 2]);
  }
  private getVertX(n: number): number {
    return this.vertices[3 * n];
  }
  private getVertY(n: number): number {
    return this.vertices[3 * n + 1];
  }
  private getVertZ(n: number): number {
    return this.vertices[3 * n + 2];
  }
  private getNumsEdgeFromPlane(num_plane: number): Array<number> {
    switch (num_plane) {
      case 0:
        return [0, 1, 3];
      case 1:
        return [0, 1, 2];
      case 2:
        return [2, 4, 5];
      case 3:
        return [0, 3, 5];
      default:
        console.error('Try to get edge from don\'t exist plane');
        return undefined;
    }
    return undefined;
  }
  private onEdge(d1: THREE.Vector3, d2: THREE.Vector3, v: THREE.Vector3): boolean {
    /*d3 должен быть между d1 и d2*/
    if (Math.abs(Math.abs(Math.abs(d2.x - v.x) + Math.abs(d1.x - v.x)) - Math.abs(d2.x - d1.x)) < this.EPS) {
      if (Math.abs(Math.abs(Math.abs(d2.y - v.y) + Math.abs(d1.y - v.y)) - Math.abs(d2.y - d1.y)) < this.EPS) {
        if (Math.abs(Math.abs(Math.abs(d2.z - v.z) + Math.abs(d1.z - v.z)) - Math.abs(d2.z - d1.z)) < this.EPS) {
          return true;
        }
      }
    }
    return false;
  }
  private addExtra(dots_under: THREE.Vector3[], planToDraw: any[]) {
    const n_plane = 3;
    const numsedge = this.getNumsEdgeFromPlane(n_plane);
    const dots = new Array<THREE.Vector3>();
    for (let i = 0; i < 3; i++) {
      dots.push(this.getVertCoord(this.edges[numsedge[i]].vert1));
    }
    const a = this.partExpA(dots[0], dots[1], dots[2]), b = this.partExpB(dots[0], dots[1], dots[2]),
      c = this.partExpC(dots[0], dots[1], dots[2]), d = this.partExpD(dots[0], dots[1], dots[2]);
    let i_min = this.getMinIOfY(dots_under);
    let down = dots_under.slice(i_min, i_min + 1)[0];
    for (let dot_u of dots_under) {
      const numerator = this.Numerator(a, b, c, d, dot_u);
      const denominator = this.Denominator(a, b, c, d, dot_u, down);
      if (denominator === 0) {
        console.error("Straight line parallel to the plane - try another plane");//!
      } else {
        let l = numerator / denominator;
        const v = new THREE.Vector3(this.getCoord(dot_u.x, down.x, l),
          this.getCoord(dot_u.y, down.y, l), this.getCoord(dot_u.z, down.z, l));
        //рисуем линии
        let collect = new Array<Array<THREE.Vector3>>();
        //верхняя
        collect.push([dot_u, v]);
        //нижняя
        l = -dot_u.y / (this.getVertY(0) - dot_u.y);
        const p = new THREE.Vector3(this.getCoord(dot_u.x, this.getVertX(0), l), 0, this.getCoord(dot_u.z, this.getVertZ(0), l));
        collect.push([p, v]);
        //вертикали
        collect.push([p, this.getVertCoord(0)]);
        //выводим данные
        planToDraw.push(collect);
        planToDraw[planToDraw.length - 1].type = TYPE.LINES;
      }
    }
  }
  private addStraightOnPlain(num_plane: number): {black: Array<THREE.Vector3>, gray: Array<THREE.Vector3>, type: TYPE} {
    const _arr = this.arr;
    let dots_i = this.getNumsEdgeFromPlane(num_plane).filter(function (i) {
      return _arr[i] != null;
    });
    let dots = dots_i.map(function(i) {
      return _arr[i];
    })
    let asix = new Array<THREE.Vector3>();
    for (let i = 0; i < dots.length; i++) {
      asix.push(this.getVertCoord(this.edges[dots_i[i]].vert1));
    }
    return { black: dots, gray: asix, type: TYPE.PLANE };
  }

  public generatePlan(plan: WAY): any {
    let planToDraw = new Array<any>();
    if (plan === WAY.DRAW_HARD) {
      this.addExtra(this.stack, planToDraw);
      planToDraw.push(this.addStraightOnPlain(3));
    }
    debugger;
    let sub_plan = {black: new Array<THREE.Vector3>(), gray: new Array<THREE.Vector3>(), type: TYPE.PLANE};
    for (let p = 0, tmp: any; p < 4 - (plan === WAY.DRAW_HARD ? 1 : 0); p++) {
      tmp = this.addStraightOnPlain(p);
      sub_plan.black.push(...tmp.black);
      sub_plan.gray.push(...tmp.gray);
    }
    planToDraw.push(sub_plan);
    const selectionDots = new Array<THREE.Vector3>();
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr_on[i]) {
        selectionDots.push(this.arr[i]);
      }
    }
    return { plan: planToDraw, dots: selectionDots };
  }
  private getMinIOfY(arr: THREE.Vector3[]): number {
    const min = Math.min.apply(null, arr.map(function (i) {
      return i.y;
    }));
    const o = arr.map(function (i) {
      return i.y;
    }).indexOf(min);
    return o;
  }
  constructor() {
    const a = this.a;
    this.vertices = [0.0, Math.sqrt(3) * a / 3, 0.0,
      a / 2, 0.0, -Math.sqrt(3) * a / 6,
      -a / 2, 0.0, -Math.sqrt(3) * a / 6,
      0.0, 0.0, Math.sqrt(3) * a / 3];
    this.edges = [{ vert1: 2, vert2: 3, plane: [1, 3] },//0 
    { vert1: 0, vert2: 2, plane: [0, 1] },//1
    { vert1: 0, vert2: 3, plane: [1, 2] },//2
    { vert1: 1, vert2: 2, plane: [0, 3] },//3
    { vert1: 0, vert2: 1, plane: [0, 2] },//4
    { vert1: 3, vert2: 1, plane: [2, 3] }]; //5
    this._stack = { data: [], edge_num: [], drawed: false };
  }
}