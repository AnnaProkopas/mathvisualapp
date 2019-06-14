import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root'
})
export class CubeService {
  public side = 100;
  public edges: { vert1: THREE.Vector3, vert2: THREE.Vector3, plane: number[] }[];
  private _stack: { data: THREE.Vector3[], edge_num: number[], drawed: boolean };

private planeToEdge = [
  [-1, -2, 0, 1, 9, 10],
  [-2, -1, 3, 2, 8, 11],
  [0, 3, -1, -2, 4, 5],
  [1, 2, -2, -1, 7, 6],
  [9, 8, 4, 7, -1, -2],
  [10, 11, 5, 6, -2, -1]];
  public arr: THREE.Vector3[];
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

  public canBuildPlane() {
    if (this._stack.data.length === 3) {
      if (this.isTreeDotsOnCommonStraightInCube(this.stack[0], this.stack[1], this.stack[2])) {
        alert("Все три точки находятся на одной прямой.");
        this._stack.data.shift();
        return Way.Clear;
      }
      /*
        основные вычисления для получения координат точек
      */
      const a = this.partExpA(this.stack[0], this.stack[1], this.stack[2]), b = this.partExpB(this.stack[0], this.stack[1], this.stack[2]),
        c = this.partExpC(this.stack[0], this.stack[1], this.stack[2]), d = this.partExpD(this.stack[0], this.stack[1], this.stack[2]);
      let i = 0;
      this.arr = [];
      this._stack.edge_num = [];
      const condition_of_graph = this.isTreeDotsOnOnePlaneOfCube(this.stack[0], this.stack[1], this.stack[2])
        || this.isTwoDotOnOneEdgeOfCube(this.stack[0], this.stack[1]) ||
        this.isTwoDotOnOneEdgeOfCube(this.stack[0], this.stack[2]) || this.isTwoDotOnOneEdgeOfCube(this.stack[1], this.stack[2]);
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
              if (this._stack.edge_num[j] === undefined) {
                if (this.normalize((new THREE.Vector3()).subVectors(v, this.stack[j])) < 0.1) {
                  this._stack.edge_num[j] = i; // запоминаем номер грани для заданной точки
                }
              }
            }
          }
        }
        i++;
      }
      this._stack.drawed = true;
      return condition_of_graph ? Way.DrawSimple : Way.DrawHard;
    }
    return Way.Wait;
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
  private maxArray(array: any[]): number {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (max < array[i]) {
        max = array[i];
      }
    }
    return max;
  }
  public generateExtra() {/*
    let graph = this.generateGraph(this._stack.edge_num);
    let work_plane = this.getWorkPlane(this._stack.edge_num, this.arr, graph, section);
    let stackForDraw = [];
    dfsAndDraw(work_plane, this.arr, graph, section, stackForDraw);

    const geometry = new THREE.Geometry();
    for (let dot of this.arr) {
      if (this.onEdgeCube(dot)) {
        geometry.vertices.push(dot);
      }
    }*/
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
    this._stack = { data: [], edge_num: [], drawed: false};
  }
}

export enum Way {
  DrawSimple = 0,
  DrawHard = 1,
  Clear = 2,
  Wait = 3
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