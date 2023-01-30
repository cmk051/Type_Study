function getNumber(value: number) {
  return value;
}

function getArray(value: string[]) {
  return value;
}

// 제네릭 기본 문법 - 함수 <T> 라는 타입을 받겠다. value: T는 T라는 타입으로 사용하겠다. 리턴 T는 리턴으로 t라는 타입으로 리턴하겠다
function getValue<T>(value: T): T {
  return value;
}
// 제네릭이란 호출할때 리턴값 및 인자값이 정해진다.

getValue("hi").toLocaleUpperCase();
getValue(100).toLocaleString();

function logText(text: string | number) {
  console.log(text);
  // string 이나 number 타입으로 매개변수를 받아도 타입이 확고하지 않으면 split 함수를 사용 못한다.
  text.split();
  return text;
}

// 제네릭 기본 문법 - 인터페이스
interface Developer<T> {
  name: string;
  age: T;
}
const tony: Developer<number> = { name: "tony", age: 100 };

// 제네릭 타입 제한 - 구체적인 타입
function getNumberAndArray<T>(value: T): T {
  value.length; // X
  return value;
}

function getNumberAndArray<T>(value: T[]): T[] {
  value.length; // O
  return value;
}

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface lengthType {
  length: number;
}
// lengthType 인터페이스에 있는 length를 사용한다라는 의미
function logTextLength<T extends lengthType>(text: T): T {
  text.length;
  return text;
}
// number type에서는 length를 지원하지 않는다.
logTextLength(10);
// string type에서는 length를 지원한다.
logTextLength("asd");

// 제네릭 타입 제한 - keyof
interface ShoppingItems {
  name: string;
  price: number;
  address: string;
  stock: number;
}
// ShoppingItems interface 에 사용할 수 있는 key를 제한할 수 있다.
function getAllowedOptions<T extends keyof ShoppingItems>(option: T): T {
  if (option === "name" || option === "address") {
    console.log("option type is string");
    return option;
  }
  if (option === "price" || option === "stock") {
    console.log("option type is number");
    return option;
  }
  return option;
}
getAllowedOptions("address");
// const a = getAllowedOptions('name');
// a.toUpperCase(); // Name
