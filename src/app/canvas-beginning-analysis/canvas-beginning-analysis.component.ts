import { AfterViewInit, Component, ElementRef, Input, ViewChild, HostListener } from '@angular/core';
import * as THREE from 'three';
import * as math from 'mathjs';
import { mathjsc } from 'mathjs-cmathml';
import { angularMath } from 'angular-ts-math';
import { Vector3 } from 'three';

@Component({
  selector: 'app-canvas-beginning-analysis',
  templateUrl: './canvas-beginning-analysis.component.html',
  styleUrls: ['./canvas-beginning-analysis.component.css']
})

export class CanvasBeginningAnalysisComponent implements AfterViewInit {
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  public scene: THREE.Scene;

  private scaleConst = 1.2;
  public near_plane = 99;
  public far_plane = 100;

  public pointer: THREE.Mesh;

  @ViewChild('canvas')
  private canvasRef: ElementRef;

  public expression: string;
  public derivateFunction: string;

  public line: THREE.Line;
  public lineD: THREE.Line;
  constructor() {
    this.render = this.render.bind(this);
  }

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private createScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);

    this.y_asix(this.scene, new THREE.Vector3(0, -13, 0), new THREE.Vector3(0, 15, 0));
    this.x_asix(this.scene, new THREE.Vector3(-25, 0, 0), new THREE.Vector3(25, 0, 0));

    this.saverange();
    this.scene.add(this.line);
  }

  public graph: THREE.Geometry;
  public parser: any;

  public saverange() {
    if (this.renderer == undefined) {
      return;
    }
    this.scene.remove(this.line);
    this.parser = math.parser();
    if (this.expression == '') {
      return;
    } else {
      this.parser.eval('f(x)=' + this.expression);
    }
    const graph1 = new THREE.Geometry();
    for (let i = -24; i < 25; i++) {
      graph1.vertices.push(
        new THREE.Vector3(i, this.getY(i), 0));
    }
    this.graph = graph1;
    console.log(this.graph);
    this.line = new THREE.Line(this.graph,
      new THREE.LineBasicMaterial({ color: 0x20B2AA, linewidth: 2.5 }));
    this.scene.add(this.line);
    this.render();

    this.derivateFunction = math.derivative(this.expression, 'x');
  }

  public getY(x: number): number {
    return this.parser.eval('f(' + x + ')');
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

    this.camera.position.set(0, 0, this.far_plane);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
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
    let component: CanvasBeginningAnalysisComponent = this;
    (function render() {
      //requestAnimationFrame(render);
      component.render();
    }());
  }

  public render() {
    this.renderer.render(this.scene, this.camera);
  }

  /* EVENTS */
  private mouseOnLastPosPointer: boolean;
  public onMouseDown(event: MouseEvent) {
    event.preventDefault();
    const pos = this.worldToCanvas(new THREE.Vector2(event.clientX, event.clientY));

    const EPS = 2;
    console.log(Math.abs(pos.y - this.getY(pos.x)));
    if (this.pointer != undefined) {
      this.mouseOnLastPosPointer = false;
      this.scene.remove(this.pointer);
      this.scene.remove(this.lineD);
    }
    if (Math.abs(pos.y - this.getY(pos.x)) <= EPS) {
      console.log("Ok");
      this.mouseOnLastPosPointer = true;
      const mini_radius = 0.8;
      const color_mini_circle = new THREE.MeshBasicMaterial({ color: 0x000090 });
      const segments = 240;
      this.pointer = new THREE.Mesh(
        new THREE.CircleBufferGeometry(mini_radius, segments), color_mini_circle);
      this.pointer.position.x = pos.x;
      this.pointer.position.y = this.getY(pos.x);
      this.scene.add(this.pointer);
      this.lineD = this.drawDerivative(new THREE.Vector3(pos.x - EPS / 4, this.getY(pos.x - EPS / 4), 0),
        new THREE.Vector3(pos.x + EPS / 4, this.getY(pos.x + EPS / 4), 0));
      this.scene.add(this.lineD);
      this.render();
    }
  }

  public onMouseMove(event: MouseEvent) {
    if (this.mouseOnLastPosPointer) {
      console.log('----');
      const EPS = 2;
      const pos = this.worldToCanvas(new THREE.Vector2(event.clientX, event.clientY));
      this.pointer.position.x = pos.x;
      this.pointer.position.y = this.getY(pos.x);
      this.scene.remove(this.lineD);
      this.lineD = this.drawDerivative(new THREE.Vector3(pos.x - EPS / 4, this.getY(pos.x - EPS / 4), 0),
        new THREE.Vector3(pos.x + EPS / 4, this.getY(pos.x + EPS / 4), 0));
      this.scene.add(this.lineD);
      this.render();
    }
  }

  public onMouseUp(event: MouseEvent) {
      this.mouseOnLastPosPointer = false;
  }
  /*y1 = k*x1 + b
  y = k*x + b
  
  y1 - y = k*(x1 - x)
  k = (y1 - y) / (x1 - x)
  b = y - k*x
  */
    public drawDerivative(dot: THREE.Vector3, dot1: THREE.Vector3): THREE.Line {
      let y = new THREE.Geometry();
      const black_material = new THREE.MeshBasicMaterial({ color: 0x00000 });
      const k = (dot1.y - dot.y) / (dot1.x - dot.x);
      const b = dot.y - k * dot.x;
      let x = dot.x - 5;
      y.vertices.push(new THREE.Vector3(x, x * k + b, 0));
      x = dot.x + 5;
      y.vertices.push(new THREE.Vector3(x, x * k + b, 0));
      return new THREE.Line(y, black_material);
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