import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { TrustedHtmlString } from '@angular/core/src/sanitization/bypass';
import { Vector3 } from 'three';
import { ThenableWebDriver } from 'selenium-webdriver';

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
  private _stack: { data: THREE.Vector3[], drawed: boolean };
  private EPS = 0.001;
  public vertices: number[];
  public indices = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
  public arr: THREE.Vector3[];
  private arr_on: boolean[];
  private listOfHasPlanes: Set<number>;
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
      this.listOfHasPlanes = new Set();
      for (let j = 0; j < this.stack.length; j++) {
        this.listOfHasPlanes.add(this.getNumPlaneForBaseDot(this.stack[j]));
      }
      debugger;
      if (i === 3) {
        if (this.listOfHasPlanes.size < this.stack.length) {
          return WAY.DRAW_SIMPLE;
        }
      }
      return WAY.DRAW_HARD;
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
  private getNumPlaneForBaseDot(dot: THREE.Vector3): number {
    for (let i = 0; i < 4; i++) {
      const d1 = this.getVertCoord(this.indices[i * 3]), d2 = this.getVertCoord(this.indices[i * 3 + 1]),
        d3 = this.getVertCoord(this.indices[i * 3 + 2]);
      const _a = this.partExpA(d1, d2, d3), b = this.partExpB(d1, d2, d3),
        c = this.partExpC(d1, d2, d3), d = this.partExpD(d1, d2, d3);
        console.log(_a * dot.x + b * dot.y + c * dot.z + d);
      if (_a * dot.x + b * dot.y + c * dot.z + d < 1) {
        return i;
      }
    }
  }
  private isTreeDotsOnCommonStraight(d1: THREE.Vector3, d2: THREE.Vector3, d3: THREE.Vector3): boolean {
    const l1 = (d2.x - d1.x) === 0 ? null : (d3.x - d1.x) / (d2.x - d1.x),
      l2 = (d2.y - d1.y) === 0 ? null : (d3.y - d1.y) / (d2.y - d1.y),
      l3 = (d2.z - d1.z) === 0 ? null : (d3.z - d1.z) / (d2.z - d1.z);
    return (l1 === null && Math.abs(l3 - l2) < this.EPS) ||
      (l2 === null && Math.abs(l1 - l3) < this.EPS) ||
      (l3 === null && Math.abs(l1 - l2) < this.EPS);
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
  private getVertOppositPlane(n: number): number{
    switch (n) {
      case 0:
        return 3;
      case 3:
        return 0;
      default:
        return n;
    }
  }
  private getDistanse(d1: THREE.Vector3, d2: THREE.Vector3): number {
    return Math.sqrt(Math.pow(d1.x - d2.x, 2) + Math.pow(d1.y - d2.y, 2) + Math.pow(d1.z - d2.z, 2));
  }
  private addExtra(dots_under: THREE.Vector3[], planToDraw: any[]): number {
    const _this = this;
    debugger;
    //номер плоскости без точек:
    const n_plane = [0, 1, 2, 3].filter(function (i: number) {
      return !_this.listOfHasPlanes.has(i);
    })[0];
    const vertex = this.getVertCoord(this.getVertOppositPlane(n_plane));
    const dots = this.getNumsEdgeFromPlane(n_plane).map(function(i: number) {
      return _this.getVertCoord(_this.edges[i].vert1);
    });
    const a = this.partExpA(dots[0], dots[1], dots[2]), b = this.partExpB(dots[0], dots[1], dots[2]),
      c = this.partExpC(dots[0], dots[1], dots[2]), d = this.partExpD(dots[0], dots[1], dots[2]);
    let numerator = _this.Numerator(a, b, c, d, vertex);
    //debugger;
    let projection = dots_under.map(function(i: THREE.Vector3) {
      const l = numerator / _this.Denominator(a, b, c, d, vertex, i);
        return new THREE.Vector3(_this.getCoord(vertex.x, i.x, l),
          _this.getCoord(vertex.y, i.y, l), _this.getCoord(vertex.z, i.z, l));;
    });
    let i_min = this.getMinI(dots_under.map(function(el: THREE.Vector3, i: number) {
      return _this.getDistanse(el, projection[i]);
    }));
    let down = dots_under.slice(i_min, i_min + 1)[0];
    console.log(down);
    let join = new Array<THREE.Vector3>();
    for (let i = 0; i < dots_under.length; i++) {
      if (i === i_min) {
        continue;
      }
      let dot_u = dots_under[i];
      numerator = this.Numerator(a, b, c, d, dot_u);
      const denominator = this.Denominator(a, b, c, d, dot_u, down);
      if (denominator === 0) {
        console.error("Straight line parallel to the plane - try another plane");//!
      } else {
        let l = numerator / denominator;
        const v = new THREE.Vector3(this.getCoord(dot_u.x, down.x, l),
          this.getCoord(dot_u.y, down.y, l), this.getCoord(dot_u.z, down.z, l));
          join.push(v);
        //рисуем линии
        let collect = new Array<Array<THREE.Vector3>>();
        //верхняя
        collect.push([dot_u, v]);
        //нижняя
        collect.push([projection[i], v]);
        //вертикали
        collect.push([projection[i], vertex]);
        //выводим данные
        planToDraw.push(collect);
        planToDraw[planToDraw.length - 1].type = TYPE.LINES;
      }
    }
    let t = this.addStraightOnPlain(n_plane);
    t.black.push(...join);
    planToDraw.push(t);
    return n_plane;
  }
  private addStraightOnPlain(num_plane: number): {black: Array<THREE.Vector3>, gray: Array<THREE.Vector3>, type: TYPE} {
    const _this = this;
    let dots_i = this.getNumsEdgeFromPlane(num_plane).filter(function (i) {
      return _this.arr[i] != null;
    });
    let dots = dots_i.map(function(i) {
      return _this.arr[i];
    });
    let asix = dots_i.map(function(i: number): THREE.Vector3 {
      return _this.getVertCoord(_this.edges[i].vert1);
    });
    return { black: dots, gray: asix, type: TYPE.PLANE };
  }
  public generatePlan(plan: WAY): any {
    let planToDraw = new Array<any>();
    let drawed_plane = -1;
    if (plan === WAY.DRAW_HARD) {
      drawed_plane = this.addExtra(this.stack, planToDraw);
    }
    let sub_plan = {black: new Array<THREE.Vector3>(), gray: new Array<THREE.Vector3>(), type: TYPE.PLANE};
    for (let p = 0; p < 4; p++) {
      if (p === drawed_plane) {
        continue;
      }
      sub_plan.black.push(...this.addStraightOnPlain(p).black);
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
  private getMinI(arr: number[]): number {
    const min = Math.min.apply(null, arr);
    return arr.indexOf(min);
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
    this._stack = { data: [], drawed: false };
  }
}