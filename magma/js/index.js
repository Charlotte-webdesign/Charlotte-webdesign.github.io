const magmaContainer = document.getElementById("magma");
const gifContainer = document.getElementById("gif-container");
const glow = document.getElementById("glow");
const popGif = document.getElementById("pop-gif");
const sizzleSound = document.getElementById("sizzle");

window.onload = function () {
  var video = document.querySelector("video");
  document.addEventListener("click", () => {
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  });
  var bgBox = document.getElementById("bg-box");
  var bg1 = document.getElementById("bg1");
  var bg2 = document.getElementById("bg2");

  function handleClick() {
    if (bg1.style.animationPlayState === "paused") {
      bg1.style.animationPlayState = "running";
      bg2.style.animationPlayState = "running";
    } else {
      bg1.style.animationPlayState = "paused";
      bg2.style.animationPlayState = "paused";
    }
  }

  document.addEventListener("click", handleClick);
};

document.addEventListener("click", function (event) {
  const mouseX = event.pageX;
  const mouseY = event.pageY;

  sizzleSound.currentTime = 0;
  sizzleSound.play();

  gifContainer.style.display = "block";
  popGif.style.left = `${mouseX}px`;
  popGif.style.top = `${mouseY}px`;

  setTimeout(() => {
    glow.style.display = "none";
    gifContainer.style.display = "none";
  }, 3000);
});
