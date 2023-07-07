function add(n1: number, n2: number) {
  return n1 + n2;
}

// void 타입: 의도적으로 반환문이 없다는 것을 의미
// undefined도 타입으로 사용가능
//  이 함수 자체는 아무것도 반환하지 않는다.
function printResult(num: number): void {
  console.log('Result: ' + num);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8)); // combineValues의 타입이 any기에 add함수가 할당되어 정상작동
combineValues = 5;
console.log(combineValues(8, 8)); // combineValues의 타입이 any기에 5가 할당되어 함수가 제대로 동작하지않음

// 함수라고 정의해주어 해결할 수 잇다.
let combineValues: Function;

// let someValue: undefined;

// // return 값 타입이 문자인 경우
// function repeat(text: string, count: number = 1): string {
//   let result: string = '';
//   while (count--) {
//     result += text;
//   }
//   return result;
// }

// console.log(repeat('ㅎㄷ', 2));
