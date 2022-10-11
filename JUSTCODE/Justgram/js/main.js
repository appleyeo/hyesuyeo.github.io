// 요구사항
// ### 댓글 입력 함수 작성
// - Enter 이벤트, 버튼 클릭 이벤트에서 사용할 댓글 입력 함수 작성
// - 작성 내용, 작성자 매개변수로 받기
//     - function writeComment(content, writer) { … }

// ### 입력칸 Enter 이벤트 등록
// - 요소에 addEventListener로 이벤트 등록
// - 피드가 3개 이상 있는 것에 유의하며 이벤트를 등록
//     - hint: forEach 메소드 활용

// ### 게시 버튼 클릭 이벤트 등록
// - 요소에 addEventListener로 이벤트 등록
// - 피드가 3개 이상 있는 것에 유의하며 이벤트를 등록
//     - hint: forEach 메소드 활용

//1. 글자수 1개 이상이라도 댓글을 달고 엔터키 누를 경우 하단에 댓글 추가되도록
// 먼저 해당 조건에 특정 css 가 적용되는지 시도해보자

/// 선택자
const commentP = document.querySelectorAll("button"); //"게시버튼"
const commentInput = document.querySelectorAll("textarea"); //textarea
const commentMainFour = document.getElementsByClassName("mainFour"); //댓글창

//배열로 바꿔주기
const commentPArray = Array.from(commentP);
const commentInputArray = Array.from(commentInput);

//게시버튼 클릭 및 댓글입력
commentPArray.forEach((p, index) => {
  p.addEventListener("click", (event) => {
    const inputText = commentInput[index];
    const comment = commentMainFour[index];
    if (inputText.value == "") {
      event.preventDefault();
    } else {
      updateCommentListDom(inputText.value, comment, "hyesuyeo");
      inputText.value = "";
    }
  });
});

//textarea enter로 댓글입력
commentInputArray.forEach((p, index) => {
  p.addEventListener("keyup", (event) => {
    const inputText = commentInput[index];
    if (inputText.value == "") {
      event.preventDefault();
    } else if (event.keyCode == "13") {
      const inputText = commentInput[index];
      const comment = commentMainFour[index];
      updateCommentListDom(inputText.value, comment, "hyesuyeo");
      inputText.value = "";
    }
  });
});

//fetch (여기는 참고한 영역)
const getCommentList = () => {
  fetch("./data/commentList.json")
    .then((res) => res.json())
    .then((json) => {
      json.forEach((json, index) => {
        const commentArea = commentMainFour[index];
        updateCommentListDom(json.content, commentArea, json.nickname);
      });
    });
};

getCommentList();

function updateCommentListDom(value, comment, writer) {
  const commentChat = document.createElement("div");
  commentChat.classList.add("main-four__state__chat");

  const nicknameSpan = document.createElement("span");
  nicknameSpan.classList.add("bold");
  nicknameSpan.textContent = writer;

  const contentSpan = document.createElement("span");
  contentSpan.innerText = value;

  commentChat.append(nicknameSpan, contentSpan);
  comment.append(commentChat);
}

//엔터키를 눌렀을 때 출력되게 하기 (하단은 연습용, 무시)
// const commentArea = document.querySelectorAll("textarea")[0]; //댓글 영역
// const log = document.getElementById("values");

// commentArea.addEventListener("input", updateValue);

// function updateValue(e) {
//   log.textContent = e.target.value;
// }
