import { AfterViewInit, Component, ElementRef, Input, ViewChild, HostListener } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})

export class CanvasComponent implements AfterViewInit {
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private cameraTarget: THREE.Vector3;
  public scene: THREE.Scene;

  public near_plane = 99;
  public far_plane = 100;

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

  const radius = 7;
  const segments = 240;
  const material = new THREE.MeshBasicMaterial( {color: 0x00ff90} );
  const geometry = new THREE.BoxGeometry(radius, segments);
  const circle = new THREE.Mesh( geometry, material );
  this.scene.add( circle );

  this.y_asix( new THREE.Vector3( 0, -10, 0 ),  new THREE.Vector3( 0, 10, 0 ));
  this.x_asix( new THREE.Vector3( -10,  0, 0 ),  new THREE.Vector3( 10, 0, 0 ));

  const mini_radius = 3;
  const mini_segments = 240;
  const color_mini_circle = new THREE.MeshBasicMaterial( {color: 0x000090} );
  const mini_circle = new THREE.Mesh( new THREE.BoxGeometry(mini_radius, mini_segments), color_mini_circle );
  this.scene.add( mini_circle );
  
  console.log("I'm finish))");
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
  /* const light = new THREE.PointLight(0xffffff, 1, 1000);
  light.position.set(0, 0, 100);
  this.scene.add(light);*/
}

private createCamera() {
  const aspectRatio = this.getAspectRatio();
  this.camera = new THREE.PerspectiveCamera(
      20,
      aspectRatio,
      this.near_plane,
      this.far_plane
  );

  this.camera.position.set(0, 0, this.near_plane - 10);
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
  this.renderer = new THREE.WebGLRenderer(); /* {
      canvas: this.canvas,
      antialias: true
  });
  this.renderer.setPixelRatio(devicePixelRatio);*/
  this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
/*
  this.renderer.shadowMap.enabled = true;
  this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  this.renderer.setClearColor(0xffffff, 1);
  this.renderer.autoClear = true;*/
  this.render();
}

public render() {
  this.renderer.render(this.scene, this.camera);
}

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
}


  ngAfterViewInit() {
    this.createScene();
    this.createLight();
    this.createCamera();
    this.startRendering();
    // document.getElementById("scene").appendChild(this.renderer.domElement);
  }
}
