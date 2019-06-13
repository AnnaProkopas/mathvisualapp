import { Injectable } from '@angular/core';
import * as THREE from 'three';


@Injectable({
  providedIn: 'root'
})
export class CubeService {
  public side = 100;
  public edges: { vert1: THREE.Vector3, vert2: THREE.Vector3, plane: number[] }[];
  //public stack = {Vector3[], num_edges: []};
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
  }
  /* public asixs = [{ side: 'back', plane: 5, edge: edges[0] }, null, { side: 'front', plane: 10, edge: edges[2] },
     null, null, { side: 'back', plane: 2, edge: edges[5] }, null,
 { side: 'front', plane: 1, edge: edges[7] }, { side: 'front', plane: 3, edge: edges[8] }, null,
 { side: 'back', plane: 6, edge: edges[10] }, null];*/

}
