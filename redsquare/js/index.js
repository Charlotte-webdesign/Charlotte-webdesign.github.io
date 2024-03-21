function cursorFollwer() {
  // 获取图片元素
  var follower = document.createElement("img");
  follower.style.position = 'absolute'
  follower.style.width = '100px'
  follower.style.height = '100px'
  follower.style.opacity = '0'
  follower.classList.add("follower"); 
  follower.src = "../redsquare/img/GIF/eye.gif"; 
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

document.addEventListener("DOMContentLoaded", function() {
    
    cursorFollwer()
    
    const follower = document.querySelector('.follower')
    const pixels = document.querySelectorAll('.pixel');

    pixels.forEach(element=>{
        element.addEventListener('mouseover',()=>{
            follower.style.opacity = '1'
            document.body.style.cursor = 'none'
        })
        element.addEventListener('mouseleave',()=>{
            follower.style.opacity = '0'
            document.body.style.cursor = 'default'
        })
    })

})