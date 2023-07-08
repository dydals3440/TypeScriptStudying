//  unknown type
let userInput: unknown;

userInput = 5;
userInput = 'YONG';
// unknown을 사용할 경우, useInput에 현재 저장된 타입을 확인해야 문자열을 원하는
// 변수에 할당할 수 있습니다.
if (typeof userInput === 'string') {
  userName = userInput;
}
// unknown / any 차이
let userName: string;
userName = userInput; // unknown은 string에 할당 X any타입으로 변경할시 에러해결
// unknown은 any보다 제한적,
