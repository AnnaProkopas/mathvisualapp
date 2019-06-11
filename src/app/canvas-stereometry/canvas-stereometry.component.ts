import { AfterViewInit, Component, ElementRef, Input, ViewChild, HostListener } from '@angular/core';
import * as THREE from 'three';
import * as math from 'mathjs';
import { mathjsc } from 'mathjs-cmathml';
import { angularMath } from 'angular-ts-math';
import { Vector3 } from 'three';

@Component({
  selector: 'app-canvas-stereometry',
  templateUrl: './canvas-stereometry.component.html',
  styleUrls: ['./canvas-stereometry.component.css']
})
export class CanvasStereometryComponent implements AfterViewInit {
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  public scene: THREE.Scene;

  private scaleConst = 1;
  public near_plane = 1;
  public far_plane = 100;

  public pointer: THREE.Mesh;

  @ViewChild('canvas')
  private canvasRef: ElementRef;

  constructor() {
    this.render = this.render.bind(this);
  }

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private createScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);
    const cube = new THREE.Mesh( new THREE.BoxGeometry( 200, 200, 200 ), new THREE.MeshNormalMaterial() );
    this.scene.add(cube);
    this.camera.lookAt(cube.position);
  }

  private createLight() {
    const light = new THREE.PointLight(0xffffff, 1, 1000);
    light.position.set(0, 0, 100);
    this.scene.add(light);
  }

  private createCamera() {
    const aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      30,
      aspectRatio,
      this.near_plane,
      this.far_plane
    );

    this.camera.position.set(0, 0, this.near_plane);
  }

  private getAspectRatio(): number {
    const height = this.canvas.clientHeight;
    if (height === 0) {
      return 0;
    }
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private startRendering() {
    this.renderer = new THREE.WebGLRenderer();/*{
          canvas: this.canvas,
          antialias: true
      });*/
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setClearColor(0xffffff, 1);
    this.renderer.autoClear = true;
    let component: CanvasStereometryComponent = this;
    (function render() {
      //requestAnimationFrame(render);
      component.render();
    }());
  }

  public render() {
    this.renderer.render(this.scene, this.camera);
  }

  /* EVENTS */
  public onMouseDown(event: MouseEvent) {
  }

  public onMouseMove(event: MouseEvent) {
  }

  public onMouseUp(event: MouseEvent) {
  }

  ngAfterViewInit() {
    this.createScene();
    this.createLight();
    this.createCamera();
    this.startRendering();
    this.scene.scale.set(this.scaleConst, this.scaleConst, this.scaleConst);

    this.canvasRef.nativeElement.appendChild(this.renderer.domElement);
    this.render();
  }

  private x_asix(localScene: THREE.Scene, fromDot: THREE.Vector3, toDot: THREE.Vector3): THREE.Scene {
    let y = new THREE.Geometry();
    const black_material = new THREE.MeshBasicMaterial({ color: 0x00000 });
    y.vertices.push(fromDot);
    y.vertices.push(toDot);
    localScene.add(new THREE.Line(y, black_material));
    y = new THREE.Geometry();
    y.vertices.push(new THREE.Vector3(toDot.x - 2, toDot.y + 1, 0));
    y.vertices.push(toDot);
    localScene.add(new THREE.Line(y, black_material));
    y = new THREE.Geometry();
    y.vertices.push(toDot);
    y.vertices.push(new THREE.Vector3(toDot.x - 2, toDot.y - 1, 0));
    localScene.add(new THREE.Line(y, black_material));
    return localScene;
  }

  private y_asix(localScene: THREE.Scene, fromDot: THREE.Vector3, toDot: THREE.Vector3): THREE.Scene {
    let y = new THREE.Geometry();
    const black_material = new THREE.MeshBasicMaterial({ color: 0x00000 });
    y.vertices.push(fromDot);
    y.vertices.push(toDot);
    localScene.add(new THREE.Line(y, black_material));
    y = new THREE.Geometry();
    y.vertices.push(new THREE.Vector3(toDot.x + 1, toDot.y - 2, 0));
    y.vertices.push(toDot);
    localScene.add(new THREE.Line(y, black_material));
    y = new THREE.Geometry();
    y.vertices.push(toDot);
    y.vertices.push(new THREE.Vector3(toDot.x - 1, toDot.y - 2, 0));
    localScene.add(new THREE.Line(y, black_material));
    return localScene;
  }

  private worldToCanvas(input: THREE.Vector2): THREE.Vector3 {
    const vec = new THREE.Vector3(); // create once and reuse
    const pos = new THREE.Vector3(); // create once and reuse
    vec.set(
      ((input.x - this.canvas.offsetLeft) / this.canvas.clientWidth) * 2 - 1,
      - ((input.y - this.canvas.offsetTop) / this.canvas.clientHeight) * 2 + 1,
      1);
    vec.unproject(this.camera);
    vec.sub(this.camera.position).normalize();
    const distance = - this.camera.position.z / vec.z;
    pos.copy(this.camera.position).add(vec.multiplyScalar(distance));
    return pos.divide(new THREE.Vector3(this.scaleConst, this.scaleConst, this.scaleConst));
  }
}