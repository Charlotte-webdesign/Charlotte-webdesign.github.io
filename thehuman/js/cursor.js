function createFollower(imageSrc, width, height) {
  var follower = document.createElement("img");

  follower.style.position = "absolute";
  follower.style.width = width;
  follower.style.height = height;
  follower.style.opacity = "0";
  follower.style.zIndex = "999999";
  follower.style.transition = ".3s opacity";
  follower.style.pointerEvents = 'none'
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
  cursorFollower("../thehuman/img/skeleton.gif", "100px", "100px");
  const follower = document.querySelector(".follower");
  const buttons1 = document.querySelectorAll(".colorButtonGroup1");
  const buttons2 = document.querySelectorAll(".colorButtonGroup2");
  const states1 = new Array(buttons1.length).fill(false);
  const states2 = new Array(buttons2.length).fill(false);

  buttons1.forEach((element, index) => {
    element.addEventListener("mouseover", () => {
      follower.src = '../thehuman/img/skeleton.gif'

      states1[index] = true;
      updateFollowerStyle1();
    });
    element.addEventListener("mouseleave", () => {
      // follower.src = ''

      states1[index] = false;
      updateFollowerStyle1();
    });
  });

  buttons2.forEach((element, index) => {
    element.addEventListener("mouseover", () => {
      follower.src = '../thehuman/img/star.gif'
      
      states2[index] = true;
      updateFollowerStyle2();
    });
    element.addEventListener("mouseleave", () => {
      // follower.src = ''

      states2[index] = false;
      updateFollowerStyle2();
    });
  });

  function updateFollowerStyle1() {
    if (states1.some((state) => state)) {
      follower.style.opacity = "1";
      document.body.style.cursor = "none";
    } else {
      follower.style.opacity = "0";
      document.body.style.cursor = "default";
    }
  }
  function updateFollowerStyle2() {
    if (states2.some((state) => state)) {
      follower.style.opacity = "1";
      document.body.style.cursor = "none";
    } else {
      follower.style.opacity = "0";
      document.body.style.cursor = "default";
    }
  }
});
