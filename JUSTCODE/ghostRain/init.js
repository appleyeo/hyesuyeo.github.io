document.addEventListener("keydown", function (e) {
  console.log(e.keyCode);

  //getComputedStyle은 원래 'heroElement.style.left' 이 값 쓰려고 했는데 이는 속성 이름이고 값이다.
  //그런데 inline style에 존재하지 않기 때문에 <div id="hero" 여기에 style 없기 때문에 getComputed 밖에 할 수 없었음
  const heroLeft = getComputedStyle(heroElement).left;
  console.log("용사 왼쪽값 => ", heroLeft);

  //split은 문자변수에서 어떤 값을 기준으로 문자를 나눌 지 정해주며, 400과 px를 나눠서 400만 따로 계산하기 위해 나눔 (px 없애기 위해 쓴 방식)
  //number()는 안에 현위치 400이 문자열이라 숫자로 바꿔줌, 그래야 +1/-1 할 때 계산 가능함.
  const heroLeftWithoutPx = Number(heroLeft.split("px")[0]);
  console.log("heroLeftWithoutPx 값 => ", heroLeftWithoutPx);

  //용사의 left값이 0보다 작아지거나, 765보다(BG_WIDTH-HERO_WIDTH) 커질 경우 화면을 벗어날 경우 더이상 실행되지 않도록 해야
  // 다음 -10 작아질 때, 다음 10 더 커질 때
  if (
    (heroLeftWithoutPx - 10 < 0 && e.keyCode === 37) ||
    (heroLeftWithoutPx + 10 > 765 && e.keyCode === 39)
  ) {
    //return 키워드를 만나면 함수를 종료시킨다.
    return;
  }

  //화면에서 키 누르면 발생할 동작을 아래에 써주기
  //왼쪽 키코드가 37, 오른쪽 키가 39다.
  if (e.keyCode === 37) {
    heroElement.style.left = heroLeftWithoutPx - 10 + "px"; //left는 항상 단위랑 함께 써야해서 px를 넣어준다.
    console.log(heroLeftWithoutPx - 1);
    heroElement.className = "left";
  } else if (e.keyCode === 39) {
    heroElement.style.left = heroLeftWithoutPx + 10 + "px";
    console.log(heroLeftWithoutPx + 1);
    heroElement.className = "right";
  }
});

document.addEventListener("keyup", function () {
  heroElement.className = "stop";
});
