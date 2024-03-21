const canvas = document.querySelector(".canva2");
const ctx = canvas.getContext("2d");
const p = {
  x: 0,
  y: 0,
  r: 30,
};
function render() {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
  ctx.beginPath();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 创建一条放射颜色渐变（渐变圆）
  var radial = ctx.createRadialGradient(p.x, p.y, p.r, p.x, p.y, p.r * 3);
  // 开始点颜色
  radial.addColorStop(0, "rgba(255,255,255,0)");
  // 结束点颜色
  radial.addColorStop(1, "rgba(0,0,0,0.99)");
  // 填充样式
  ctx.fillStyle = radial;
  // 绘制矩形
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
// 鼠标移动事件

document.addEventListener("DOMContentLoaded", function () {
  const curImgBox = document.getElementById("custom-cursor");
  const img1 = document.querySelector("#custom_cursor_img1");
  const img2 = document.querySelector("#custom_cursor_img2");
  // 获取所有的 map_block 元素
  const hoverableElements = document.querySelectorAll(".map_block");
  // 填充
  const arr = new Array(9).fill(false);
  arr.fill(false);

  let flag = 0;
  document.onmousemove = (e) => {
    p.x = e.clientX;
    p.y = e.clientY;
    render();

    // 设置图片的位置为鼠标位置
    curImgBox.style.left = e.pageX + "px";
    curImgBox.style.top = e.pageY + "px";

    hoverableElements.forEach(function (hoverableElement) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const rect = hoverableElement.getBoundingClientRect();
      const elementLeft = rect.left;
      const elementTop = rect.top;
      const elementRight = rect.right;
      const elementBottom = rect.bottom;

      // 检查鼠标是否位于当前元素内部
      if (
        mouseX >= elementLeft &&
        mouseX <= elementRight &&
        mouseY >= elementTop &&
        mouseY <= elementBottom
      ) {
        arr[flag] = true;
        hoverableElement.classList.add("hover_now");
      } else {
        arr[flag] = false;
        hoverableElement.classList.remove("hover_now");
      }
      flag += 1;
      // 假设这是一个布尔类型的数组

      // console.log(hasTrue);
    });

    let hasTrue = arr.some((item) => {
      console.log("item", item);
      return item === true;
    });
    // 遍历数组元素，如果有一个为真则执行代码
    if (hasTrue) {
      console.log("有一个为真");
      img1.style.display = "none";
      img2.style.display = "block";
    } else {
      console.log("没一个为真");
      img1.style.display = "block";
      img2.style.display = "none";
    }

    flag = 0;
  };
});

// 窗口尺寸改变时重新渲染
window.onresize = () => {
  render();
};

// 开始渲染画布
render();

window.onload = () => {
  const cur = document.querySelector("#custom-cursor");

  cur.style.left = 0 + "px";
  cur.style.top = 0 + "px";
};
