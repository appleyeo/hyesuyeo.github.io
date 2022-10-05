//Input 요소(Element)에 이벤트를 등록하여 글자 변화를 감지하게 만들어주세요.
// 요소에 addEventListener로 이벤트 등록
// ID 입력칸과(AND) PW 입력칸에 글자가 하나라도 들어가면 로그인 버튼 활성화

const input = document.querySelectorAll("input");
const button = document.querySelector("#btn"); // 여기서 querySelector가 아닌 getElementById를 계속써서 적용이 안되고 있었음 ㅠㅠ

// 첫번째 두번째 input에 글자를 썼을 때 로그인 버튼 활성화
// 아래 중복되는 코드를 어떻게 제거할 수 있을까????
// input[0].addEventListener("input", function () {
//   button.classList.add("changeOpacity");
// });

// input[1].addEventListener("input", function () {
//   button.classList.add("changeOpacity");
// });

//해결 : for문을 사용해 input 영역 두곳에 텍스트를 넣었을 때 모두 로그인 버튼 활성화 되도록 수정했다.
//그런데 이렇게 적어도 되는걸까?
for (let i = 0; i < 2; i++) {
  input[i].addEventListener("input", function () {
    button.classList.add("changeOpacity");
  });
}
