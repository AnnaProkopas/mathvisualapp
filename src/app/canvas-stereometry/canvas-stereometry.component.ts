import { AfterViewInit, Component, ElementRef, Input, ViewChild, HostListener, Output, EventEmitter } from '@angular/core';
import * as THREE from 'three';
import { CubeService } from '../cube.service';
import { TrustedHtmlString } from '@angular/core/src/sanitization/bypass';

@Component({
  selector: 'app-canvas-stereometry',
  templateUrl: './canvas-stereometry.component.html',
  styleUrls: ['./canvas-stereometry.component.css'],
  providers: [CubeService]
})
export class CanvasStereometryComponent implements AfterViewInit {
  @ViewChild('canvas')
  private canvasRef: ElementRef;
  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }
  constructor(private cubeService: CubeService) {
    this.render = this.render.bind(this);
  }
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  public scene: THREE.Scene;
  private near_plane = 1;
  private far_plane = 10000;
  private getAspectRatio(w: number, h: number): number {
    if (h === 0) {
      return 0;
    }
    return w / h;
  }
  private startRendering(w: number, h: number) {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(w, h);
    this.renderer.setClearColor(0xffffff, 1);
    this.renderer.autoClear = true;
    this.camera = new THREE.PerspectiveCamera(
      50,
      this.getAspectRatio(w, h),
      this.near_plane,
      this.far_plane
    );
    this.camera.position.set(190, 0, 320.004125807650624);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);
    this.scene.add(new THREE.AmbientLight(0x555555));
  }
  public render() {
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.renderer.render(this.scene, this.camera);
  }
  ngAfterViewInit() {
    this.startRendering(this.canvas.clientWidth, this.canvas.clientHeight);
    this.initilaze();
    this.canvasRef.nativeElement.appendChild(this.renderer.domElement);
    this.render();
  }

  private onOffCubes = [];
  private cube = new THREE.Group();
  private cube_line = new THREE.Object3D();
  private helper: THREE.Mesh;

  private material = {
    back: new THREE.MeshLambertMaterial({
      color: 0xffffff,
      opacity: 0.7,
      transparent: true
    }),
    front: new THREE.MeshLambertMaterial({
      color: 0xffffff,
      opacity: 0.5,
      transparent: true
    }),
    black: new THREE.MeshBasicMaterial({ color: 0x00000 }),
    blue: new THREE.MeshBasicMaterial({ color: 0x0000ff }),
    green: new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
    red: new THREE.MeshBasicMaterial({ color: 0xff0000 }),
    gray: new THREE.MeshLambertMaterial({ color: 0x999999 }),
    dash: new THREE.LineDashedMaterial({
      color: 0xffffff,
      linewidth: 1,
      scale: 1,
      dashSize: 3,
      gapSize: 1,
    })
  };
  public setPosition(a: THREE.Mesh, b: THREE.Vector3): THREE.Mesh {
    a.position.x = b.x;
    a.position.y = b.y;
    a.position.z = b.z;
    return a;
  }
  private y_asix(fromDot: THREE.Vector3, toDot: THREE.Vector3, material: THREE.Material) {
    const y = new THREE.Geometry();
    y.vertices.push(fromDot);
    y.vertices.push(toDot);
    this.scene.add(new THREE.Line(y, material));
    const m = new THREE.Mesh(new THREE.ConeGeometry(1, 7, 16), material);
    m.position.x = toDot.x;
    m.rotation.z = -Math.PI / 2;
    this.scene.add(m);
  }
  private z_asix(fromDot: THREE.Vector3, toDot: THREE.Vector3, material: THREE.Material) {
    const y = new THREE.Geometry();
    y.vertices.push(fromDot);
    y.vertices.push(toDot);
    this.scene.add(new THREE.Line(y, material));
    const m = new THREE.Mesh(new THREE.ConeGeometry(1, 7, 16), material);
    m.position.y = toDot.y;
    this.scene.add(m);
  }
  private x_asix(fromDot: THREE.Vector3, toDot: THREE.Vector3, material: THREE.Material) {
    const y = new THREE.Geometry();
    y.vertices.push(fromDot);
    y.vertices.push(toDot);
    this.scene.add(new THREE.Line(y, material));
    const m = new THREE.Mesh(new THREE.ConeGeometry(1, 7, 16), material);
    m.position.z = toDot.z;
    m.rotation.x = Math.PI / 2;
    this.scene.add(m);
  }
  private generateText(arr: {text: string, position: THREE.Vector3}[]) {
    const mesh = new THREE.Mesh(new THREE.Geometry(), new THREE.MeshPhongMaterial({ color: 0xfffffff }));
    this.scene.add(mesh);
    const loader = new THREE.FontLoader();
    let component: CanvasStereometryComponent = this;
    loader.load('https://threejs.org//examples/fonts/helvetiker_regular.typeface.json', function (_font) {
    for (let el of arr) {
    const geometry = new THREE.TextGeometry(el.text, {
        font: Object(_font) as THREE.Font,
        size: 5,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: false,
        bevelThickness: 1,
        bevelSize: 0.2,
        bevelSegments: 10
      });
      const textMaterial = new THREE.MeshPhongMaterial(
        { color: 0xff0000 }
      );
      let m = new THREE.Mesh(geometry, textMaterial);
      component.scene.add(m);
      m = component.setPosition(m, el.position);
      m.rotation.y = Math.PI / 4;
      component.render();
    }
    });
  }
  private drawLineOnGroup(v1: THREE.Vector3, v2: THREE.Vector3) {
    let y = new THREE.Geometry();
    y.vertices.push(v1);
    y.vertices.push(v2);
    let material = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide });
    material.polygonOffset = true;
    material.polygonOffsetFactor = -0.1;
    material.polygonOffset = true;
    material.polygonOffsetFactor = -0.1;
    let mesh = new THREE.Line(y, material);
    this.cube_line.add(mesh);
  }
  public initilaze() {
    this.scene.add(this.cube);
    this.y_asix(new THREE.Vector3(-this.cubeService.side, 0, 0), new THREE.Vector3(this.cubeService.side, 0, 0), this.material.blue);
    this.z_asix(new THREE.Vector3(0, -this.cubeService.side, 0), new THREE.Vector3(0, this.cubeService.side, 0), this.material.red);
    this.x_asix(new THREE.Vector3(0, 0, -this.cubeService.side), new THREE.Vector3(0, 0, this.cubeService.side), this.material.green);
    ;
    this.generateText([{ text: 'x', position: new THREE.Vector3(0, -5, 99) },
    { text: 'y', position: new THREE.Vector3(99, -5, 0) },
    { text: 'z', position: new THREE.Vector3(5, 99, 0) }]);

    //рисуем куб
    let mesh = new THREE.Mesh(
      new THREE.BoxGeometry(this.cubeService.side, this.cubeService.side, this.cubeService.side), this.material.back);
    //mesh.material.side = THREE.BackSide; // back plane
    mesh.renderOrder = 0;
    this.cube.add(mesh);
    mesh = new THREE.Mesh(new THREE.BoxGeometry(this.cubeService.side, this.cubeService.side, this.cubeService.side), this.material.front);
    //mesh.material.side = THREE.FrontSide; // front plane
    mesh.renderOrder = 1;
    this.cube.add(mesh);

    this.scene.add(this.cube_line);
    for (const edge of this.cubeService.edges) {
      this.drawLineOnGroup(edge.vert1, edge.vert2);
    }
    this.onOffCubes.push(this.cube_line);
    this.helper = new THREE.Mesh(new THREE.SphereGeometry(2, 240),
      new THREE.MeshNormalMaterial());
    this.scene.add(this.helper);
    this.render();

    this.ray = new THREE.Ray(this.camera.position, null);
  }

  private isMouseDown: boolean = false;
  private radious: number = 270;
  private theta: number = 45;
  private onMouseDownTheta: number = 45;
  private phi: number = 60; 
  private onMouseDownPhi: number = 60;
  private onMouseDownPosition = new THREE.Vector2();
  private onMouseLastPosition = new THREE.Vector2();
  private ray: THREE.Ray;
  //private projector = new THREE.Projector();
  private mouse = new THREE.Vector2();
  private raycaster = new THREE.Raycaster();

  /* EVENTS */
  public onMouseDown(event: MouseEvent) {
    event.preventDefault();
    this.isMouseDown = true;
    this.onMouseDownTheta = this.theta;
    this.onMouseDownPhi = this.phi;
    this.onMouseDownPosition.x = this.onMouseLastPosition.x = event.clientX + event.pageX;
    this.onMouseDownPosition.y = this.onMouseLastPosition.y = event.clientY + event.pageY;
  }
  public onMouseMove(event: MouseEvent) {
    event.preventDefault();
    const clientX = event.clientX + event.pageX;
    const clientY = event.clientY + event.pageY;
    this.mouse.x = ((clientX) / this.renderer.domElement.clientWidth) * 2 - 1;
    this.mouse.y = -((clientY) / this.renderer.domElement.clientHeight) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.onOffCubes, true);
    console.log(intersects);
    if (intersects.length > 0) {
      console.log("HERE");
      this.helper.position.set(0, 0, 0);
      this.helper.position.copy(intersects[0].point);
    }

    if (this.isMouseDown) {
        this.theta = -((clientX - this.onMouseDownPosition.x) * 0.3)
            + this.onMouseDownTheta;
        this.phi = ((clientY - this.onMouseDownPosition.y) * 0.3)
            + this.onMouseDownPhi;
        this.phi = Math.min(180, Math.max(0, this.phi));
        this.camera.position.x = this.radious * Math.sin(this.theta * Math.PI / 360) * Math.cos(this.phi * Math.PI / 360);
        this.camera.position.y = this.radious * Math.sin(this.phi * Math.PI / 360);
        this.camera.position.z = this.radious * Math.cos(this.theta * Math.PI / 360) * Math.cos(this.phi * Math.PI / 360);
        this.onMouseLastPosition.x = clientX;
        this.onMouseLastPosition.y = clientY;
    }
    this.render();
  }
  public onMouseUp(event: MouseEvent) {
    event.preventDefault();
    const clientX = event.clientX + event.pageX;
    const clientY = event.clientY + event.pageY;
    this.isMouseDown = false;
    this.onMouseDownPosition.x = clientX - this.onMouseDownPosition.x;
    this.onMouseDownPosition.y = clientY - this.onMouseDownPosition.y;

    if (this.onMouseDownPosition.length() > 5) {
        return;
    }
    this.render();
  }
  @Output() mouseWheelUp = new EventEmitter();
  @HostListener('wheel', ['$event']) onMouseWheel(event: any) {
    this.mouseWheelFunc(event);
  }
  @HostListener('mousewheel', ['$event']) onMouseWheelChrome(event: any) {
    this.mouseWheelFunc(event);
  }
  @HostListener('DOMMouseScroll', ['$event']) onMouseWheelFirefox(event: any) {
    this.mouseWheelFunc(event);
  }
  @HostListener('onmousewheel', ['$event']) onMouseWheelIE(event: any) {
    this.mouseWheelFunc(event);
  }
  @HostListener('MozMousePixelScroll', ['$event']) onMouseWheelFirefoxOld(event: any) {
    this.mouseWheelFunc(event);
  }
  mouseWheelFunc(event: any) {
    var event = window.event || event; // old IE support
    var delta = Math.max(-10, Math.min(10, (event.wheelDelta * 7
    || event.wheelDeltaY || -event.deltaY * 4)));
    if (delta > 0) {
        this.mouseWheelUp.emit(event);
    }
    // for IE
    event.returnValue = false;
    // for Chrome and Firefox
    if (event.preventDefault) {
        event.preventDefault();
    }
    this.onWheel(delta);
  }

  public onWheel(wheelDeltaY: number) {
    this.radious -= wheelDeltaY * 0.4;
    this.camera.position.x = this.radious * Math.sin(this.theta * Math.PI / 360) * Math.cos(this.phi * Math.PI / 360);
    this.camera.position.y = this.radious * Math.sin(this.phi * Math.PI / 360);
    this.camera.position.z = this.radious * Math.cos(this.theta * Math.PI / 360) * Math.cos(this.phi * Math.PI / 360);
    this.camera.updateMatrix();
    this.render();
}
}