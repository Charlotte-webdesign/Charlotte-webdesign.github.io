let comments1 = [];
let comments2 = [];

let commentStyles1 = [
  {
    id: "",
    width: "500px",
    top: "",
    left: "",
    right: "-320px",
    bottom: "",
  },
  {
    id: "",
    width: "",
    top: "400px",
    right: "-220px",
    left: "",
    bottom: "",
  },
  {
    id: "",
    width: "",
    left: "60px",
    top: "300px",
    right: "",
    bottom: "",
  },
];
let commentStyles2 = [
    // 4
  {
    id: "",
    width: "400px",
    top: "",
    left: "",
    right: "0px",
    bottom: "",
  },
//   5
  {
    id: "",
    width: "400px",
    top: "350px",
    right: "220px",
    left: "",
    bottom: "",
  },
  {
    id: "",
    width: "",
    left: "60px",
    top: "300px",
    right: "",
    bottom: "",
  },
  {
    id: "",
    width: "400px",
    left: "-150px",
    top: "520px",
    right: "40px",
    bottom: "",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  let commentText1 = `On my volcano grows the Grass A meditative spot —An acre for a Bird to choose Would be the General thought`;
  let commentText2 = `Let the fire rage on.Flames never seemed to bother me anyway.It's
  funny how this inferno makes everything lookbright!`;
  let commentText3 = `dead`;
  // ********************************************************************************************
  let commentText4 =
    "How red the Fire rocks below How insecure the sod Did I disclose，Would populate with awe my solitude.";
  let commentText5 = `the volcano glows red and everyone's dead not a body to be seen.The
  flames keep roaring like the furnace that's inside.Let them burn, let
  them burn!`;
  let commentText6 = "live";
  let commentText7 = `My soul's the engine that will burn this world downto the ground!
  `;

  comments1.push(commentText1, commentText2, commentText3);
  comments2.push(commentText4, commentText5, commentText6, commentText7);
  //   // 设置评论元素的HTML内容为包含<span>的评论文本
  //   commentDiv.innerHTML = spannedText;

  //   // 找到目标容器，并将评论元素插入其中
  //   let commentBox1 = document.querySelector("#commentBox1");
  //   commentBox1.appendChild(commentDiv);
  createCommentElement("commentBox1", commentStyles1, 1, comments1);
  createCommentElement("commentBox2", commentStyles2, 2, comments2);

});



// Comments is here
function createCommentElement(pEleName, styles, id, ...comments) {
  let comments_len = comments[0].length;

  console.log(comments[0].length);

  for (let index = 0; index < comments_len; index++) {
    const text = comments[0][index];
    let spannedText = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") {
        spannedText += `&nbsp;`;
      } else {
        spannedText += `<span>${text[i]}</span>`;
      }
    }

    const ele = document.createElement(`div`);

    ele.style.zIndex = 10009999;

    ele.classList.add("comment");
    ele.classList.add(`comment${id}`);

    if (styles[index].width) {
      ele.style.width = styles[index].width;
    }

    if (styles[index].right) {
      ele.style.right = styles[index].right;
    }

    if (styles[index].top) {
      ele.style.top = styles[index].top;
    }

    if (styles[index].bottom) {
      ele.style.bottom = styles[index].bottom;
    }

    if (styles[index].left) {
      ele.style.left = styles[index].left;
    }

    ele.style.transform = "translateY(-14px)";

    ele.innerHTML = spannedText;

    document.querySelector("#" + pEleName).appendChild(ele);
    console.log("add one");
  }
}
