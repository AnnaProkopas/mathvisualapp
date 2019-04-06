import { AfterViewInit, Component, ElementRef, Input, ViewChild, HostListener } from '@angular/core';
import * as THREE from 'three';
import { Tree } from '@angular/router/src/utils/tree';
import { last } from '@angular/router/src/utils/collection';
import { ElementFinder } from 'protractor';
import { Scene } from 'three';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})

export class CanvasComponent implements AfterViewInit {
  @Input() partTrigonometry: number[];
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  public scene: THREE.Scene;

  public near_plane = 99;
  public far_plane = 100;

  public pointer: THREE.Mesh;
  public circle: {radius: number, x: number, y: number};

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
  
  this.circle = {radius: 10,  x: 0, y: 0};
  const segments = 240;
  const material = new THREE.MeshBasicMaterial( {color: 0x00ff90} );
  const geometry = new THREE.CircleBufferGeometry(this.circle.radius, segments);
  const circle = new THREE.Mesh( geometry, material );
  this.scene.add( circle );

  this.y_asix( new THREE.Vector3( 0, -13, 0 ),  new THREE.Vector3( 0, 15, 0 ));
  this.x_asix( new THREE.Vector3( -13,  0, 0 ),  new THREE.Vector3( 15, 0, 0 ));

    const mini_radius = 1;
    const color_mini_circle = new THREE.MeshBasicMaterial( {color: 0x000090} );
    this.pointer = new THREE.Mesh( new THREE.CircleBufferGeometry(mini_radius, segments, 0, this.circle.radius), color_mini_circle );
    this.pointer.position.x = this.circle.x + this.circle.radius;
    this.scene.add( this.pointer );
    this.createSin();
    this.createCos();
  }

private x_asix(fromDot: THREE.Vector3, toDot: THREE.Vector3) {
  let y = new THREE.Geometry();
  const black_material = new THREE.MeshBasicMaterial( {color: 0x00000} );
  y.vertices.push( fromDot );
  y.vertices.push( toDot );
  this.scene.add( new THREE.Line( y, black_material ) );
  y = new THREE.Geometry();
  y.vertices.push( new THREE.Vector3( toDot.x - 2, toDot.y + 1, 0 ) );
  y.vertices.push( toDot );
  this.scene.add( new THREE.Line( y, black_material ) );
  y = new THREE.Geometry();
  y.vertices.push( toDot );
  y.vertices.push( new THREE.Vector3( toDot.x - 2, toDot.y - 1, 0 ) );
  this.scene.add( new THREE.Line( y, black_material ) );
}

private y_asix(fromDot: THREE.Vector3, toDot: THREE.Vector3) {
  let y = new THREE.Geometry();
  const black_material = new THREE.MeshBasicMaterial( {color: 0x00000} );
  y.vertices.push( fromDot );
  y.vertices.push( toDot );
  this.scene.add( new THREE.Line( y, black_material ) );
  y = new THREE.Geometry();
  y.vertices.push( new THREE.Vector3(toDot.x + 1, toDot.y - 2, 0) );
  y.vertices.push( toDot );
  this.scene.add( new THREE.Line( y, black_material ) );
  y = new THREE.Geometry();
  y.vertices.push( toDot );
  y.vertices.push( new THREE.Vector3(toDot.x - 1, toDot.y - 2, 0) );
  this.scene.add( new THREE.Line( y, black_material ) );
}


private createLight() {
  const light = new THREE.PointLight(0xffffff, 1, 1000);
  light.position.set(0, 0, 100);
  this.scene.add(light);
}

