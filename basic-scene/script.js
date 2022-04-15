// this creates a scene on which the data is projected
const scene = new THREE.Scene();

// mesh will be the material and geometry applied to an object
// that will be representing in the scene
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// screen size
const sizes = {
  width: 800,
  height: 600,
};
// provide a camera to provide POV
// provide vertical FOV
// aspect ratio
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

// set camera position
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 1;

scene.add(camera);

// renderer that renders the scene on webpage
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector(".webgl"),
});

// set size of the renderer
renderer.setSize(sizes.width, sizes.height);
// rendering the scene and camera
renderer.render(scene, camera);
