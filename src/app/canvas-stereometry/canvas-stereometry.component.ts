import { AfterViewInit, Component, ElementRef, Input, ViewChild, HostListener, Output, EventEmitter } from '@angular/core';
import * as THREE from 'three';
import { CubeService, Way } from '../cube.service';
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
    }),
    section: new THREE.MeshBasicMaterial({ color: 0x90EE90, 
      side: THREE.DoubleSide })
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
  private generateText(arr: { text: string, position: THREE.Vector3 }[]) {
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
    let material = new THREE.LineBasicMaterial({ color: 0x090909, linewidth: 1.5, side: THREE.DoubleSide });
    // var y = new THREE.CylinderGeometry( 0.5, 1, 100, 240 );
    material.polygonOffset = true;
    material.polygonOffsetFactor = -0.1;
    let mesh = new THREE.Line(y, material);
    /*mesh.position.x = (v1.x + v2.x) / 2;
    mesh.position.y = (v1.y + v2.y) / 2;
    mesh.position.z = (v1.z + v2.z) / 2;*/
    this.cube_line.add(mesh);
  }
  public initilaze() {
    this.scene.add(this.cube);
    this.y_asix(new THREE.Vector3(-this.cubeService.side, 0, 0), new THREE.Vector3(this.cubeService.side, 0, 0), this.material.blue);
    this.z_asix(new THREE.Vector3(0, -this.cubeService.side, 0), new THREE.Vector3(0, this.cubeService.side, 0), this.material.red);
    this.x_asix(new THREE.Vector3(0, 0, -this.cubeService.side), new THREE.Vector3(0, 0, this.cubeService.side), this.material.green);
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
    this.scene.add(this.section);
    this.material.section.polygonOffset = true;
    this.material.section.polygonOffsetFactor = -0.1;
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
  private raycaster = new THREE.Raycaster();

  /* EVENTS */
  public onMouseDown(event: MouseEvent) {
    event.preventDefault();
    this.isMouseDown = true;
    this.onMouseDownTheta = this.theta;
    this.onMouseDownPhi = this.phi;
    this.onMouseDownPosition.x = this.onMouseLastPosition.x = event.pageX - this.canvas.offsetLeft;
    this.onMouseDownPosition.y = this.onMouseLastPosition.y = event.pageY - this.canvas.offsetTop;
  }
  public onMouseMove(event: MouseEvent) {
    event.preventDefault();
    const clientX = event.pageX - this.canvas.offsetLeft;
    const clientY = event.pageY - this.canvas.offsetTop;
    const mouse = new THREE.Vector2();
    mouse.x = ((clientX) / this.canvas.clientWidth) * 2 - 1;
    mouse.y = -((clientY) / this.canvas.clientHeight) * 2 + 1;
    this.raycaster.setFromCamera(mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.onOffCubes, true);
    if (intersects.length > 0) {
      //this.helper.position.set(0, 0, 0);
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
    const clientX = event.pageX - this.canvas.offsetLeft;
    const clientY = event.pageY - this.canvas.offsetTop;
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
  private section = new THREE.Object3D();
  @HostListener('document:click', ['$event']) onClick(event: any) {
    event.preventDefault();
    const mouse = new THREE.Vector2();
    const clientX = event.pageX - this.canvas.offsetLeft;
    const clientY = event.pageY - this.canvas.offsetTop;
    mouse.x = ((clientX) / this.canvas.clientWidth) * 2 - 1;
    mouse.y = -((clientY) / this.canvas.clientHeight) * 2 + 1;
    this.raycaster.setFromCamera(mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.onOffCubes, true);
    //если точка на ребразх - то она добавляется в стек
    if (intersects.length > 0) {
      const p = intersects[0].point;
      let hel = new THREE.Mesh(new THREE.SphereGeometry(1, 240), new THREE.MeshNormalMaterial());
      hel = this.setPosition(hel, p);
      if (this.cubeService.drawed) {
        this.clearSelection();
        for (const point of this.cubeService.stack) {
          let h = new THREE.Mesh(new THREE.SphereGeometry(1, 240), new THREE.MeshNormalMaterial());
          h = this.setPosition(h, point);
          this.section.add(h);
        }
        this.cubeService.drawed = false;
      }
      this.cubeService.stack.push(hel.position);
      this.section.add(hel);
    }
    const plane = this.cubeService.canBuildPlane();
    if (plane === Way.Clear) {
      this.clearSelection();
      for (const p of this.cubeService.stack) {
        let hel = new THREE.Mesh(new THREE.SphereGeometry(1, 240), new THREE.MeshNormalMaterial());
        hel = this.setPosition(hel, p);
        this.section.add(hel);
      }
      return;
    }
    if (plane === Way.DrawSimple || plane === Way.DrawHard) {
      /*
      проверка на принадлежность одной прямой:
      */
      if (plane === Way.DrawSimple) {
        const geometry = new THREE.Geometry();
        for (const dot of this.cubeService.arr) {
          if (this.cubeService.onEdgeCube(dot)) {
            geometry.vertices.push(dot);
          }
        }
        geometry.faces = this.combinations(geometry.vertices.length);
        geometry.computeBoundingSphere();
        const mesh = new THREE.Mesh(geometry, this.material.section);
        mesh.renderOrder = 3;
        this.section.add(mesh);
        for (let i = 0; i < this.cubeService.arr.length; i++) {
          let a = new THREE.Mesh(new THREE.SphereGeometry(0.7, 240), this.material.black);
          this.section.add(a);
          a = this.setPosition(a, this.cubeService.arr[i]);
        }
      } else {
        const geometry = new THREE.Geometry();
        geometry.faces = this.combinations(geometry.vertices.length);
        console.log(geometry);
        geometry.computeBoundingSphere();
        let mesh = new THREE.Mesh(geometry, this.material.section);
        this.section.add(mesh);
      }
      this.render();
      this.cubeService.stack.shift();
    }
  }
  private clearSelection() {
    this.scene.remove(this.section);
    this.section = new THREE.Object3D();
    this.scene.add(this.section);
  }
  private combinations(n: number): THREE.Face3[] {
    const a = Array.apply(null, Array(n)).map(function (_, i) { return i; });
    const out = [];
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 2; j < n; j++) {
        const x = a.slice(i, i + 2).concat(a[j]);
        out.push(new THREE.Face3(x[0], x[1], x[2]));
      }
    }
    const x = a.slice(-2).concat(a[0]);
    out.push(new THREE.Face3(x[0], x[1], x[2]));
    return out;
  }
}