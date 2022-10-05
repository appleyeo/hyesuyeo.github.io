function createGhost() {
  const ghostElement = document.createElement("div");

  ghostElement.style.position = "absolute";
  ghostElement.style.top = "0px";

  let randomLeft = randomRange(0, BG_WIDTH - GHOST_WIDTH);
  ghostElement.style.left = randomLeft + "px";

  ghostElement.style.width = GHOST_WIDTH + "px";
  ghostElement.style.height = GHOST_HEIGHT + "px";
  ghostElement.style.background = 'url("./images/ghost.png") no-repeat';

  bgElement.appendChild(ghostElement);

  setInterval(function () {
    //1. 고스트 접근
    console.log(ghostElement);
    //2. 고스트의 top 가져온다
    //3. 2번에서 숫자만 추출, 1 + px
    let ghostTopNum = Number(ghostElement.style.top.split("px")[0]) + 10;

    if (ghostTopNum > BG_HEIGHT - GHOST_HEIGHT) {
      ghostElement.remove();
      return;
    }
    ghostElement.style.top = ghostTopNum + "px";
  }, 500);
}

createGhost();

setInterval(createGhost, 3000); //setInterval 안에는 호출한다고 createGhost()라고 소괄호를 포함하지 않아야 하고 이름 자체를 넣어야!

function randomRange(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}
