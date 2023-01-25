// 자바스크립트 함수 선언
// function sum(a, b) {
//   return a + b;
// }

// 타입스크립트 함수 선언 - 함수의 매개 변수
function sum(a: number, b: number) {
  return a + b;
}

sum(10, 20);

// 타입스크립트 함수 선언 - 함수의 반환 타입
function add(a: number, b: number): number {
  return a + b;
}
// add(10, 20, 30, 40); TS는 인자의 개수까지 체크를 해준다.

// function add(a: number, b: number): string {
//   return a + b;
// }

// 함수 인자
function log2(a: string) {
  console.log(a);
}
log2("a", 10);

// 함수 옵셔널 파라미터(optional parameter) 해당 파라미터를 넣어도 되고 안 넣어도 된다는 의미를 가지고 있다.
function printText(text: string, type?: string) {
  console.log(text);
}
printText("hi");
