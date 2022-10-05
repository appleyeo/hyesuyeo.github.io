// 우리가 active라는 클래스를 갖는 요소에 특정 css가 적용되도록 설정해두었다.
// 카드마다(panel마다) active라는 클래스를 가졌다가 안가졌다가 하도록 설정해줘야 한다.

const panels = document.querySelectorAll(".panel"); //일단 panel이라는 클래스 값을 갖는 모든 요소를 선택해준다.

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses(); //클릭하면 active 클래스를 모두 지워준다.
    panel.classList.add("active"); //그리고 클릭했으니 클릭한 패널에 active라는 클래스를 더해준다.
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active"); //active 클래스를 모두 지우는
  });
}
