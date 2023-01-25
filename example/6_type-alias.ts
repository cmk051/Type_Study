// https://www.typescriptlang.org/docs/handbook/advanced-types.html
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#nullable-types
// type 은 확장이 불가능하고 interface 는 확장이 가능하다.


// #1
// function sum(a: number, b:number) {
//   return a + b;
// }
type SumParameter = number;

function sum(a: SumParameter, b: SumParameter) {
  return a + b;
}

// #2
type Person2 = {
  name: string;
  age: number;
};

function getPerson(): void {
  // ...
}

// #3
type Hero = {
  skill: string;
}

const capt: Hero = { 
  skill: 'throwing a shield' 
}