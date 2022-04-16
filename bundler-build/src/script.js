import "./style.css";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();
scene.background = "black";

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// setting position of mesh via Vector3
// x, y, z positions
// mesh.position.set(2, -0.5, -1);

// // scaling the mesh
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;

// // rotating the mesh
// mesh.rotation.y = Math.PI / 2;

// we can reorder the axis rotation if required
// mesh.rotation.reorder("YXZ");
// mesh.rotation.y = Math.PI / 2;
// mesh.rotation.x = Math.PI / 2;

// adding a axis helper
// takes the length of axis helper as an args
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// creating a group of objects
const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "#f00" })
);
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "#0f0" })
);
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "#00f" })
);

cube2.position.x = -2;
cube3.position.x = 2;

group.add(cube1);
group.add(cube2);
group.add(cube3);

// can apply properties to a group directly
group.scale.y = 2;
group.position.z = -1;
group.rotation.y = Math.PI / 3;

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

// camera.position.set(1, 1, 3);
scene.add(camera);

// console.log(mesh.position.distanceTo(camera.position));

// make camera look at cube
// camera.lookAt(mesh.position);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
