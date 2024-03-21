function createFollower(imageSrc, width, height) {
  var follower = document.createElement("img");

  follower.style.position = "absolute";
  follower.style.width = width;
  follower.style.height = height;
  follower.style.opacity = "0";
  follower.style.zIndex = "999999";
  // follower.style.transition = ".5s opacity";
  follower.alt = "click it !";
  follower.classList.add("follower");
  follower.src = imageSrc;
  document.body.appendChild(follower);

  return follower;
}

function cursorFollower(imageSrc, width, height) {
  var follower = createFollower(imageSrc, width, height);

  document.addEventListener("mousemove", function (event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var followerWidth = follower.offsetWidth;
    var followerHeight = follower.offsetHeight;
    var followerX = mouseX - followerWidth / 2;
    var followerY = mouseY - followerHeight / 2;

    follower.style.left = followerX + "px";
    follower.style.top = followerY + "px";
  });
}

/**
 * use a array save elements ' s states
 */

document.addEventListener("DOMContentLoaded", function () {
  cursorFollower("assets/img/volcano.gif", "100px", "100px");
  const follower = document.querySelector(".follower");
  const windows = document.querySelectorAll(".window");
  const states = new Array(windows.length).fill(false);

  windows.forEach((element, index) => {
    element.addEventListener("mouseover", () => {
      states[index] = true;
      updateFollowerStyle();
    });
    element.addEventListener("mouseleave", () => {
      states[index] = false;
      updateFollowerStyle();
    });
  });

  function updateFollowerStyle() {
    if (states.some((state) => state)) {
      follower.style.opacity = "1";
      document.body.style.cursor = "none";
    } else {
      follower.style.opacity = "0";
      document.body.style.cursor = "default";
    }
  }
});
