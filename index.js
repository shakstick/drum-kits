const btn1 = document.getElementById("sound1");
const btn2 = document.getElementById("sound2");

const sound1 = new Audio("./sound1.mp3");
const sound2 = new Audio("./sound2.mp3");

btn1.addEventListener("click", () => {
  sound1.currentTime = 0;
  sound1.play();
});

btn2.addEventListener("click", () => {
  sound2.currentTime = 0;
  sound2.play();
});
