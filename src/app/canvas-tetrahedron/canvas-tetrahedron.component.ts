import { AfterViewInit, Component, ElementRef, Input, ViewChild, HostListener, Output, EventEmitter, Type } from '@angular/core';
import * as THREE from 'three';
import { TetrahedronService, WAY, TYPE } from '../tetrahedron.service';
import { TrustedHtmlString } from '@angular/core/src/sanitization/bypass';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-canvas-tetrahedron',
  templateUrl: './canvas-tetrahedron.component.html',
  styleUrls: ['./canvas-tetrahedron.component.css'],
  providers: [TetrahedronService]
})
export class CanvasTetrahedronComponent implements AfterViewInit {
  @ViewChild('canvas')
  private canvasRef: ElementRef;
  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }
  constructor(private tetraService: TetrahedronService) {
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
    this.camera.position.set(100, 134, 210);
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

  private onOffForm = [];
  private cube = new THREE.Group();
  private main_group = new THREE.Object3D();
  private helper: THREE.Mesh;
  private material = {
    black: new THREE.MeshBasicMaterial({ color: 0x00000 }),
    blue: new THREE.MeshBasicMaterial({ color: 0x0000ff }),
    green: new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
    red: new THREE.MeshBasicMaterial({ color: 0xff0000 }),
    black_dash_line: new THREE.LineDashedMaterial({ color: 0x000000, dashSize: 3, gapSize: 2 }),
    dim_gray_line: new THREE.LineBasicMaterial({ color: 0x292929 }),
    black_line: new THREE.LineBasicMaterial({ color: 0x000000 }),
    section: new THREE.MeshBasicMaterial({
      color: 0x90EE90,
      side: THREE.DoubleSide
    }),
    base: new THREE.MeshPhongMaterial({
      color: 0x15628f, emissive: 0x072534, side: THREE.DoubleSide, flatShading: true,
      opacity: 0.7, transparent: true
    }),
    base_line: new THREE.LineBasicMaterial({ color: 0x000000 })
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
    let component: CanvasTetrahedronComponent = this;
    loader.load('assets/font//Roboto_Regular.json', function (_font) {
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
  public initilaze() {
    this.material.section.polygonOffset = true;
    this.material.section.polygonOffsetFactor = -0.1;
    this.material.dim_gray_line.polygonOffset = true;
    this.material.dim_gray_line.polygonOffsetFactor = -0.1;
    /*this.material.black.side = THREE.BackSide;
    this.material.front.side = THREE.FrontSide;*/
    this.scene.add(this.cube);
    this.y_asix(new THREE.Vector3(-this.tetraService.side, 0, 0), new THREE.Vector3(this.tetraService.side, 0, 0), this.material.blue);
    this.z_asix(new THREE.Vector3(0, -this.tetraService.side, 0), new THREE.Vector3(0, this.tetraService.side, 0), this.material.red);
    this.x_asix(new THREE.Vector3(0, 0, -this.tetraService.side), new THREE.Vector3(0, 0, this.tetraService.side), this.material.green);
    this.generateText([{ text: 'x', position: new THREE.Vector3(0, -5, 99) },
    { text: 'y', position: new THREE.Vector3(99, -5, 0) },
    { text: 'z', position: new THREE.Vector3(5, 99, 0) }]);

    this.scene.add(this.main_group);
    //рисуем тетраэдр
    const geom = new THREE.PolyhedronBufferGeometry(this.tetraService.vertices,
      this.tetraService.indices, Math.sqrt(3) * this.tetraService.a / 3, 0);
    this.main_group.add(new THREE.LineSegments(geom, this.material.base_line));
    const mesh = new THREE.Mesh(geom, this.material.base);
    mesh.renderOrder = 1;
    this.main_group.add(mesh);
    this.onOffForm.push(this.main_group);
    this.helper = new THREE.Mesh(new THREE.SphereGeometry(2, 240),
      new THREE.MeshNormalMaterial());
    this.scene.add(this.helper);
    this.render();
    this.scene.add(this.section);
  }

  private isMouseDown: boolean = false;
  private radious: number = 270;
  private theta: number = 45;
  private onMouseDownTheta: number = 45;
  private phi: number = 60;
  private onMouseDownPhi: number = 60;
  private onMouseDownPosition = new THREE.Vector2();
  private onMouseLastPosition = new THREE.Vector2();
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
    const intersects = this.raycaster.intersectObjects(this.onOffForm, true);
    if (intersects.length > 0) {
      this.helper.position.copy(intersects[0].point);
    }

    if (this.isMouseDown) {
      this.theta = -((clientX - this.onMouseDownPosition.x) * 0.3)
        + this.onMouseDownTheta;
      this.phi = ((clientY - this.onMouseDownPosition.y) * 0.3)
        + this.onMouseDownPhi;
      this.phi = Math.min(180, Math.max(-40, this.phi));
      this.camera.position.x = this.radious * Math.sin(this.theta * Math.PI / 360) * Math.cos(this.phi * Math.PI / 360);
      this.camera.position.y = this.radious * Math.sin(this.phi * Math.PI / 360);
      this.camera.position.z = this.radious * Math.cos(this.theta * Math.PI / 360) * Math.cos(this.phi * Math.PI / 360);
      this.onMouseLastPosition.x = clientX;
      this.onMouseLastPosition.y = clientY;
    }
    this.render();
  }
  @HostListener('mouseup', ['$event']) onWindowMouseUp(event: any) {
    this.onMouseUp(event);
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
    var delta = Math.max(-15, Math.min(15, (event.wheelDelta * 7
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
    this.radious = Math.min(Math.max(this.radious, 60), 500);
    this.camera.position.x = this.radious * Math.sin(this.theta * Math.PI / 360) * Math.cos(this.phi * Math.PI / 360);
    this.camera.position.y = this.radious * Math.sin(this.phi * Math.PI / 360);
    this.camera.position.z = this.radious * Math.cos(this.theta * Math.PI / 360) * Math.cos(this.phi * Math.PI / 360);
    this.camera.updateMatrix();
    this.render();
  }

  private section = new THREE.Object3D();
  public onClick(event: any) {
    event.preventDefault();
    const mouse = new THREE.Vector2();
    const clientX = event.pageX - this.canvas.offsetLeft;
    const clientY = event.pageY - this.canvas.offsetTop;
    mouse.x = ((clientX) / this.canvas.clientWidth) * 2 - 1;
    mouse.y = -((clientY) / this.canvas.clientHeight) * 2 + 1;
    this.raycaster.setFromCamera(mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.onOffForm, true);
    //если точка на ребразх - то она добавляется в стек
    if (intersects.length > 0) {
      const p = intersects[0].point;
      let hel = this.drawBaseDot();
      hel = this.setPosition(hel, p);
      if (this.tetraService.drawed) {
        this.clearSelection();
        for (const point of this.tetraService.stack) {
          let h = this.drawBaseDot();
          h = this.setPosition(h, point);
          this.section.add(h);
        }
        this.tetraService.drawed = false;
      }
      this.tetraService.stack.push(hel.position);
      this.section.add(hel);
    }
    const plane = this.tetraService.getBuildPlane();
    if (plane === WAY.Clear) {
      this.user_assistance = 'Все три точки находятся на одной прямой. Отметьте третью точку на другом ребре.';
      this.clearSelection();
      for (const p of this.tetraService.stack) {
        let hel = this.drawBaseDot();
        hel = this.setPosition(hel, p);
        this.section.add(hel);
      }
      return;
    }
    if (plane === WAY.DRAW_SIMPLE || plane === WAY.DRAW_HARD) {
      /*
      проверка на принадлежность одной прямой:
      */
      let { plan: planToDraw, dots: selectionDots } = this.tetraService.generatePlan(plane);
      //debugger;
      this.listOfScenes = new Array<THREE.Object3D>();
      this.numDrawedStep = -1;
      //создаем массив сцен
      for (let list of planToDraw) {
        let nowScene = new THREE.Scene();
        let dots = new Set<THREE.Vector3>();
        //может быть массив пар вершин, может быть массив вершин (черных и серых)
        if (list.type === TYPE.PLANE) {
          dots = new Set(list.black);
          this.drawLines(nowScene, list.black);
          for (let i = 0; i < list.gray.length; i++) {
            let tmp = this.drawLine(nowScene, list.black[i], list.gray[i], this.material.black_dash_line);
            tmp.computeLineDistances();
          }
        } else if (list.type === TYPE.LINES) {
          for (const part of list) {
            dots.add(part[0]);
            dots.add(part[1]);
            this.drawLine(nowScene, part[0], part[1], this.material.dim_gray_line);
          }
        }
        this.drawDots(nowScene, dots);
        nowScene.visible = false;
        this.listOfScenes.push(nowScene);
        this.section.add(this.listOfScenes[this.listOfScenes.length - 1]);
      }
      //последняя сцена: отрисовка сечения}
      let geometry = new THREE.Geometry();
      geometry.vertices = selectionDots as Array<THREE.Vector3>;
      geometry.faces = this.combinations(geometry.vertices.length);
      geometry.computeBoundingSphere();
      this.listOfScenes.push((new THREE.Scene()).add(new THREE.Mesh(geometry, this.material.section)));
      this.section.add(this.listOfScenes[this.listOfScenes.length - 1]);
      this.listOfScenes[this.listOfScenes.length - 1].visible = false;
      this.user_assistance = 'Cечение расчитано, для просмотра этапов построения используйте клавиши клавиатуры:\n → (право), следующий шаг, ← (лево), предыдущий шаг.';
      this.render();
      this.tetraService.stack.shift();
    }
  }

  private listOfScenes: Array<THREE.Object3D>;
  private numDrawedStep: number = -1;
  public user_assistance: string =
    'Отметьте три точки на ребрах куба, не больше двух точек на одном ребре.';
  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      if (this.numDrawedStep < this.listOfScenes.length - 1) {
        this.listOfScenes[++this.numDrawedStep].visible = true;
        this.render();
      }
    }
    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      if (this.numDrawedStep > -1) {
        this.listOfScenes[this.numDrawedStep--].visible = false;
        this.render();
      }
    }
  }
  private drawBaseDot(): THREE.Mesh {
    return new THREE.Mesh(new THREE.SphereGeometry(1.5, 240), new THREE.MeshNormalMaterial());
  }
  private drawLine(_scene: THREE.Object3D, d1: THREE.Vector3, d2: THREE.Vector3, material: any): THREE.Line {
    const geom = new THREE.Geometry();
    geom.vertices.push(d1);
    geom.vertices.push(d2);
    let t = new THREE.Line(geom, material);
    _scene.add(t);
    return t;
  }
  private drawLines(_scene: THREE.Object3D, dots: THREE.Vector3[]) {
    for (let i = 1; i < dots.length; i++) {
      const geom = new THREE.Geometry();
      geom.vertices.push(dots[i - 1]);
      geom.vertices.push(dots[i]);
      _scene.add(new THREE.Line(geom, this.material.dim_gray_line));
    }
  }
  private drawDots(_scene: THREE.Object3D, dots: Set<THREE.Vector3>) {
    for (const dot of Array.from(dots)) {
      let d = new THREE.Mesh(new THREE.SphereGeometry(0.7, 240), this.material.black);
      _scene.add(d);
      d = this.setPosition(d, dot);
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
        const _x = a.slice(i, i + 2).concat(a[j]);
        out.push(new THREE.Face3(_x[0], _x[1], _x[2]));
      }
    }
    const x = a.slice(-2).concat(a[0]);
    out.push(new THREE.Face3(x[0], x[1], x[2]));
    return out;
  }
}