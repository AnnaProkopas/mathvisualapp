import {
  AfterViewInit, Component, ElementRef, Input, ViewChild, HostListener, ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-canvas',
  // template: `<img src="assets/img/logo.png">`,
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CanvasTrigComponent implements AfterViewInit {
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scaleConst = 1.5;
  public valSin: string = '0';
  public valCos: string = '1';
  public valTg: string = '0';
  public valCtg: string = '∞';
  public angle_rad: string = '0';
  public angle_deg: string = '0';
  public scene: THREE.Scene;
  public near_plane = 97;
  public far_plane = 100;
  public pointer: THREE.Mesh;
  public circle: { radius: number, x: number, y: number };

  public visibleSin: boolean = true;
  public visibleCos: boolean = true;
  public visibleTg: boolean = true;
  public visibleCtg: boolean = true;

  @ViewChild('canvas')
  private canvasRef: ElementRef;
  constructor(private ref: ChangeDetectorRef) {
    this.render = this.render.bind(this);
  }
  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }
  private createScene() {
    const _this = this;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);
    const url = "assets/img/back-circle.gif";
    let loader = new THREE.TextureLoader();
    loader.load(url, function (_texture) {
      var materialTexture = new THREE.MeshBasicMaterial({ map: _texture });
      let m = new THREE.Mesh(new THREE.PlaneGeometry(27, 27), materialTexture);
      _this.scene.add(m);
      _this.render();
    });

    this.circle = { radius: 10, x: 0, y: 0 };
    const segments = 240;

    this.y_asix(this.scene, new THREE.Vector3(0, -13, 1), new THREE.Vector3(0, 15, 1));
    this.x_asix(this.scene, new THREE.Vector3(-13, 0, 1), new THREE.Vector3(15, 0, 1));

    const mini_radius = 0.5 * 500 / this.canvas.clientWidth;
    const color_mini_circle = new THREE.MeshBasicMaterial({ color: 0x000090 });
    this.pointer = new THREE.Mesh(
      new THREE.CircleBufferGeometry(mini_radius, segments, 0, this.circle.radius), color_mini_circle);
    this.pointer.position.x = this.circle.x + this.circle.radius;
    this.pointer.position.z = 1;
    this.scene.add(this.pointer);
    this.createSin();
    this.createCos();
    this.createTg();
    this.createCtg();
  }

  private createLight() {
    const light = new THREE.PointLight(0xffffff, 1, 1000);
    light.position.set(0, 0, this.far_plane);
    this.scene.add(light);
  }

  private createCamera() {
    const aspectRatio = this.getAspectRatio(this.canvas);
    this.camera = new THREE.PerspectiveCamera(
      30,
      aspectRatio,
      this.near_plane,
      this.far_plane
    );

    this.camera.position.set(0, 0, this.far_plane);
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
  }

  private getAspectRatio(canvas: HTMLCanvasElement): number {
    const height = canvas.clientHeight;
    if (height === 0) {
      return 0;
    }
    return canvas.clientWidth / canvas.clientHeight;
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
    let component: CanvasTrigComponent = this;
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
        this.angle_rad = (this.getAngle() / Math.PI).toFixed(3);
        this.angle_deg = (this.getAngle() / Math.PI * 180).toFixed(2);
        if (this.visibleSin) {
          this.drawSin();
        }
        if (this.visibleCos) {
          this.drawCos();
        }
        if (this.visibleTg) {
          this.drawTg();
        }
        if (this.visibleCtg) {
          this.drawCtg();
        }

        this.render();
      } else {
        this.mouseOnLastPosPointer = false;
      }
    }
  }

  public onMouseUp(event: MouseEvent) {
    this.mouseOnLastPosPointer = false;
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

  public getAngle(): number {
    function cosAngle(vec1: THREE.Vector2, vec2: THREE.Vector3): number {
      return (vec1.x * vec2.x + vec1.y * vec2.y) /
        (Math.sqrt(vec1.x ** 2 + vec1.y ** 2) * Math.sqrt(vec2.x ** 2 + vec2.y ** 2));
    }
    let angle = Math.acos(cosAngle(new THREE.Vector2(this.circle.radius, 0),
      this.pointer.position));
    if (this.pointer.position.y < 0) {
      angle *= -1;
    }
    return angle;
  }

  public radToDeg(angle: number): number {
    return (angle * 180) / Math.PI;
  }

  private createSubCanvas(ratio: number, scene: THREE.Scene, canvas: HTMLCanvasElement) {
    const light = new THREE.PointLight(0xffffff, 1, 1000);
    light.position.set(0, 0, 100);
    scene.add(light);
    const aspectRatio = this.getAspectRatio(canvas);
    const camera = new THREE.PerspectiveCamera(
      ratio,
      aspectRatio,
      this.near_plane,
      this.far_plane
    );
    camera.position.set(0, 0, this.far_plane);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setClearColor(0xffffff, 1);
    renderer.autoClear = true;
    const component: CanvasTrigComponent = this;
    (function render() {
      //requestAnimationFrame(render);
      component.render();
    }());
    return { renderer: renderer, scene: scene, camera: camera };
  }

  @ViewChild('canvasSin')
  private canvasSinRef: ElementRef;
  private get canvasSin(): HTMLCanvasElement {
    return this.canvasSinRef.nativeElement;
  }

  private selectionSin = {
    renderer: new THREE.WebGLRenderer(), camera: new THREE.Camera(),
    lineSin: new THREE.Mesh(), dottedLineSin: new THREE.Mesh(),
    dotSin: new THREE.Mesh(), sceneSin: new THREE.Scene(),
    render() {
      if (this.renderer === undefined) {
        return;
      }
      this.renderer.render(this.sceneSin, this.camera);
    }
  };

  private createSin() {
    const _color = 0xFFA07A;
    const geometry = new THREE.BoxGeometry(1, this.pointer.position.y);
    this.selectionSin.lineSin = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: _color }));
    this.selectionSin.lineSin.position.y = 0;
    this.selectionSin.lineSin.position.x = 0;
    this.selectionSin.lineSin.visible = this.visibleSin;
    this.scene.add(this.selectionSin.lineSin);

    let sinScene = new THREE.Scene();
    sinScene.background = new THREE.Color(0xffffff);
    sinScene = this.y_asix(sinScene, new THREE.Vector3(0, -10, 0), new THREE.Vector3(0, 10, 0));
    sinScene = this.x_asix(sinScene, new THREE.Vector3(-25, 0, 0), new THREE.Vector3(25, 0, 0));

    const graph = new THREE.Geometry();
    for (let i = -1 * 2 * this.circle.radius; i <= 2 * this.circle.radius; i++) {
      graph.vertices.push(
        new THREE.Vector3(i,
          this.circle.radius * Math.sin(Math.PI * i / this.circle.radius / 2/* + this.getAngle()*/) / 2, 0));
    }
    const line2 = new THREE.Line(graph,
      new THREE.LineBasicMaterial({ color: _color, linewidth: 2.5 }));
    sinScene.add(line2);
    /*Math.PI * i  = x */
    this.selectionSin.dotSin = new THREE.Mesh(new THREE.CircleBufferGeometry(1, 240, 0, this.circle.radius),
      this.pointer.material);
    this.selectionSin.dotSin.position.x = 0;
    this.selectionSin.dotSin.position.y = 0;
    this.selectionSin.dotSin.position.z = 1;
    sinScene.add(this.selectionSin.dotSin);

    const base = this.createSubCanvas(15, sinScene, this.canvasSin);
    this.selectionSin.renderer = base.renderer;
    this.selectionSin.camera = base.camera;
    this.selectionSin.sceneSin = base.scene;
    this.hideSin();
  }

  private drawSin() {
    this.selectionSin.lineSin.geometry = new THREE.BoxGeometry(1, Math.abs(this.pointer.position.y));
    this.selectionSin.lineSin.position.y = this.pointer.position.y / 2;
    this.selectionSin.dotSin.position.x = this.getAngle() / Math.PI * 2 * this.circle.radius;
    this.valSin = (Math.sin(this.getAngle())).toFixed(2);
    this.selectionSin.dotSin.position.y = this.pointer.position.y / 2;
    this.selectionSin.render();
  }
  public showSin() {
    this.drawSin();
    this.selectionSin.lineSin.visible = true;
    this.visibleSin = true;
    this.ref.detectChanges();
    const el: HTMLElement = this.canvasSinRef.nativeElement;
    el.appendChild(this.selectionSin.renderer.domElement);
    this.selectionSin.render();
    this.render();
  }
  public hideSin() {
    this.selectionSin.lineSin.visible = false;
    this.visibleSin = false;
    this.ref.detectChanges();
    this.render();
  }

  @ViewChild('canvasCos')
  private canvasCosRef: ElementRef;
  private get canvasCos(): HTMLCanvasElement {
    return this.canvasCosRef.nativeElement;
  }
  private selectionCos = {
    renderer: new THREE.WebGLRenderer(), camera: new THREE.Camera(),
    lineCos: new THREE.Mesh(), dottedLineCos: new THREE.Mesh(),
    dotCos: new THREE.Mesh(), sceneCos: new THREE.Scene(),
    render() {
      if (this.renderer === undefined) {
        return;
      }
      this.renderer.render(this.sceneCos, this.camera);
    }
  };
  private createCos() {
    const _color = 0x20B2AA;
    const geometry = new THREE.BoxGeometry(this.pointer.position.x, 1);
    this.selectionCos.lineCos = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: _color }));
    this.selectionCos.lineCos.position.y = 0;
    this.selectionCos.lineCos.position.x = 0;
    this.selectionCos.lineCos.visible = this.visibleCos;
    this.scene.add(this.selectionCos.lineCos);

    let cosScene = new THREE.Scene();
    cosScene = this.y_asix(cosScene, new THREE.Vector3(0, -10, 0), new THREE.Vector3(0, 10, 0));
    cosScene = this.x_asix(cosScene, new THREE.Vector3(-25, 0, 0), new THREE.Vector3(25, 0, 0));

    const graph = new THREE.Geometry();
    for (let i = -1 * 2 * this.circle.radius; i <= 2 * this.circle.radius; i++) {
      graph.vertices.push(
        new THREE.Vector3(i,
          this.circle.radius * Math.cos(Math.PI * i / this.circle.radius / 2 + this.getAngle()) / 2, 0));
    }

    this.addText(cosScene, '-п', new THREE.Vector3(-2 * this.circle.radius, -2, 0));
    this.addText(cosScene, '-п/2', new THREE.Vector3(-this.circle.radius, -2, 0));
    this.addText(cosScene, '0', new THREE.Vector3(2, -2, 0));
    this.addText(cosScene, '-1', new THREE.Vector3(-this.circle.radius, -10, 0));
    this.addHatch(cosScene, new THREE.Vector3(- this.circle.radius, -0.5, 0), new THREE.Vector3(- this.circle.radius, 0.5, 0));
    this.addText(cosScene, '1', new THREE.Vector3(this.circle.radius, 10, 0));
    this.addHatch(cosScene, new THREE.Vector3(this.circle.radius, -0.5, 0), new THREE.Vector3(this.circle.radius, 0.5, 0));
    this.addText(cosScene, 'п', new THREE.Vector3(2 * this.circle.radius, -2, 0));
    this.addText(cosScene, 'п/2', new THREE.Vector3(this.circle.radius, -2, 0));
    cosScene.add(new THREE.Line(graph,
      new THREE.LineBasicMaterial({ color: _color, linewidth: 2.5 })));
    /*Math.PI * i  = x */
    this.selectionCos.dotCos = new THREE.Mesh(new THREE.CircleBufferGeometry(1, 240, 0, this.circle.radius),
      this.pointer.material);
    this.selectionCos.dotCos.position.x = 0;
    this.selectionCos.dotCos.position.y = this.pointer.position.x / 2;
    this.selectionCos.dotCos.position.z = 1;
    cosScene.add(this.selectionCos.dotCos);

    const base = this.createSubCanvas(15, cosScene, this.canvasCos);
    this.selectionCos.renderer = base.renderer;
    this.selectionCos.camera = base.camera;
    this.selectionCos.sceneCos = base.scene;
    this.hideCos();
  }
  private drawCos() {
    this.selectionCos.lineCos.geometry = new THREE.BoxGeometry(Math.abs(this.pointer.position.x), 1);
    this.selectionCos.lineCos.position.x = this.pointer.position.x / 2;
    this.selectionCos.dotCos.position.x = this.getAngle() / Math.PI * 2 * this.circle.radius;
    this.valCos = Math.cos(this.getAngle()).toFixed(2);
    this.selectionCos.dotCos.position.y = this.pointer.position.x / 2;
    this.selectionCos.render();
  }
  public showCos() {
    this.drawCos();
    this.selectionCos.lineCos.visible = true;
    this.visibleCos = true;
    this.ref.detectChanges();
    const el: HTMLElement = this.canvasCosRef.nativeElement;
    el.appendChild(this.selectionCos.renderer.domElement);
    this.selectionCos.render();
    this.render();
  }
  public hideCos() {
    this.selectionCos.lineCos.visible = false;
    this.visibleCos = false;
    this.ref.detectChanges();
    this.render();
  }

  @ViewChild('canvasTg')
  private canvasTgRef: ElementRef;
  private get canvasTg(): HTMLCanvasElement {
    return this.canvasTgRef.nativeElement;
  }
  private selectionTg = {
    renderer: new THREE.WebGLRenderer(), camera: new THREE.Camera(),
    _lineTg: new THREE.Mesh(), dottedLineTg: new THREE.Mesh(),
    _dotTg: new THREE.Mesh(), sceneTg: new THREE.Scene(), slopingLine: new THREE.Line(),
    set lineTg(h: number) {
      this._lineTg.geometry = new THREE.BoxGeometry(1, Math.abs(h))
      this._lineTg.position.y = h / 2;
    },
    set dotTg(pos: { x: number, y: number, z: number }) {
      if (Math.abs(pos.y) > 23) {
        this._dotTg.visible = false;
      } else {
        this._dotTg.position.x = pos.x;
        this._dotTg.position.y = pos.y;
        this._dotTg.position.z = pos.z;
        this._dotTg.visible = true;
      }
    },
    getGraph(size: { from: number, to: number }): THREE.Line {
      const graph_material = new THREE.LineBasicMaterial({ color: 0x2ECC71, linewidth: 2.5 });
      const graph = new THREE.Geometry();
      for (let i = size.from; i <= size.to; i += 1 * Math.PI / 180) {
        graph.vertices.push(
          new THREE.Vector3(i * 180 / 8 / Math.PI, Math.tan(i) * 10, 0));
      }
      return new THREE.Line(graph, graph_material);
    },
    render() {
      if (this.renderer === undefined) {
        return;
      }
      this.renderer.render(this.sceneTg, this.camera);
    }
  };

  private createTg() {
    const material = new THREE.MeshBasicMaterial({ color: 0x2ECC71 });
    const geometry = new THREE.BoxGeometry(1, -1);
    this.selectionTg._lineTg = new THREE.Mesh(geometry, material);
    this.selectionTg._lineTg.position.y = 0;
    this.selectionTg._lineTg.position.x = this.circle.radius;
    this.selectionTg._lineTg.visible = this.visibleTg;
    this.scene.add(this.selectionTg._lineTg);

    let geom = new THREE.Geometry();
    geom.vertices.push(new THREE.Vector3(0, 0, 0));
    geom.vertices.push(new THREE.Vector3(10, 10 * this.pointer.position.y / this.pointer.position.x, 0));
    this.selectionTg.slopingLine = new THREE.Line(geom, new THREE.LineBasicMaterial({ color: 0x008B8B }));
    this.selectionTg.slopingLine.visible = this.visibleTg;
    this.scene.add(this.selectionTg.slopingLine);

    let TgScene = new THREE.Scene();
    TgScene = this.y_asix(TgScene, new THREE.Vector3(0, -25, 0), new THREE.Vector3(0, 25, 0));
    TgScene = this.x_asix(TgScene, new THREE.Vector3(-25, 0, 0), new THREE.Vector3(25, 0, 0));

    /*Math.PI * i  = x */
    this.selectionTg._dotTg = new THREE.Mesh(new THREE.CircleBufferGeometry(1, 240, 0, this.circle.radius),
      new THREE.MeshBasicMaterial({ color: 0x000090 }));
    this.selectionTg.dotTg = { x: 0, y: 0, z: 0 };
    //this.selectionTg._dotTg.position.z = 1;
    TgScene.add(this.selectionTg._dotTg);

    //1я часть графика [-pi, -pi/2]
    TgScene.add(this.selectionTg.getGraph({ from: -Math.PI, to: Math.atan(2.3) - Math.PI }));
    //2я часть графика [-pi/2, pi/2]
    TgScene.add(this.selectionTg.getGraph({ from: Math.atan(-2.3), to: Math.atan(2.3) }));
    //3я часть графика [pi/2, pi]
    TgScene.add(this.selectionTg.getGraph({ from: Math.PI + Math.atan(-2.3), to: Math.PI }));
    this.addText(TgScene, '-п', new THREE.Vector3(-180 / 8, -2, 0));
    this.addText(TgScene, '-п/2', new THREE.Vector3(-180 / 16, -2, 0));
    this.addText(TgScene, '0', new THREE.Vector3(2, -2, 0));
    this.addText(TgScene, '-1', new THREE.Vector3(2, -10, 0));
    this.addHatch(TgScene, new THREE.Vector3(-0.5, -10, 0), new THREE.Vector3(0.5, -10, 0));
    this.addText(TgScene, '1', new THREE.Vector3(-2, 10, 0));
    this.addHatch(TgScene, new THREE.Vector3(-0.5, 10, 0), new THREE.Vector3(0.5, 10, 0));
    this.addText(TgScene, '-2.3', new THREE.Vector3(2, -23, 0));
    this.addText(TgScene, '2.3', new THREE.Vector3(-4, 23, 0));
    this.addText(TgScene, 'п', new THREE.Vector3(180 / 8, -2, 0));
    this.addText(TgScene, 'п/2', new THREE.Vector3(180 / 16, -2, 0));

    const base = this.createSubCanvas(30, TgScene, this.canvasTg);
    this.selectionTg.renderer = base.renderer;
    this.selectionTg.camera = base.camera;
    this.selectionTg.sceneTg = base.scene;
    this.hideTg();
  }
  private drawTg() {
    let angle = this.getAngle();
    if (Math.abs(Math.tan(angle)) > 100) {
      this.valTg = Math.tan(angle) > 0 ? "∞" : "-∞";
    } else {
      this.valTg = Math.tan(angle).toFixed(2);
    }
    let geom = new THREE.Geometry();
    let height_line = 0;
    let h = 1.5 * this.circle.radius;
    const atan_h = Math.atan(h);
    height_line = this.circle.radius * this.pointer.position.y / this.pointer.position.x;
    //если около пи/2 (проверяем крайние значения)
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
    this.selectionTg.lineTg = height_line;

    this.selectionTg.dotTg = { x: angle * 180 / Math.PI / 8, y: Math.tan(angle) * 10, z: 1 };
    this.selectionTg.render();
  }
  public showTg() {
    this.drawTg();
    this.selectionTg.slopingLine.visible = true;
    this.selectionTg._lineTg.visible = true;
    this.visibleTg = true;
    this.ref.detectChanges();
    const el: HTMLElement = this.canvasTgRef.nativeElement;
    el.appendChild(this.selectionTg.renderer.domElement);
    this.selectionTg.render();
    this.render();
  }
  public hideTg() {
    this.selectionTg.slopingLine.visible = false;
    this.selectionTg._lineTg.visible = false;
    this.visibleTg = false;
    this.ref.detectChanges();
    this.render();
  }

  @ViewChild('canvasCtg')
  private canvasCtgRef: ElementRef;
  private get canvasCtg(): HTMLCanvasElement {
    return this.canvasCtgRef.nativeElement;
  }
  private selectionCtg = {
    renderer: new THREE.WebGLRenderer(), camera: new THREE.Camera(),
    _lineCtg: new THREE.Mesh(), dottedLineCtg: new THREE.Mesh(),
    _dotCtg: new THREE.Mesh(), sceneCtg: new THREE.Scene(), slopingLine: new THREE.Line(),
    set lineCtg(w: number) {
      this._lineCtg.geometry = new THREE.BoxGeometry(Math.abs(w), 1)
      this._lineCtg.position.x = w / 2;
    },
    set dotCtg(pos: { x: number, y: number, z: number }) {
      if (Math.abs(pos.y) > 23) {
        this._dotCtg.visible = false;
      } else {
        this._dotCtg.position.x = pos.x;
        this._dotCtg.position.y = pos.y;
        this._dotCtg.position.z = pos.z;
        this._dotCtg.visible = true;
      }
    },
    getGraph(size: { from: number, to: number }): THREE.Line {
      const graph_material = new THREE.LineBasicMaterial({ color: 0xCC2E71, linewidth: 2.5 });
      const graph = new THREE.Geometry();
      for (let i = size.from; i <= size.to; i += 1 * Math.PI / 180) {
        graph.vertices.push(
          new THREE.Vector3(i * 180 / 8 / Math.PI, 1 / Math.tan(i) * 10, 0));
      }
      return new THREE.Line(graph, graph_material);
    },
    render() {
      if (this.renderer === undefined) {
        return;
      }
      this.renderer.render(this.sceneCtg, this.camera);
    }
  };
  private ctg(x: number) {
    return 1 / Math.tan(x);
  }
  private arcctg(x: number) {
    return Math.PI / 2 - Math.atan(x);
  }
  private createCtg() {
    const material = new THREE.MeshBasicMaterial({ color: 0xCC2E71 });
    const geometry = new THREE.BoxGeometry(-1, 1);
    this.selectionCtg._lineCtg = new THREE.Mesh(geometry, material);
    this.selectionCtg._lineCtg.position.x = 0;
    this.selectionCtg._lineCtg.position.y = this.circle.radius;
    this.selectionCtg._lineCtg.visible = this.visibleCtg;
    this.scene.add(this.selectionCtg._lineCtg);

    let geom = new THREE.Geometry();
    geom.vertices.push(new THREE.Vector3(0, 0, 0));
    geom.vertices.push(new THREE.Vector3(10, 0, 0));
    this.selectionCtg.slopingLine = new THREE.Line(geom, new THREE.LineBasicMaterial({ color: 0x8B008B }));
    this.selectionCtg.slopingLine.visible = this.visibleCtg;
    this.scene.add(this.selectionCtg.slopingLine);

    let CtgScene = new THREE.Scene();
    CtgScene = this.y_asix(CtgScene, new THREE.Vector3(0, -25, 0), new THREE.Vector3(0, 25, 0));
    CtgScene = this.x_asix(CtgScene, new THREE.Vector3(-25, 0, 0), new THREE.Vector3(25, 0, 0));

    /*Math.PI * i  = x */
    this.selectionCtg._dotCtg = new THREE.Mesh(new THREE.CircleBufferGeometry(1, 240, 0, this.circle.radius),
      this.pointer.material);
    //this.selectionCtg._dotCtg.position.z = 1;
    this.selectionCtg.dotCtg = { x: 0, y: 25, z: 1 };
    CtgScene.add(this.selectionCtg._dotCtg);

    //1я часть графика [-pi, 0]
    CtgScene.add(this.selectionCtg.getGraph({ from: this.arcctg(2.3) - Math.PI, to: this.arcctg(-2.3) - Math.PI }));
    //2я часть графика [0, pi]
    CtgScene.add(this.selectionCtg.getGraph({ from: this.arcctg(2.3), to: this.arcctg(-2.3) }));
    this.addText(CtgScene, '-п', new THREE.Vector3((this.arcctg(2.4) - Math.PI) * 180 / 8 / Math.PI, -2, 0));
    this.addText(CtgScene, '-п/2', new THREE.Vector3((this.arcctg(2.4) - Math.PI) * 180 / 16 / Math.PI, -2, 0));
    this.addText(CtgScene, '0', new THREE.Vector3(2, -2, 0));
    this.addText(CtgScene, '-1', new THREE.Vector3(2, -10, 0));
    this.addHatch(CtgScene, new THREE.Vector3(-0.5, -10, 0), new THREE.Vector3(0.5, -10, 0));
    this.addText(CtgScene, '1', new THREE.Vector3(-2, 10, 0));
    this.addHatch(CtgScene, new THREE.Vector3(-0.5, 10, 0), new THREE.Vector3(0.5, 10, 0));
    this.addText(CtgScene, '-2.3', new THREE.Vector3(2, -23, 0));
    this.addText(CtgScene, '2.3', new THREE.Vector3(-4, 23, 0));
    this.addText(CtgScene, 'п', new THREE.Vector3((this.arcctg(-2.4)) * 180 / 8 / Math.PI, -2, 0));
    this.addText(CtgScene, 'п/2', new THREE.Vector3((this.arcctg(-2.4)) * 180 / 16 / Math.PI - 1, -2, 0));
    const base = this.createSubCanvas(30, CtgScene, this.canvasCtg);
    this.selectionCtg.renderer = base.renderer;
    this.selectionCtg.camera = base.camera;
    this.selectionCtg.sceneCtg = base.scene;
    this.hideCtg();
  }
  private drawCtg() {
    let angle = this.getAngle();
    if (Math.abs(this.ctg(angle)) > 100) {
      this.valCtg = this.ctg(angle) > 0 ? "∞" : "-∞";
    } else {
      this.valCtg = this.ctg(angle).toFixed(2);
    }
    let geom = new THREE.Geometry();
    let width_line = this.circle.radius / (this.pointer.position.y / this.pointer.position.x);
    let w = 1.5 * this.circle.radius;
    //если около пи/2 (проверяем крайние значения)
    if (Math.abs(width_line) > w) {
      w *= (width_line < 0) ? -1 : 1;
      const y = w * (this.pointer.position.y / this.pointer.position.x);
      geom.vertices.push(new THREE.Vector3(w, y, 0));
      width_line = w;
    } else {
      geom.vertices.push(new THREE.Vector3(width_line, this.circle.radius, 0));
    } //линия может идти как от указателя, так и от 0,0
    if (angle < 0) {
      geom.vertices.push(this.pointer.position);
      //debugger;
    } else {
      geom.vertices.push(new THREE.Vector3(0, 0, 0));
    }
    this.selectionCtg.slopingLine.geometry = geom;
    this.selectionCtg.lineCtg = width_line;

    this.selectionCtg.dotCtg = { x: angle * 180 / Math.PI / 8, y: this.ctg(angle) * 10, z: 1 };
    this.selectionCtg.render();
  }
  public showCtg() {
    this.drawCtg();
    this.selectionCtg.slopingLine.visible = true;
    this.selectionCtg._lineCtg.visible = true;
    this.visibleCtg = true;
    this.ref.detectChanges();
    const el: HTMLElement = this.canvasCtgRef.nativeElement;
    el.appendChild(this.selectionCtg.renderer.domElement);
    this.selectionCtg.render();
    this.render();
  }
  public hideCtg() {
    this.selectionCtg.slopingLine.visible = false;
    this.selectionCtg._lineCtg.visible = false;
    this.visibleCtg = false;
    this.ref.detectChanges();
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

  private x_asix(localScene: THREE.Scene, fromDot: THREE.Vector3, toDot: THREE.Vector3): THREE.Scene {
    let y = new THREE.Geometry();
    const black_material = new THREE.MeshBasicMaterial({ color: 0x00000 });
    y.vertices.push(fromDot);
    y.vertices.push(toDot);
    localScene.add(new THREE.Line(y, black_material));
    y = new THREE.Geometry();
    y.vertices.push(new THREE.Vector3(toDot.x - 2, toDot.y + 1, 1));
    y.vertices.push(toDot);
    localScene.add(new THREE.Line(y, black_material));
    y = new THREE.Geometry();
    y.vertices.push(toDot);
    y.vertices.push(new THREE.Vector3(toDot.x - 2, toDot.y - 1, 1));
    localScene.add(new THREE.Line(y, black_material));
    this.addText(localScene, 'x', new THREE.Vector3(toDot.x, toDot.y - 2, toDot.z));
    return localScene;
  }

  private y_asix(localScene: THREE.Scene, fromDot: THREE.Vector3, toDot: THREE.Vector3): THREE.Scene {
    let y = new THREE.Geometry();
    const black_material = new THREE.MeshBasicMaterial({ color: 0x00000 });
    y.vertices.push(fromDot);
    y.vertices.push(toDot);
    localScene.add(new THREE.Line(y, black_material));
    y = new THREE.Geometry();
    y.vertices.push(new THREE.Vector3(toDot.x + 1, toDot.y - 2, 1));
    y.vertices.push(toDot);
    localScene.add(new THREE.Line(y, black_material));
    y = new THREE.Geometry();
    y.vertices.push(toDot);
    y.vertices.push(new THREE.Vector3(toDot.x - 1, toDot.y - 2, 1));
    localScene.add(new THREE.Line(y, black_material));
    this.addText(localScene, 'y', new THREE.Vector3(toDot.x + 2, toDot.y, toDot.z));
    return localScene;
  }

  private addText(localScene: THREE.Scene, text: string, pos: THREE.Vector3) {
    let component: CanvasTrigComponent = this;
    new THREE.FontLoader().load('assets/font//Roboto_Regular.json', function (_font) {
      const geometry = new THREE.TextGeometry(text, {
        font: Object(_font) as THREE.Font,
        size: 1.5,
        height: 0.2,
        curveSegments: 12,
        bevelEnabled: false,
        bevelThickness: 1,
        bevelSize: 0.2,
        bevelSegments: 10
      });
      const textMaterial = new THREE.MeshPhongMaterial(
        { color: 0x000000 }
      );
      let m = new THREE.Mesh(geometry, textMaterial);
      localScene.add(m);
      m.position.x = pos.x;
      m.position.y = pos.y;
      m.position.z = pos.z;
      component.render();
    });
  }
  private addHatch(localScene: THREE.Scene, one: THREE.Vector3, two: THREE.Vector3) {
    let y = new THREE.Geometry();
    const black_material = new THREE.MeshBasicMaterial({ color: 0x00000 });
    y.vertices.push(one);
    y.vertices.push(two);
    localScene.add(new THREE.Line(y, black_material));
    y = new THREE.Geometry();
  }
}