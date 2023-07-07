// // Union Type 다양한 타입 연산 하는법
// // 처음에는 number 타입으로 계산
// type Combinable = number | string;
// type ConversionDescriptor = 'as-number' | 'as-text';

// function add(
//   n1: Combinable,
//   n2: Combinable,
//   resultConversion: ConversionDescriptor
// ) {
//   let result;
//   if (
//     (typeof n1 === 'number' && typeof n2 === 'number') ||
//     resultConversion === 'as-number'
//   ) {
//     result = +n1 + +n2;
//   } else {
//     result = n1.toString() + n2.toString();
//   }
//   return result;
//   //   if (resultConversion === 'as-number') {
//   //     return +result;
//   //   } else {
//   //     return result.toString();
//   //   }
// }

// // number타입 더하는 경우
// const addNumber = add(10, 20, 'as-number');
// console.log(addNumber);

// // string타입을 더하고 싶은경우
// const addNames = add('matthew', 'Kim', 'as-text');
// console.log(addNames);

// // string 타입으로 변경할 경우
