const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let particleArray = [];
const maxSize = 200;
const donutImage = new Image();
class SpinningDonut {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.xMomentum = 5;
    this.yMomentum = 5;
    this.rotation = 0;
    this.opecity = 1;
    this.size = 1;
    this.image = "./images/noback.png";
  }

  update() {
    this.rotation += 1;
    this.size -= 0.05;
    this.opecity -= 0.01;
    this.x += this.xMomentum;
    this.y += this.yMomentum;
  }
  draw() {
    context.save();
    context.globalAlpha = this.opecity;
    context.translate(this.x, this.y);
    context.rotate(Math.PI / 180 * this.rotation);
    context.drawImage(donutImage, (-donutImage.width / 4) * this.size, (-donutImage.height / 4) * this.size, (donutImage.width / 2) * this.size, (donutImage.height / 2) * this.size);
    donutImage.src = this.image;
    context.restore();
  }
}
function spawnSpinningDonut() {
  particleArray.push(new SpinningDonut());
  console.log(particleArray);
}
function init() {

}

function animate() {
  requestAnimationFrame(animate);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  //update
  particleArray.forEach(function (particle) {
    particle.update();
    particle.draw();
  });
  particleArray = particleArray.filter(function (particle) {
    return particle.opecity >= 0.08 && particle.size >= 0.01;
  })
  //draw
}

init();
animate();