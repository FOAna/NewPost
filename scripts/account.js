let creatorPub = document.getElementById("creatorPub");
let form = document.getElementById("form");
let cross = document.getElementById("cross");
let newsChecker = document.getElementById("fid-1");
let postChecker = document.getElementById("fid-2");
let changeElements = document.getElementsByClassName("changeDecor");
let buttonNews = document.querySelector(".account__buttonNews>.account__button");
let buttonPost = document.querySelector(".account__buttonPost>.account__button");
let noticeNews = document.getElementById("noticeNews");
let noticePost = document.getElementById("noticePost");

creatorPub.onclick = () => {
  form.style.animation = "1s ease-in appearanceForm";
  form.style.padding = "16px 0";
  if (document.body.clientWidth < 709) {
    form.style.height = "520px";
  } else {
    form.style.height = "640px";
  }
};

cross.onclick = () => {
  form.style.padding = "0";
  form.style.height = "0";
};

newsChecker.onclick = () => {
  for (let el = 0; el < changeElements.length; el++) {
    changeElements[el].style.backgroundColor = "#C8F7FF";
  }
};

postChecker.onclick = () => {
  for (let el = 0; el < changeElements.length; el++) {
    changeElements[el].style.backgroundColor = "#FDFFC8";
  }
};

buttonNews.onclick = (event) => {
  event.stopPropagation();
  noticeNews.style.display = "inline-block";
};

buttonPost.onclick = (event) => {
  event.stopPropagation();
  noticePost.style.display = "inline-block";
};

document.addEventListener("click", function (event) {
  if (!noticeNews.contains(event.target)) noticeNews.style.display = "none";
  if (!noticePost.contains(event.target)) noticePost.style.display = "none";
});
