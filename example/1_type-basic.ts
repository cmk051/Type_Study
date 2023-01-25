// JS 문자열 선언
// const str = "hello";
// TS 문자열
const str: string = "hello";

// TS 숫자
const num: number = 10;

// TS 배열
const arr: Array<string> = [];
arr.push("hi");

// 해당 배열안에 다른 타입이 있을 경우 에러로 알려준다. 해당 배열은 지정한 타입만 사용 가능하다.
// const arr2: Array<number> = [1, 2, 3, "z"];

// TS 배열 - 리터럴 적용
const items: string[] = [];
// const items: Array<String> = ["1", "2", "3"]; 위와 같은 방식이다.
// items.push(10);

// TS 튜플
// 배열 특정 인덱스의 타입을 지정해준다.
const address: [string, number] = ["시흥", 8];

// TS 객체
const obj: object = {};
// obj.a = 10;

// TS 타입 객체
// object 안에 있는 값들에 대한 TYPE 도 정의할 수 있다.
const person: { age: number; name: string } = { age: 28, name: "SangHyun" };
person.age = 101;

// TS 진위값
let isLogin: boolean = true;
