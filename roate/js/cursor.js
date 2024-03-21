function cursorFollwer() {
  // 获取图片元素
  var follower = document.createElement("img");
  follower.style.position = "absolute";
  follower.style.width = "200px";
  follower.style.height = "200px";
  follower.style.opacity = 0;
  follower.style.pointerEvents = "none";
  follower.classList.add("follower");
  follower.src = "../roate/img/fire.gif";
  follower.style.zIndex = 12300;
  //   follower.style.zIndex = '-1'
  document.body.appendChild(follower);

  document.addEventListener("mousemove", function (event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    follower.style.left = mouseX + "px";
    follower.style.top = mouseY + "px";

    // 计算图片的中心位置
    var followerWidth = follower.offsetWidth;
    var followerHeight = follower.offsetHeight;
    var followerX = mouseX - followerWidth / 2;
    var followerY = mouseY - followerHeight / 2;

    // 设置图片位置为鼠标位置的中心
    follower.style.left = followerX + "px";
    follower.style.top = followerY + "px";
  });
}

document.addEventListener("DOMContentLoaded", function () {

  cursorFollwer();

  const follower = document.querySelector(".follower");
  const mothButton = document.getElementById("mothButton");
  const rotatingElements = document.querySelectorAll('.rotatingElement')

  mothButton.addEventListener("mouseover", function () {
    document.body.style.cursor = "none";

    follower.style.opacity = 1;
  });
  mothButton.addEventListener("mouseleave", function () {
    document.body.style.cursor = "";

    follower.style.opacity = 0;
  });
  rotatingElements.forEach(ele=>{
    ele.addEventListener('mousemove',function () {
      document.body.style.cursor = "none";
      ele.style.filter = 'drop-shadow(0 0 16px #0ea5e9)'; // 发光滤镜效果
      follower.style.opacity = 1;
    })
    ele.addEventListener('mouseleave',function () {
      document.body.style.cursor = "";
      ele.style.filter = 'none'; // 发光滤镜效果

      follower.style.opacity = 0;
    })
  })
  
});
