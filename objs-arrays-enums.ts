// const person: {
//   // 객체의 구조에 대한 정보를 제공하는 객체 타입 역할 (TS)
//   name: string;
//   age: number;
//   hobbies: string[];

//   role: [2, 'author'];
// } = {
//   name: 'Yongmin',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
// };

// let favoriteActivities: string[];
// // 에러 발생 (그냥 문자열이므로)
// // favoriteActivities = 'sports';
// // 에러가 발생하지 않습니다.
// favoriteActivities = ['sports'];

// // 배열을 사용하고 싶으나, 문자열도 들어가고 숫자도 들어가고 싶을때, any를 사용한다.
// // 자주 사용하는 type은 아닙니다. 타입스크립트가 지닌 어디서든 any값을 사용할 수 있게 해주는
// // 장점을 누리지 못하게 되기 때문입니다.
// let favoriteFruits: any[];
// favoriteFruits = ['mango', 1];

// console.log(person.name);

// for (const hobby of person.hobbies) {
//   // hobbies가 문자열로 인식했기 때문에, hobby또한 문자열로 정확히 인식됩니다.
//   // 타입스크립트는 이 기능을 통해 문자열로 정해진 hobby에 대해 문자열 메소드를사용할 수 있게 해줍니다.
//   console.log(hobby.toUpperCase()); // sports cooking 출력
//   // map은 사용하지 못하는 것을 확인할 수 있음, map 메소드는 배열에서는 사용가능하지만, 문자열에서는 사용못하기 떄문입니다.
//   //   console.log(hobby.map());
// }

//  Tuple
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   // 딱 2개의 요소만 있는, 특수 배열을 입력해야함 (튜플)
//   role: [number, string];
// } = {
//   name: 'Masimilian',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };

// 이 상황에서는 이대로 작동해서는 안 됩니다 .두 요소만 지정해야 합니다.
// // 타입스크립트는 우리가 두 요소만 입력할 것이라는걸 아직 모릅니다.
// person.role.push('admin');
// // push는 예외적으로 튜플에서 허용하기에 타입스크립트가 이런 에러를 걸러내진 못하지만, 적어도 잘못된 값을 할당하지는 않습니다. 이외에도 길이에 대한 지원도 가능합니다.
// // person.role = []; // 빈배열은 길이가 달라 허용하지 않음
// // person.role = [0, 'admin', 'user'] // 길이에 해당하지않아, 에러
// console.log(person);
// //  또 다음 요소에서 두번쨰 요소인 person.role의 1이라는 인덱스가 숫자가 되도록 설정을 해야합니다.
// 타입스크립트는 role이 문자열 타입이나, 숫자 배열이라는 것만 인지하기 때문에 이렇게 해야만 작동합니다.
// person.role[1] = 10;

// enum

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// // enum은 커스텀 타입
// enum Role {
//   ADMIN = 5,
//   READ_ONLY,
//   AUTHOR,
// }

// const person = {
//   name: 'yongmin',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: Role.ADMIN,
// };

// if (person.role === Role.AUTHOR) {
//   console.log('is author');
// } else {
//   console.log('다시 확인해보세요');
// }

// any타입
let favoriteActivities: any[];
favoriteActivities = ['Sports'];
favoriteActivities = [1];
favoriteActivities = [null];
favoriteActivities = [true, false];
