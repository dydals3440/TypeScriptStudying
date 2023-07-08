function add(n1: number, n2: number) {
  return n1 + n2;
}

// void 타입: 의도적으로 반환문이 없다는 것을 의미
// undefined도 타입으로 사용가능
//  이 함수 자체는 아무것도 반환하지 않는다.
function printResult(num: number): void {
  console.log('Result: ' + num);
}

// 콜백 타입에 void가 반환이 되는데 그래도 결과값이 반환된다. 이것은 에러가 아니다.
// 기본적으로 여기서 반환할 수 있는 모든 결과를 무시하게 되기 떄문입니다.
function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
  const result = n1 + n2;
  callback(result);
  // addAndHandle 내에서 어떤것도 return 하지 않겠다고 선언함.
}
// 콜백에 result 정의함
addAndHandle(10, 20, (result) => {
  console.log(result);
});

// printResult(add(5, 12));

// let combineValues: (a: number, b: number) => number;

// combineValues = add;

// console.log(combineValues(8, 8)); // combineValues의 타입이 any기에 add함수가 할당되어 정상작동
// combineValues = 5;
// console.log(combineValues(8, 8)); // combineValues의 타입이 any기에 5가 할당되어 함수가 제대로 동작하지않음

// // 함수라고 정의해주어 해결할 수 잇다.
// let combineValues: Function;

// // let someValue: undefined;

// // // return 값 타입이 문자인 경우
// // function repeat(text: string, count: number = 1): string {
// //   let result: string = '';
// //   while (count--) {
// //     result += text;
// //   }
// //   return result;
// // }

// // console.log(repeat('ㅎㄷ', 2));