private createCamera() {
  const aspectRatio = this.getAspectRatio();
  this.camera = new THREE.PerspectiveCamera(
      20,
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
  let component: CanvasComponent = this;
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
    console.log("onMouseDown");
    event.preventDefault();

    const EPS = 0.6;
    const pos = this.worldToCanvas(new THREE.Vector2(event.clientX, event.clientY));
    if (Math.abs(pos.x - this.pointer.position.x) <= EPS && Math.abs(pos.y - this.pointer.position.y) <= EPS) {
      this.mouseOnLastPosPointer = true;
    }

    if (this.partTrigonometry[0]) {
      this.scene.add(this.lineSin);
    } else {
      this.scene.remove(this.lineSin);
    }
    if (this.partTrigonometry[1]) {
      this.scene.add(this.lineCos);
    } else {
      this.scene.remove(this.lineCos);
    }
  }

  public onMouseMove(event: MouseEvent) {
    if (this.mouseOnLastPosPointer) {
      const EPS = 15;
      const pos = this.worldToCanvas(new THREE.Vector2(event.clientX, event.clientY));
      if (Math.abs(pos.x - this.pointer.position.x) <= EPS &&
          Math.abs(pos.y - this.pointer.position.y) <= EPS) {
        const x = (pos.x < 0 ? -1 : 1) * this.circle.radius / Math.sqrt(1 + Math.pow(pos.y / pos.x, 2));
        this.pointer.position.y = (pos.y < 0 ? -1 : 1) *
          Math.sqrt(this.circle.radius ** 2 - x ** 2);
        this.pointer.position.x = x;

        this.drawSin();
        this.drawCos();

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
    function cosAngle (vec1: THREE.Vector2, vec2: THREE.Vector3): number {
      return (vec1.x * vec2.x + vec1.y * vec2.y) /
        (Math.sqrt(vec1.x ** 2 + vec1.y ** 2) * Math.sqrt(vec2.x ** 2 + vec2.y ** 2));
    }
    let angle = Math.acos(cosAngle(new THREE.Vector2(this.circle.radius, 0),
      this.pointer.position));
    if (angle > 0 && this.pointer.position.y < 0) {
      angle = Math.PI - angle;
    } else if (angle < 0) {
      angle = (this.pointer.position.y < 0) ? Math.PI - angle : -1 * angle;
    }
    // const sin = this.pointer.position.y;
    return (angle * 180) / Math.PI;
  }

  public lineSin: THREE.Mesh;
  public lineCos: THREE.Mesh;

  public createSin() {
    const material = new THREE.MeshBasicMaterial( {color: 0x100010} );
    const geometry = new THREE.BoxGeometry(1, this.pointer.position.y);
    this.lineSin = new THREE.Mesh( geometry, material );
    this.lineSin.position.y = 0;
    this.lineSin.position.x = 0;
  }
  public drawSin() {
    this.lineSin.geometry = new THREE.BoxGeometry(1, Math.abs(this.pointer.position.y));
    this.lineSin.position.y = this.pointer.position.y / 2;
  }
  public createCos() {
    const material = new THREE.MeshBasicMaterial( {color: 0x100010} );
    const geometry = new THREE.BoxGeometry(this.pointer.position.x, 1);
    this.lineCos = new THREE.Mesh( geometry, material );
    this.lineCos.position.y = 0;
    this.lineCos.position.x = 0;
  }
  public drawCos() {
    this.lineCos.geometry = new THREE.BoxGeometry(Math.abs(this.pointer.position.x), 1);
    this.lineCos.position.x = this.pointer.position.x / 2;
  }

  public worldToCanvas (input: THREE.Vector2): THREE.Vector3 {
    const vec = new THREE.Vector3(); // create once and reuse
    const pos = new THREE.Vector3(); // create once and reuse
    vec.set(
      ((input.x - this.canvas.offsetLeft) / this.canvas.clientWidth) * 2 - 1,
      - ((input.y - this.canvas.offsetTop) / this.canvas.clientHeight) * 2 + 1,
      0.5 );
    vec.unproject(this.camera);
    vec.sub(this.camera.position).normalize();
    const distance = - this.camera.position.z / vec.z;
    pos.copy(this.camera.position).add( vec.multiplyScalar( distance ) );
    return pos;
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
    this.canvasRef.nativeElement.appendChild(this.renderer.domElement);
    this.render();
    // document.getElementById("scene").appendChild(this.renderer.domElement);
  }
}
