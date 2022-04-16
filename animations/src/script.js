import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(sizes.width, sizes.height);

const clock = new THREE.Clock();

// gsap.to(mesh.position, { x: 2, duration: 1, delay: 1 });

// animations
const loop = () => {
  // (making it framerate independent)
  const elapsedTime = clock.getElapsedTime();
  // elapsed time gets the time elapsed since first frame drawn

  // update objects to do 1 revolution per second
  mesh.rotation.x = elapsedTime * (Math.PI / 2);
  //   mesh.position.x = Math.sin(elapsedTime);
  mesh.position.y = Math.cos(elapsedTime);

  //   camera.lookAt(mesh.position);-

  // render it to screen
  renderer.render(scene, camera);

  window.requestAnimationFrame(loop);
};

loop();
