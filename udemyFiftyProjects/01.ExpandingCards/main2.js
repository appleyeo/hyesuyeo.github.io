const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses(); //active 클래스 지우는 함수
    panel.classList.add("active"); //패널 클래스에다가 active 클래스도 더한다??
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
