// 인터페이스
interface User {
  name: string;
  age: number;
}

// 변수에 사용하는 경우
const seho: User = { name: 'hi', age: 100 };

// 함수의 매개변수에 사용하는 경우
function getUser(user: User) {
  console.log(user);
}
getUser(seho);


// 함수의 전체 타입에 사용하는 경우
// interface SumFunction {
//   (a: number, b: number): number;
// }
// let sum: SumFunction;

// // 안되는 경우. num2 가 number로 바꿔야지 오류가 사라진다.
// sum = function (num1: number, num2: string): number {
//   return num1 + num2;
// };

// 배열의 인덱싱에 사용하는 경우
// interface StringArray {
//   [index: number]: string;
// }
// let arr: StringArray;
// arr[0] = 'hi';
// arr[1] = 10;

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
  // RegExp = 정규식패턴
}

var obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsfFile: /\.js$/
}

// 인터페이스 확장
interface Person3 {
  name: string;
  age: number; // 옵셔널 선택자 ? 동일하게 적용 가능
}
interface Developer2 extends Person3 {
  language: string;
}
const joo: Developer2 = { name: 'joo', age: 20, language: 'ts' };
