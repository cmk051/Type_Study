function logMessage(value: string) {
  console.log(value);
}
function logMessage(value: number) {
  console.log(value);
}
function logMessage(value: any) {
  console.log(value);
}

// # Union 타입 문법 - `any` 보다는 명시적임
function logMessage(value: string | number) {
  console.log(value);
}

function logMessage(value: string | number) {
  if (typeof value === 'string') {
    value.toLocaleUpperCase();
  }
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  throw new TypeError('value must be string or number')
}

// # Intersection 타입 문법
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// interface 를 union으로 사용했을 경우 공통된 속성만 제공한다.
function askSomeone(someone: Developer | Person) {
  someone.name; // O
}
// 넘길때 union은 Developer , Person 이거나 전부의 속성을 넘겨야한다.
askSomeone({name: '박상현', skill:'없음', age: 29})
askSomeone({name: '박상현', age: 29})
askSomeone({name: '박상현', skill:'없음'})

// interface 를 intersection 으로 사용했을 경우 모든 속성을 사용할 수 있다.
// function askSomeone(someone: Developer & Person) {
//   someone.age
//   someone.skill
//   someone.age
// }
// 넘길때 intersection은 전부의 속성을 넘겨야한다.
// askSomeone({name: '박상현', skill:'없음', age: 28})