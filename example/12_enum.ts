enum Shoes {
  Nike = '나이키', // 값을 지정해주지 않으면 0으로 시작한다.
  Adidas = '아디다스'
}

var myShoes = Shoes.Nike;

console.log(myShoes); // 0

enum Answer {
  Yes = 10,
  No
}

// 예제
function askQuestion(answer: Answer): void {
  if (answer === Answer.Yes) {
    console.log('정답');
  }
  if (answer === Answer.No) {
    console.log('오답');
  }
}

askQuestion(Answer.Yes);
askQuestion(Answer.No);

