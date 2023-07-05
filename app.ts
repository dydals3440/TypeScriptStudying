// 처음에는 number 타입으로 계산
function add(n1: number | string, n2: number | string) {
  let result;
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

// number타입 더하는 경우
const addNumber = add(10, 20);
console.log(addNumber);

// string타입을 더하고 싶은경우
const addNames = add('matthew', 'Kim');
console.log(addNames);

// string 타입으로 변경할 경우
