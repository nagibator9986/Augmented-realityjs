// Основные настройки сцены
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Освещение
const light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Создание пола
const floorGeometry = new THREE.PlaneGeometry(100, 100);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x808080, side: THREE.DoubleSide });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = Math.PI / 2;
scene.add(floor);

// Создание стен
function createWall(width, height, depth, x, y, z) {
    const wallGeometry = new THREE.BoxGeometry(width, height, depth);
    const wallMaterial = new THREE.MeshBasicMaterial({ color: 0xa0a0a0 });
    const wall = new THREE.Mesh(wallGeometry, wallMaterial);
    wall.position.set(x, y, z);
    scene.add(wall);
}

createWall(100, 10, 1, 0, 5, -50); // задняя стена
createWall(100, 10, 1, 0, 5, 50); // передняя стена
createWall(1, 10, 100, -50, 5, 0); // левая стена
createWall(1, 10, 100, 50, 5, 0); // правая стена

// Создание экспонатов
function createExhibit(width, height, depth, x, y, z, color) {
    const exhibitGeometry = new THREE.BoxGeometry(width, height, depth);
    const exhibitMaterial = new THREE.MeshBasicMaterial({ color });
    const exhibit = new THREE.Mesh(exhibitGeometry, exhibitMaterial);
    exhibit.position.set(x, y, z);
    scene.add(exhibit);
}

createExhibit(5, 5, 5, -20, 2.5, -20, 0xff0000); // первый экспонат
createExhibit(5, 5, 5, 20, 2.5, -20, 0x00ff00); // второй экспонат

camera.position.z = 50;

// Анимация
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
