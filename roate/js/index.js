// 创建多个具有不同半径的小球
var numBalls = 5; // 小球的数量
var balls = []; // 存储小球的数组
var ballAnimations = []; // 存储小球的动画
var clickedBalls = []; // 存储被点击过的小球的索引

// 用于确定小球是否在运动的变量
var isMoving = false;

// 用于确定小球旋转角度是否超过一周的变量
var rotations = new Array(numBalls).fill(0);

for (var i = 0; i < numBalls; i++) {
  var ball = document.createElement("div");
  ball.className = "rotatingElement";
  var image = document.createElement("img");
  //image.src = './../img/image2.png'; // 插入图片的URL
  image.src = "../roate/img/image2.png";
  ball.appendChild(image);
  document.body.appendChild(ball);

  balls.push(ball);
  ballAnimations.push(null); // 初始化小球动画为null，表示静止状态
}

// 小球监听鼠标移动事件 <@TODO--
balls.forEach(function (hoverableElement) {
  hoverableElement.addEventListener("mousemove", (e) => {
    // hoverableElement.style.opacity = 0
    var image = hoverableElement.querySelector("img");
    // 更改图像的 src 属性
    // image.src = "../roate/img/image1.png";
  });
});

// 计算屏幕中心的位置
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var centerX = screenWidth / 2;
var centerY = screenHeight / 2;

// 设置旋转元素的初始位置和半径
var radiusIncrement = 50; // 每个小球的半径增量
var initialRadius = 100; // 初始半径
var angles = []; // 存储每个小球的初始角度
var radii = []; // 存储每个小球的半径

for (var i = 0; i < numBalls; i++) {
  angles.push(Math.random() * Math.PI * 2); // 随机生成初始角度
  radii.push(initialRadius + i * radiusIncrement); // 根据增量生成半径
  balls[i].style.left = centerX + radii[i] * Math.cos(angles[i]) + "px";
  balls[i].style.top = centerY + radii[i] * Math.sin(angles[i]) + "px";
}

// 更新元素位置的函数
function updatePositions() {
  if (!isMoving) {
    return; // 如果小球不在运动状态，则直接返回
  }
  for (var i = 0; i < numBalls; i++) {
    if (ballAnimations[i] !== null) {
      continue; // 如果小球有动画，则跳过该小球
    }
    angles[i] += 0.01; // 每次更新角度增加0.01弧度
    rotations[i] += 0.01; // 更新小球旋转角度
    balls[i].style.left = centerX + radii[i] * Math.cos(angles[i]) + "px";
    balls[i].style.top = centerY + radii[i] * Math.sin(angles[i]) + "px";
  }
  requestAnimationFrame(updatePositions);
}

// 开始更新位置
updatePositions();

// 点击事件处理程序
document.body.addEventListener("click", function () {
  // 如果所有小球都已被点击过，则重置点击数组
  if (clickedBalls.length === numBalls) {
    clickedBalls = [];
  }

  // 随机选择一个小球并添加动画
  if (!isMoving) {
    isMoving = true; // 将状态设置为运动中
  }
  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * numBalls); // 随机选择一个小球
  } while (clickedBalls.includes(randomIndex)); // 确保随机到的小球没有被点击过
  clickedBalls.push(randomIndex); // 将选中的小球添加到已点击数组中

  // 添加动画
  if (ballAnimations[randomIndex] === null) {
    ballAnimations[randomIndex] = setInterval(function () {
      angles[randomIndex] += 0.05; // 每次更新角度增加0.05弧度
      rotations[randomIndex] += 0.05; // 更新小球旋转角度
      balls[randomIndex].style.left =
        centerX + radii[randomIndex] * Math.cos(angles[randomIndex]) + "px";
      balls[randomIndex].style.top =
        centerY + radii[randomIndex] * Math.sin(angles[randomIndex]) + "px";
    }, 16); // 60帧每秒
  }

  setTimeout(function () {
    balls[randomIndex].style.opacity = 0;

    setTimeout(() => {
      const intervalId = setTimeout(() => {
        if (balls[randomIndex]) {
          // document.body.removeChild(); // 移除元素
          balls[randomIndex].style.display = "none";
        }
      }, 1000);
    }, 2000);
  }, 5000);
});

// 页面加载好的时候添加dom元素（#moth）
// index.js

document.addEventListener("DOMContentLoaded", function () {
  // 创建新的图像元素

  // 将新创建的图像元素添加到文档中

  const mothButton = document.getElementById("mothButton");

  mothButton.addEventListener("click", function () {
    document.body.appendChild(createMoth());
    const moth = document.querySelector("#moth");
    moth.addEventListener("mouseover", () => {
      moth.src = "../roate/img/fire.gif";
    });

    setTimeout(() => {
      moth.style.bottom = "1000px";
      moth.style.left = "1000px";

      const intervalId = setInterval(() => {
        clearInterval(intervalId); // 清除定时器
        document.body.removeChild(moth); // 移除moth元素
      }, 8500);
    }, 2000);

    setInterval(() => {}, 8500);
  });
});

function createMoth() {
  var moth = document.createElement("img");
  moth.id = "moth";
  moth.src = "./img/moth.gif";
  moth.style.position = "absolute";
  moth.style.width = "300px";
  moth.style.height = "300px";
  moth.style.left = "500px";
  moth.style.bottom = "-500px";
  moth.style.zIndex = "1000";
  moth.style.transition = "bottom 3s, left 3s";

  return moth;
}
