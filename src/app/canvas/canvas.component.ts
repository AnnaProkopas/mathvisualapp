import { AfterViewInit, Component, ElementRef, Input, ViewChild, HostListener } from '@angular/core';
import * as THREE from 'three';
import { DataService } from '../data.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  providers: [DataService]
})

export class CanvasComponent implements AfterViewInit {
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  public scene: THREE.Scene;

  private scaleConst = 0.5;
  public near_plane = 99;
  public far_plane = 100;

  public pointer: THREE.Mesh;
  public circle: { radius: number, x: number, y: number };

  @ViewChild('canvas')
  private canvasRef: ElementRef;

  constructor(private dataService: DataService) {
    this.render = this.render.bind(this);
  }

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private createScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);

    this.circle = { radius: 10, x: 0, y: 0 };
    const segments = 240;
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff90 });
    const geometry = new THREE.CircleBufferGeometry(this.circle.radius, segments);
    const circle = new THREE.Mesh(geometry, material);
    this.scene.add(circle);

    this.y_asix(this.scene, new THREE.Vector3(0, -13, 0), new THREE.Vector3(0, 15, 0));
    this.x_asix(this.scene, new THREE.Vector3(-13, 0, 0), new THREE.Vector3(15, 0, 0));

    const mini_radius = 1;
    const color_mini_circle = new THREE.MeshBasicMaterial({ color: 0x000090 });
    this.pointer = new THREE.Mesh(
      new THREE.CircleBufferGeometry(mini_radius, segments, 0, this.circle.radius), color_mini_circle);
    this.pointer.position.x = this.circle.x + this.circle.radius;
    this.scene.add(this.pointer);
    this.createSin();
    this.createCos();
    this.createTg();
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

    this.camera.position.set(0, -15, this.far_plane);
    this.camera.lookAt(new THREE.Vector3(0, -15, 0));
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
    let component: CanvasComponent = this;
    (function render() {
      //requestAnimationFrame(render);
      component.render();
    }());
  }

  public render() {
    if (this.renderer === undefined) {
      return;
    }
    this.renderer.render(this.scene, this.camera);
  }

  /* EVENTS */
  private mouseOnLastPosPointer: boolean;

  public onMouseDown(event: MouseEvent) {
    //console.log("onMouseDown");
    event.preventDefault();

    const EPS = 0.6;
    const pos = this.worldToCanvas(new THREE.Vector2(event.pageX, event.pageY));
    if (Math.abs(pos.x - this.pointer.position.x) <= EPS && Math.abs(pos.y - this.pointer.position.y) <= EPS) {
      this.mouseOnLastPosPointer = true;
    }
    /*
        if (this.partTrigonometry[1]) {
          this.scene.add(this.lineCos);
        } else {
          this.scene.remove(this.lineCos);
        }*/
  }

  public onMouseMove(event: MouseEvent) {
    if (this.mouseOnLastPosPointer) {
      const EPS = 15;
      const pos = this.worldToCanvas(new THREE.Vector2(event.pageX, event.pageY));
      if (Math.abs(pos.x - this.pointer.position.x) <= EPS &&
        Math.abs(pos.y - this.pointer.position.y) <= EPS) {
        const x = (pos.x < 0 ? -1 : 1) * this.circle.radius / Math.sqrt(1 + Math.pow(pos.y / pos.x, 2));
        this.pointer.position.y = (pos.y < 0 ? -1 : 1) *
          Math.sqrt(this.circle.radius ** 2 - x ** 2);
        this.pointer.position.x = x;

        this.drawSin();
        this.drawCos();
        this.drawTg();

        this.render();
      } else {
        this.mouseOnLastPosPointer = false;
      }
    }
  }

  public onMouseUp(event: MouseEvent) {
    console.log('Up');
    this.mouseOnLastPosPointer = false;
  }

  public getAngle(): number {
    // a = (radius, 0) b = (pointer.x, pointer.y)
    function cosAngle(vec1: THREE.Vector2, vec2: THREE.Vector3): number {
      return (vec1.x * vec2.x + vec1.y * vec2.y) /
        (Math.sqrt(vec1.x ** 2 + vec1.y ** 2) * Math.sqrt(vec2.x ** 2 + vec2.y ** 2));
    }
    let angle = Math.acos(cosAngle(new THREE.Vector2(this.circle.radius, 0),
      this.pointer.position));/*
    if (angle > 0 && this.pointer.position.y < 0) {
      angle = 2 * Math.PI - angle;
    } else if (angle ) {
      angle = (this.pointer.position.y < 0) ? Math.PI - angle : -1 * angle;
    }*/
    if (this.pointer.position.y < 0) {
      angle *= -1;
    }
    // const sin = this.pointer.position.y;
    return angle;
  }

  public radToDeg(angle: number): number {
    return (angle * 180) / Math.PI;
  }

  private selectionSin = { lineSin: new THREE.Mesh(), dottedLineSin: new THREE.Mesh(),
    dotSin: new THREE.Mesh(), sceneSin: new THREE.Scene() };

  private selectionCos = { lineCos: new THREE.Mesh(), dottedLineCos: new THREE.Mesh(), 
    dotCos: new THREE.Mesh(), sceneCos: new THREE.Scene()} ;

  private selectionTg = { lineTg: new THREE.Mesh(), dottedLineTg: new THREE.Mesh(),
      dotTg: new THREE.Mesh(), sceneTg: new THREE.Scene(),
      slopingLine: new THREE.Line() } ;

  private createSin() {
    const material = new THREE.MeshBasicMaterial({ color: 0x100010 });
    const geometry = new THREE.BoxGeometry(1, this.pointer.position.y);
    this.selectionSin.lineSin = new THREE.Mesh(geometry, material);
    this.selectionSin.lineSin.position.y = 0;
    this.selectionSin.lineSin.position.x = 0;
    this.scene.add(this.selectionSin.lineSin);

    let sinScene = new THREE.Scene();
    sinScene = this.y_asix(sinScene, new THREE.Vector3( 0, -10, 0 ),  new THREE.Vector3( 0, 10, 0 ));
    sinScene = this.x_asix(sinScene, new THREE.Vector3( -25, 0, 0 ),  new THREE.Vector3( 25, 0, 0 ));

    const graph = new THREE.Geometry();
    for (let i = -1 * 2 * this.circle.radius; i <= 2 * this.circle.radius; i++) {
      graph.vertices.push(
        new THREE.Vector3(i,
          this.circle.radius * Math.sin(Math.PI * i / this.circle.radius / 2/* + this.getAngle()*/) / 2, 0));
    }
    const line2 = new THREE.Line(graph,
      new THREE.LineBasicMaterial({ color: 0xFFA07A , linewidth: 2.5}));
    sinScene.add(line2);
    sinScene.position.set(0, -27, 0);
/*Math.PI * i  = x */
    this.selectionSin.dotSin = new THREE.Mesh(new THREE.CircleBufferGeometry(1, 240, 0, this.circle.radius),
      new THREE.MeshBasicMaterial({ color: 0x000090 }));
    this.selectionSin.dotSin.position.x =  0;//this.getAngle() / Math.PI * 2 * this.circle.radius;
    sinScene.add(this.selectionSin.dotSin);
    this.selectionSin.dotSin.position.y = 0;//this.pointer.position.y / 2;
    this.selectionSin.dotSin.position.z = 1;

    /*let sinText = new THREE.Mesh(new THREE.TextGeometry("sin:"),
      new THREE.MeshBasicMaterial({ color: 0x000000 }));
    sinText.position.x = 25;
    sinText.position.y = 10;
    this.scene.add(sinText);*/

    this.selectionSin.sceneSin = sinScene;
    this.scene.add(sinScene);
    this.hideSin();
  }
  private drawSin() {
    this.selectionSin.lineSin.geometry = new THREE.BoxGeometry(1, Math.abs(this.pointer.position.y));
    this.selectionSin.lineSin.position.y = this.pointer.position.y / 2;
    this.selectionSin.dotSin.position.x = this.getAngle() / Math.PI * 2 * this.circle.radius;
    this.selectionSin.dotSin.position.y = this.pointer.position.y / 2;
  }
  public showSin() {
    this.selectionSin.lineSin.visible = true;
    this.selectionSin.sceneSin.visible = true;
    this.render();
  }
  public hideSin() {
    this.selectionSin.lineSin.visible = false;
    this.selectionSin.sceneSin.visible = false;
    this.render();
  }

  private createCos() {
    const material = new THREE.MeshBasicMaterial({ color: 0x100010 });
    const geometry = new THREE.BoxGeometry(this.pointer.position.x, 1);
    this.selectionCos.lineCos = new THREE.Mesh(geometry, material);
    this.selectionCos.lineCos.position.y = 0;
    this.selectionCos.lineCos.position.x = 0;
    this.scene.add(this.selectionCos.lineCos);

    let cosScene = new THREE.Scene();
    cosScene = this.y_asix(cosScene, new THREE.Vector3( 0, -10, 0 ),  new THREE.Vector3( 0, 10, 0 ));
    cosScene = this.x_asix(cosScene, new THREE.Vector3( -25, 0, 0 ),  new THREE.Vector3( 25, 0, 0 ));

    const graph = new THREE.Geometry();
    for (let i = -1 * 2 * this.circle.radius; i <= 2 * this.circle.radius; i++) {
      graph.vertices.push(
        new THREE.Vector3(i,
          this.circle.radius * Math.cos(Math.PI * i / this.circle.radius / 2 + this.getAngle()) / 2, 0));
    }
    const line2 = new THREE.Line(graph,
      new THREE.LineBasicMaterial({ color: 0x20B2AA , linewidth: 2.5}));
    cosScene.add(line2);
    cosScene.position.set(0, -50, 0);
/*Math.PI * i  = x */
    this.selectionCos.dotCos = new THREE.Mesh(new THREE.CircleBufferGeometry(1, 240, 0, this.circle.radius), 
      new THREE.MeshBasicMaterial({ color: 0x000090 }));
    this.selectionCos.dotCos.position.x =  0;//(this.getAngle() -
      //((this.pointer.position.y < 0) ? Math.PI : 0)) / Math.PI * 2 * this.circle.radius;
    cosScene.add(this.selectionCos.dotCos);
    this.selectionCos.dotCos.position.y = this.pointer.position.x / 2;
    this.selectionCos.dotCos.position.z = 1;

    this.selectionCos.sceneCos = cosScene;
    this.scene.add(cosScene);
    this.hideCos();
  }
  private drawCos() {
    this.selectionCos.lineCos.geometry = new THREE.BoxGeometry(Math.abs(this.pointer.position.x), 1);
    this.selectionCos.lineCos.position.x = this.pointer.position.x / 2;
    this.selectionCos.dotCos.position.x =  this.getAngle() / Math.PI * 2 * this.circle.radius;
    this.selectionCos.dotCos.position.y = this.pointer.position.x / 2;
  }
  public showCos() {
    this.selectionCos.lineCos.visible = true;
    this.selectionCos.sceneCos.visible = true;
    this.render();
  }
  public hideCos() {
    this.selectionCos.lineCos.visible = false;
    this.selectionCos.sceneCos.visible = false;
    this.render();
  }

  private createTg() {
    const material = new THREE.MeshBasicMaterial({ color: 0x100010 });
    const geometry = new THREE.BoxGeometry(1, -1);
    this.selectionTg.lineTg = new THREE.Mesh(geometry, material);
    this.selectionTg.lineTg.position.y = 0;
    this.selectionTg.lineTg.position.x = this.circle.radius;
    this.scene.add(this.selectionTg.lineTg);

    let geom = new THREE.Geometry();
    geom.vertices.push(new THREE.Vector3(0, 0, 0));
    geom.vertices.push( new THREE.Vector3(10, 10 * this.pointer.position.y / this.pointer.position.x, 0 ));
    this.selectionTg.slopingLine = new THREE.Line(geom, new THREE.LineBasicMaterial({ color: 0x008B8B}));
    this.scene.add(this.selectionTg.slopingLine);

    let TgScene = new THREE.Scene();
    TgScene = this.y_asix(TgScene, new THREE.Vector3( 0, -25, 0 ),  new THREE.Vector3( 0, 25, 0 ));
    TgScene = this.x_asix(TgScene, new THREE.Vector3( -25, 0, 0 ),  new THREE.Vector3( 25, 0, 0 ));

    const graph_material =new THREE.LineBasicMaterial({ color: 0x2ECC71 , linewidth: 2.5});
    //1я часть графика [-pi, -pi/2]
    let graph = new THREE.Geometry();
    for (let i = -Math.PI; i <= Math.atan(2.3) - Math.PI; i += 1 * Math.PI / 180) {
      graph.vertices.push(
        new THREE.Vector3(i * 180 / 8 / Math.PI, Math.tan(i) * 10, 0));
    }
    TgScene.add(new THREE.Line(graph, graph_material));
    //2я часть графика [-pi/2, pi/2]
    graph = new THREE.Geometry();
    for (let i = Math.atan(-2.3); i <= Math.atan(2.3); i += 1 * Math.PI / 180) {
      graph.vertices.push(
        new THREE.Vector3(i * 180 / 8 / Math.PI, Math.tan(i) * 10, 0));
    }
    TgScene.add(new THREE.Line(graph, graph_material));
    //3я часть графика [pi/2, pi]
    graph = new THREE.Geometry();
    for (let i = Math.PI + Math.atan(-2.3); i <= Math.PI; i += 1 * Math.PI / 180) {
      graph.vertices.push(
        new THREE.Vector3(i * 180 / 8 / Math.PI, Math.tan(i) * 10, 0));
    }
    TgScene.add(new THREE.Line(graph, graph_material));

    TgScene.position.set(0, -50, 0);
/*Math.PI * i  = x */
    this.selectionTg.dotTg = new THREE.Mesh(new THREE.CircleBufferGeometry(1, 240, 0, this.circle.radius), 
      new THREE.MeshBasicMaterial({ color: 0x000090 }));
    this.selectionTg.dotTg.position.x =  (this.getAngle() -
      ((this.pointer.position.y < 0) ? Math.PI : 0)) / Math.PI * this.circle.radius;
    TgScene.add(this.selectionTg.dotTg);
    this.selectionTg.dotTg.position.y = Math.tan(this.getAngle()) * this.circle.radius;
    this.selectionTg.dotTg.position.z = 1;

    this.selectionTg.sceneTg = TgScene;
    this.scene.add(TgScene);
    this.hideTg();
  }

  private drawTg() {
    let angle = this.getAngle();
    let geom = new THREE.Geometry();
    let height_line = 0;
    let h = 1.5 * this.circle.radius;
    const atan_h = Math.atan(h);
    height_line = this.circle.radius * this.pointer.position.y / this.pointer.position.x;
    //если около пи/2 (проверяем крайние значения)
    //if (Math.abs(Math.abs(angle - Math.PI) - Math.PI) < Math.PI / 2 - atan_h) {
    if (Math.abs(height_line) > h) {
      h *= (height_line < 0) ? -1 : 1;
      const x = h / (this.pointer.position.y / this.pointer.position.x);
      geom.vertices.push(new THREE.Vector3(x, h, 0));
      height_line = h;
    } else {
      geom.vertices.push(new THREE.Vector3(this.circle.radius, height_line, 0));
    } //линия может идти как от указателя, так и от 0,0
    if (angle > Math.PI / 2 || angle < - Math.PI / 2) {
      geom.vertices.push(this.pointer.position);
      //debugger;
    } else {
      geom.vertices.push(new THREE.Vector3(0, 0, 0));
    }
    this.selectionTg.slopingLine.geometry = geom;
    this.selectionTg.lineTg.geometry = new THREE.BoxGeometry(1, Math.abs(height_line));
    this.selectionTg.lineTg.position.y = height_line / 2;

    this.selectionTg.dotTg.position.x = angle * 180 / Math.PI / 8;
    this.selectionTg.dotTg.position.y = Math.tan(angle) * 10;
  }
  public showTg() {
    this.selectionTg.slopingLine.visible = true;
    this.selectionTg.lineTg.visible = true;
    this.selectionTg.sceneTg.visible = true;
    this.render();
  }
  public hideTg() {
    this.selectionTg.slopingLine.visible = false;
    this.selectionTg.lineTg.visible = false;
    this.selectionTg.sceneTg.visible = false;
    this.render();
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

  /*
  @HostListener('window:resize', ['$event'])
  public onResize(event: Event) {
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";
    console.log("onResize: " + this.canvas.clientWidth + ", " + this.canvas.clientHeight);
  
    this.camera.aspect = this.getAspectRatio();
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.render();
  }
  
  @HostListener('document:keypress', ['$event'])
  public onKeyPress(event: KeyboardEvent) {
    console.log("onKeyPress: " + event.key);
  }*/
  ngAfterViewInit() {
    this.createScene();
    this.createLight();
    this.createCamera();
    this.startRendering();
    this.scene.scale.set(this.scaleConst, this.scaleConst, this.scaleConst);

    this.canvasRef.nativeElement.appendChild(this.renderer.domElement);
    this.render();
    // document.getElementById("scene").appendChild(this.renderer.domElement);
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
}
