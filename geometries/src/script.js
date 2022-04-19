import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
// Direct calling of box geometry
// const geometry = new THREE.BoxBufferGeometry(1, 1, 1, 4, 4, 4);

// creating custom geometry
// const geometry = new THREE.Geometry();

// const vertex1 = new THREE.Vector3(0, 0, 0);
// const vertex2 = new THREE.Vector3(0, 1, 0);
// const vertex3 = new THREE.Vector3(1, 0, 0);

// geometry.vertices.push(vertex1);
// geometry.vertices.push(vertex2);
// geometry.vertices.push(vertex3);

// the faces has input as 0, 1, 2
// as 0th index is vertex1
// as 1st index is vertex2
// as 2nd index is vertex3
// const face = new THREE.Face3(0, 1, 2);
// geometry.faces.push(face);

// creating iterative custom geometry
// for (let i = 0; i < 50; i++) {
//   for (let j = 0; j < 3; j++) {
//     geometry.vertices.push(
//       new THREE.Vector3(
//         (Math.random() - 0.5) * 4,
//         (Math.random() - 0.5) * 4,
//         (Math.random() - 0.5) * 4
//       )
//     );
//   }
//   const verticesIndex = i * 3;
//   geometry.faces.push(
//     new THREE.Face3(verticesIndex, verticesIndex + 1, verticesIndex + 2)
//   );
// }

// creating buffer based geometry by invoking threejs shaders
// const positionsArray = new Float32Array([0, 0, 0, 0, 1, 0, 0, 0, 1]);
// taking positions as a vector3 and converting them to threejs readable attributes
// const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3);

const count = 5000; // no. of triangles to draw
const positionsArray = new Float32Array(count * 3 * 3); // to take the 3D coordinates of 3 sizes of 50 triangles

for (let i = 0; i < count * 3 * 3; i++) {
  positionsArray[i] = (Math.random() - 0.5) * 2; // -0.5 to center the coordinate, and 2 to multiple the coordinate size
}

const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3);

const geometry = new THREE.BufferGeometry();
// invoking shaders to draw based on position coordinates
geometry.setAttribute("position", positionsAttribute);

const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 3;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Animate
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
