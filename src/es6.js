//////////////////////////////////////////////////spread immutability

//spread operator
const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;

const num = 1;
num = 3; // 타입 에러가 발생합니다

const str = '문자';
str = '새 문자'; // 타입 에러가 발생합니다

const arr = [];
arr = [1, 2, 3]; // 타입 에러가 발생합니다

const obj = {};
obj = { name: '내 이름' }; // 타입 에러가 발생합니다

const arr2 = [];
arr2.push(1); // arr2 = [1]
arr2.splice(0, 0, 0); // arr2 = [0,1]
arr2.pop(); // arr2 = [1]

const obj2 = {};
obj2['name'] = '내이름'; // obj2 = { name: '내이름' }
Object.assign(obj2, { name: '새이름' }); //obj2 = { name: '새이름' }
delete obj2.name; //obj2 = {}

const num1 = 1;
const num2 = num1 * 3; // num2 = 3

const str1 = '문자';
const str2 = str1 + '추가'; // str2 = '문자추가'

const arr3 = [];
const arr4 = arr3.concat(1); // arr4 = [1]
const arr5 = [...arr4, 2, 3]; // arr5 = [1, 2, 3]
const arr6 = arr5.slice(0, 1); // arr6 = [1], arr5 = [1, 2, 3]
const [first, ...arr7] = arr5; // arr7 = [2, 3], first = 1

const obj3 = { name: '내이름', age: 20 };
const obj4 = { ...obj3, name: '새이름' }; // obj4 = { name: '새이름', age: 20}
const { name, ...obj5 } = obj4; // obj5 = { age: 20 }

const arr = [1, 2, 3];

/////////////////////////////////////////////////////////////////////destructuring
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021,
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA',
  },
};

myVehicle(vehicleOne);

function myVehicle({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.';
}

//The spread operator is often used in combination with destructuring.
const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red',
};

const updateMyVehicle = {
  type: 'car',
  year: 2021,
  color: 'yellow',
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
console.log(myUpdatedVehicle);

///////////////////////////////////////////////////////////////////////classes
//기존 prototype으로 새로운 객체를 만들어 수정 업데이트한 예시
function Dog(name) {
  this.name = name;
}

Dog.prototype.say = function() {
  console.log(this.name + ': 멍멍');
};

var dog = new Dog('검둥이');
dog.say(); //검둥이: 멍멍

//ES6의 클래스 문법
class Dog {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(this.name + ': 멍멍');
  }
}

const dog = new Dog('흰둥이');
dog.say(); //흰둥이: 멍멍

//화살표 함수
function BlackDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이',
    bark: function() {
      console.log(this.name + ': 멍멍!');
    },
  };
}

const blackDog = new BlackDog();
blackDog.bark(); //검둥이: 멍멍!

function WhiteDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이',
    bark: () => {
      console.log(this.name + ': 멍멍!');
    },
  };
}

const whiteDog = new WhiteDog();
whiteDog.bark(); //흰둥이: 멍멍!

//////////////////////////////////////////////////////////////////////array methods
// 가변 변수를 사용한 예
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// iterator 방식의 for-in 루프와 함께 불변 변수를 사용한 예
for (const item in arr) {
  console.log(item);
}

// forEach 함수를 활용한 예
arr.forEach((item, index) => {
  console.log(item);
  console.log(index);
});

/////////////////////////////////////////////////////////////////module import&export
// in-line individually
export const name = 'Jesse';
export const age = '40';

// 하단에 한꺼번에
const name = 'Jesse';
const age = '40';

export { name, age };

// 한파일이 한번 export default
const message = () => {
  const name = 'Jesse';
  const age = '40';
  return name + ' is ' + age + 'years old.';
};

export default message;

//as 키워드를 사용하여 별칭을 붙임
//Page404.js
const Page404 = () => {
  return (
    <div>
      <h1>페이지가 존재하지 않습니다.</h1>
    </div>
  );
};

export { Page404 as ErrorPage };

//App.js
import React from 'react';
import { ErrorPage } from './Page404';

export default function App() {
  return (
    <React.Fragment>
      <ErrorPage />
    </React.Fragment>
  );
}

//import
// Named exports must be destructured using curly braces.
// import 식별자(변수, 함수 클래스) from ‘경로’;
import { name, age } from './person.js';
import message from './message.js';
