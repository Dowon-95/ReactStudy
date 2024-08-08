console.log("hello ch02 javascript~~!!");

/** 호이스팅 */
console.log("--- 호이스팅 ---");

func(); // 함수 정의가 없지만 호출한 상태.

function func() {
  console.log("호이스팅 테스트");
}

console.log("--- 콜백함수 ---");

function parentFunc(callback) {
  console.log("parent");
  callback();
}

function childFunc() {
  console.log("child");
}

parentFunc(childFunc);

/** callback method 의 활용 - solid 책
 *
 * 비즈니스 : 계좌의 입출금 내역 계산
 * OCP : 코드의 재사용 => 메소드 내의 반복문을 재사용.
 */

// 아래의 메소드에서 출력부분만 제외하고 코드가 동일.
function repeat(count) {
  for (let idx = 0; idx < count; idx++) {
    console.log(idx + 1);
  }
}

function repeatDouble(count) {
  for (let idx = 0; idx < count; idx++) {
    console.log((idx + 1) * 2);
  }
}

// 반복문 재사용 되도록 개선한 함수
function repeat2(count, callback) {
  for (let idx = 0; idx < count; idx++) {
    callback(idx + 1);
  }
}

function origin(count) {
  console.log(count);
}

function double(count) {
  console.log(count * 2);
}

repeat2(5, origin);
repeat2(5, double);

console.log("--- 화살표 함수 ---");

// 함수 표현식을 더 간략하게 코드를 작성.

greeting = (name) => `hello ${name}`;

greetingText = greeting("홍길동");

console.log(greetingText);

console.log("--- 객체 ---");

// 객체 생성
let objA = {}; // 리터럴 객체
let objB = new Object();

let obj = {
  // obj 는 객체 참조 변수, 저장된 것은 주소값
  a: 1,
};

let isPropertyExists = obj.b !== undefined;

console.log(isPropertyExists);
console.log(obj.b); //undefined

// in 연산자
let person = {
  age: 10,
};

// "name" 이라는 property 가 person 객체에 존재하는지
let isNameExist = "name" in person;

console.log(isNameExist); //false

let isAgeExist = "age" in person;
console.log(isAgeExist); //true

console.log("--- 배열 ---");
// 배열의 값으로 어떤 자료형도 사용할 수 있음.
// 요소로 배열, 객체, 함수...

let arr = [
  1,
  "1",
  true,
  false,
  null,
  undefined,
  () => {},
  function () {},
  [1, 2, 3],
  { a: 1 },
];

console.log(arr); //arr은 참조변수. 저장된 값은 주소
// 따라서, arr은 객체임. 객체에는 프로퍼티, 메소드로 구성
// 그래서, javascript 에서 제공해주는 property, method가 있음.

/**
 * javascript 의 자료형
 *
 * 원시자료형
 *      숫자형, 문자형, boolean형, null형, undefined형
 * 객체자료형
 *      object 형 - 배열, 함수, 정규표현식.
 */

/**
 * javascript : C++, javascript engine 은 C++로 만들어짐.
 *              C++ : C + OOP 를 더한 것
 *                    C : 메모리 관리하는 변수 => 포인터
 *                        함수포인터 : 함수명
 *                    OOP : 기본형을 제외하고 다양한 사용자 정의 타입을 만들어서 사용가능.
 *
 * 기회가 된다면, C 언어 기본서 => C 언어 기반의 자료구조
 *              => C++ 기본서
 *
 * javascript 에서 객체주소 확인은 ?
 *  javascript engine 에서 보호하고 있음.
 *  1. javascript engine C++ 로 컴파일  해서 확인
 *  2. 개발자 모드에서 간접적으로 확인.
 *
 */

console.log("--- null 병합 연산자 ---");

let name;
let nickName = "nickName";

let user = name ?? nickName; // 값이 확정된 것은 nickName.

console.log(user);
/*********************************************************** */
/**********여기까지는 ch1 의 중요한 부분 복습 *****************/
/*********************************************************** */

/*********************************************************** */
/**********여기서부터 ch2. *****************/
/*********************************************************** */

console.log("--- truthy, falsy ---");

// undefined, null, 0, -0, NaN, "", `` 는 조건식에서 false로 평가함.
// 실제로는 false 가 아니지만 false 로 간주하고 처리하겠다.
if (!undefined) {
  // undefined => false 로 간주
  console.log("1 falsy 한 값입니다.");
}

if (!null) {
  console.log("2 falsy 한 값입니다.");
}

if (!0) {
  console.log("3 falsy 한 값입니다.");
}

if (!-0) {
  console.log("4 falsy 한 값입니다.");
}

if (!NaN) {
  console.log("5 falsy 한 값입니다.");
}

if (!"") {
  console.log("6 falsy 한 값입니다.");
}

if (!``) {
  console.log("7 falsy 한 값입니다.");
}

console.log("--- truthy, falsy 활용 ---");

let varA;

if (varA) {
  console.log("값이 있음");
} else {
  console.log("값이 없음");
}

// 단락 평가 : 논리 연산에서 처리를 지름길로 수행할수 있도록 함
// AND ( && ) : 앞의 피연산자가 false 면 뒤의 피연산자는 볼 필요 없음.
// OR ( || ) : 앞의 피 연산자가 true 면 뒤의 피연산자는 볼 필요 없음.

function calcA() {
  console.log("a");
  return false;
}

function calcB() {
  console.log("b");
  return true;
}

console.log(calcA() && calcB());

// 단락 평가 + truthy falsy
// truthy falsy에 해당되는 값이면, 그대로 반환.
console.log("단락 평가 + truthy falsy");
function calcA2() {
  console.log("a");
  return undefined; //falsy
}

function calcB2() {
  console.log("b");
  return true;
}

console.log(calcA2() && calcB2());

// 객체 +  단락 평가 + truthy falsy
console.log("객체 + 단락 평가 + truthy falsy");

function getName(person) {
  if (person !== undefined && person !== null) {
    return person.name;
  } else {
    return console.log("존재하지 않는 객체 정보입니다.");
  }
}

let person2; //객체

let name2 = getName(person2);

let person3 = null; //객체

let name3 = getName(person3);

// 모든 객체에 대해서 null, undefined 체크를 하는 것이 부담이 됨.
// => 객체 + 단락 평가 + truthy falsy

function getName3(person) {
  return person && person.name; // person 이 null => false
  // person.name 이 undefined => false
}

let person4 = { name: "홍길동" }; //리터럴 객체

let name1 = getName3(undefined);
console.log(name1);

name1 = getName3(null);
console.log(name1);

name1 = getName3(person4);
console.log(name1);

// 객체 자료형
console.log("객체 자료형");
// 원시 자료형을 제외하고는 모든 자료형은 객체 자료형
// 그래서, 배열도 객체 자료형임. 배열에는 프로퍼티와 메소드가 있음.

const arr1 = [1, 2, 3];
console.log(arr1.length); //배열객체의 property

arr1.push(4); //배열객체의 method
console.log(arr1);

function myFunction() {
  console.log("hello");
}

console.log(myFunction.name); // 함수객체의 property

let numA = 1;
let numB = 1;

console.log(numA == numB); //true
let people1 = {
  name: "홍길동",
};

let people2 = {
  name: "홍길동",
};
console.log(people1 === people2); //false, 주소값 비교
// 객체의 property의 값을 비교햐애 함.

let func2 = () => {
  console.log("func2");
};

let func3 = () => {
  console.log("func3");
};

console.log(func2 === func3); //false, 객체의 주소값 비교

//반복문 활용
console.log("--- 반복문 활용 ---");

arr = [1, 2, 3, 4];

// 1. index 를 활용
for (let idx = 0; idx < 4; idx++) {
  console.log(arr[idx]);
}

console.log("----");
// 2. 배열 객체의 프로퍼티 활용
let len = arr.length;

console.log(len);

for (let idx = 0; idx < arr.length; idx++) {
  console.log(arr[idx]);
}

// 3. for...of 사용
console.log("--- for...of 사용 ---");
for (let item of arr) {
  console.log(item);
}

// 객체와 반복문
console.log("--- 객체와 반복문 ---");

// 1. 프로퍼티의 key 를 취득
person = {
  name: "홍길동",
  age: 25,
  location: "부산",
};

const keyArr = Object.keys(person);

console.log(keyArr);

// 2. 키를 활용한 프로퍼티 value 탐색
for (let key of keyArr) {
  let value = person[key];
  console.log(value);
}

// 3. Object.values 를 활용한 프로퍼티 value 탐색
const valueArr = Object.values(person);
console.log(valueArr);

// 4. for...in 을 이용한 순회.
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}

// 구조분해 할당 : 배열이나 객체에서 요소를 해체해 개별 변수에 그 값을 담는 것.
console.log("--- 배열 구조 분해 할당 ----");

arr = [1, 2, 3];

let one = arr[0];
let two = arr[1];
let three = arr[2];

let [one2, two2, three2] = arr; // 구조 분해 할당
console.log(one2, two2, three2);

let arr2 = [1, 2, 3]; // 요소가 3개인데, 구조 분해 할당은 2개로...
let [one3, two3] = arr2;
console.log(one3, two3);

arr2 = [1, 2];
let [one4, two4, three4] = arr2;
console.log(one4, two4, three4); // three4 는 undefined 로 할당/.

console.log("--- 객체 구조 분해 할당 ----");

person = {
  name4: "홍길동",
  age4: 25,
  location4: "부산",
};

// 객체의 분해 할당의 기분은 객체의 key 를 기준으로 수행됨.
// 배열의 분해 할당과의 차이점.
let { name4, age4, location4 } = person;
console.log(name4, age4, location4);

person = {
  name: "홍길동",
  age: 25,
  location: "부산",
};

// 객체의 분해 할당이 객체의 key 기준으로 수행되지 않음.
// 따라서 모두 undefined 값으로 할당됨.
// 배열의 분해 할당과의 차이점.
let { name5, age5, location5 } = person;
console.log(name5, age5, location5);

console.log("--- 함수의 매개변수 구조 분해 할당 ---");

//객체는 key 기준으로 분해 할당이 이루어 짐으로 ,
// 아래의 결과는 모두  undefined 가 할당됨.
function func5({ name2, age2, location2 }) {
  console.log(name2, age2, location2);
}

person = {
  name: "홍길동",
  age: 25,
  location: "부산",
};

func5(person);

// 객체는 key 기준으로 분해 할당이 이루어 짐으로 ,
// 아래의 결과는 모두 정상적으로 할당됨.
function func4({ name, age, location }) {
  console.log(name, age, location);
}

person = {
  name: "홍길동",
  age: 25,
  location: "부산",
};

func4(person);

console.log("--- 스프레드, rest 연산자 ---");

/**
 * 스프레드 연산자 : 반복이 가능한 객체에서 값을 개별 요소로 분리하는 기능.
 *                  전개 연산자라고도 함.
 *
 * rest 연산자 : 개별요소를 다시 배열로 묶어주는 기능.
 *               rest 에는 "나머지", 나머지는 하나로 묶겠다는 의미가 있음.
 */

console.log("--- 스프레드 연산자(배열) ---");
arrA = [1, 2, 3];
arrB = [...arrA, 4, 5, 6]; // 스프레드 연산자(전개 연산자)
//arrA 의 요소를 하나씩 분리해서, arrB의 각 요소에 할당.

console.log(arrB);

console.log("--- 스프레드 연산자(객체) ---");
objA = {
  a: 1,
  b: 2,
};

// objA 프로퍼티를 하나씩 분리해서,  objB의 프로퍼티로 나열함.
objB = {
  ...objA, // 스프레드 연산자 (전개 연산자)
  c: 3,
};

console.log(objB);

console.log("--- 스프레드 연산자(함수) ---");

function func6(a, b, c) {
  console.log(a, b, c);
}

arr = [1, 2, 3];

func6(...arr); // 스프레드 연산자 (전개 연산자)

console.log("--- rest 매개변수 ---");
// 스프레드 연산자의 반대 기능. 즉, 요소를 배열로 묶는 기능.

function func7(param, ...rest) {
  // param 매개변수를 제외한 나머지, 나머지는  배열로 묶겠다.
  console.log(param); // 1 이 할당됨.
  console.log(rest); // 2,3,4 가 배열로 묶여져서 할당됨.
}

func7(1, 2, 3, 4);

// rest  매개변수는 함수의 매개변수의 마지막 위치에 선언되어야 함.
// 아래의 코드는 컴파일 에러가 발생.
// function func8(...rest, param) {
//     console.log(param);   // 1 이 할당됨.
//     console.log(rest);    // 2,3,4 가 배열로 묶여져서 할당됨.
//   }

console.log("--- 배열 메소드 ---");

// 1. push : 요소 추가
console.log("--- push : 추가 ---");

let movie = ["비그치다", "매드맥스", "인사이드 아웃"];

// 배열의 가장 끝에 요소를 추가하고, 배열의 길이를 반환.
const newLength = movie.push("행복을 찾아서");

console.log(newLength);
console.log(movie);

movie.push("쇼군", "하울의 움직이는 성");

console.log(movie);

// 2. pop : 제거
console.log("--- pop : 제거 ---");

const removeItem = movie.pop();

console.log(removeItem);

console.log(movie);

let movie1 = [];
const removeItem2 = movie1.pop();

console.log(removeItem2); //undefined - error 발생하지 않음.

// 3. shift : 제일 앞의 요소 제거, 제거한 요소를 반환
console.log("--- shift : 제거 ---");

const removeItem3 = movie.shift();

console.log(removeItem);
console.log(movie);

// 4. unshift : 맨 앞에 요소 추가, 배열의 길이를 반환
console.log("--- unshift : 추가 ---");

const newLength2 = movie.unshift("비그치다2");

console.log(movie);

/**
 * shift, unshift
 *
 * unshift : 배열의 맨 앞에 추가. 기존의 배열 요소를 한 칸씩 뒤로 이동을 시켜야 함.
 *
 * shift : 배열의 맨 앞의 요소를 삭제. 기존의 배열 요소를 한 칸씩 앞으로 이동을 시켜야 함.
 *
 * 따라서, unshift, shift 는 성능이 낮음. push, pop 에 비해서.
 */

// 5. slice : 기존 배열에서 특정 범위를 잘라 새로운 배열을 반환함.
//            원본 배열을 유지함.
console.log("--- slice : 자르기 ---");

const arr3 = [1, 2, 3];
const sliced = arr.slice(0, 2); //0번째 index에서 2개의 요소 선택

console.log(arr);
console.log(sliced);

const sliced2 = arr.slice(1); // 자르기 시작 위치만 설정
console.log(sliced2); // 시작 위치에서 끝까지

// 시작 위치를 음수로 설정한 경우
console.log(arr3.slice(-1)); //배열의 끝에서 첫번째에서 끝까지 => 3
console.log(arr3.slice(-2)); //배열의 끝에서 두번째에서 끝까지 => 2,3
console.log(arr3.slice(-3)); //배열의 끝에서 세번째에서 끝까지 => 1,2,3

// 6. concat : 서로 다른 배열을 이어붙여 새 배열을 반환하는 메소드
console.log("--- concat: 합치기 ---");

arrA = [1, 2];
arrB = [3, 4];

let arrC = arrA.concat(arrB);
console.log(arrC);

//배열의 순회 메소드
console.log("--- 배열의 순회 메소드 ---");

/**
 * 7. foreach 메서드
 *
 *      - 인수로 함수를 요구함. => callback 메서드
 *      - foreach 는 배열의 모든 요소를 각각 순회하여 인수로 전달된 콜백 메소드가 정의된 대로 요소를 작업.
 *      - item : 현재 순회중인 배열 요소
 *      - index : 현재 순회하는 배열 요소의 인덱스
 *      - array : 순회 중인 배열
 */

// call back 메서드 정의 => foreach 메소드의 매개변수로 전달.
// SOLID의 OCP 원칙을 적용했다고 봐도 무방함.
// 사용자 친화 API로 제공되고 있음. foreach() 이름 자체가.
console.log("--- foreach, call back 메서드 ---");
function cb(item, idx) {
  console.log(`${idx}번째 요소 : ${item}`);
}

const arr4 = [1, 2, 3, 4, 5];

arr.forEach(cb);

// 위의 콜백 메소드를 화살표 표현식으로 변경
console.log("--- foreach, 화살표 표현식 ---");
arr4.forEach((item, idx) => {
  console.log(`${idx}번째 요소 : ${item}`);
});

console.log("--- 탐색 메서드 - indexOf ---");
/**
 * 8. 탐색 메서드 - indexOf
 *      배열에서 특정 조건을 만족하는 요소를 찾아내는 메소드
 *
 *      arr.indexOf(item, fromIndex);
 *
 *      - item : 배열에서 찾으려는 요소값 => 검색 조건
 *      - fromIndex : 탐색을 시작할 위치.
 */

let arr5 = [1, 3, 5, 7, 1];

// 검색이 되면, 검색 위치값을 반환하면서, 탐색을 중지함.
console.log(arr5.indexOf(1, 0)); // 1 : 검색 조건 , 0: 검색 사직 위치

arr5 = [2, 3, 5, 7, 1];
console.log(arr5.indexOf(1, 0)); // 1 : 검색 조건 , 0: 검색 사직 위치

arr5 = [1, 3, 5, 6, 1];

console.log(arr5.indexOf(1, -1)); // -1 : 배열의 끝에서 탐색을 시작 해서 1을 찾으면 끝

// 탐색 결과가 없는 경우 => -1 반환
console.log(arr5.indexOf(9));

// 탐색 조건과 배열의 요소의 데이터 타입이 다른 경우 = > -1 반환
// 비교 연산자 (===) 로 요소를 비교함으로, 자료형이 다르면, 다른 값으로 평가.
console.log(arr5.indexOf("3"));

// 배열에서 객체를 탐새갛는 경우 => -1 반환
// indexOf 메소드로는 객체 자료형의 값을 탐색할 수 없음.
// => findIndex, find 메소드를 사용해야함.
arr5 = [{ name: "홍길동" }, 1, 2, 3];

console.log(arr5.indexOf({ name: "홍길동" }));

console.log("--- 탐색 메소드 - includes ---");
/**
 *  9. 탐색 메소드 - includes
 *      배열에 특정 요소가 있는지 판별
 */

arr = [1, 3, 5, 7, 1];

console.log(arr.includes(3)); // 탐색하는 데이터가 존재하면 true
console.log(arr.includes(9)); // 존재하지 않으면 false
console.log(arr.includes("3")); // 자료형이 다르면 false

console.log("--- 10. 탐색 메소드 - findIndex - 콜백 함수 ---");
/**
 * 10. 탐색 메소드 - findIndex
 *      - 인수로 콜백 함수를 전달해야 함. => 판별 함수.
 *        true  : 판별함수의 조건식 만족하는 경우
 *        false : 판별함수의 조건식을 만족하지 않는 경우
 *      - 판별 함수를 만족하는 첫 번째 요소의 인덱스 번호를 반환하고, 없으면 -1 을 반환.
 *      - item : 현재 요소
 *      - index : 현재 인덱스
 *      - array : 탐색 대상 배열
 *  */

// findIndex의 콜백 메소드를 정의 - 배열 요소 중에서 짝수를 탐색
function determine(item, idx, arr) {
  if (item % 2 === 0) {
    //조건식 : 짝수 여부 확인
    return true;
  } else {
    return false;
  }
}

arr5 = [1, 3, 5, 6, 8];
let index = arr5.findIndex(determine);

console.log(index); // 3 반환 = > index 3 인 요소는 6임. 짝수임.

console.log("--- 10. 탐색 메소드 - findIndex - 화살표 표현식 ---");

index = arr5.findIndex((item) => (item % 2 === 0 ? true : false));

console.log(index);

console.log("--- 10. 탐색 메소드 - findIndex - 객체 탐색 ---");

arr5 = [
  { name: "홍길동", age: 20 }, // index : 0
  { name: "이종원", age: 21 }, //index : 1
  { name: "신다민", age: 22 }, // index : 2
  { name: "김효빈", age: 23 }, // index : 3
];

index = arr5.findIndex((item) => item.name === "신다민");

console.log(index); // 2 가 반환됨. 탐색 성공함.

console.log("--- 11. 탐색 메소드 - find - 객체 탐색 ---");
/**
 * 11. 탐색 메소드 - find
 *      find 는 findIndex 와 달리 탐색해서 찾으면,
 *      인덱스 정보가 아닌 요소 정보를 반환함.
 */

let element = arr5.find((item) => item.name === "신다민");

console.log(element); // 2 가 반환됨. 탐색 성공함.

console.log("--- 12. 탐색 메소드 - filter - 객체 탐색 ---");
/**
 * 12. 탐색 메소드 -filter
 *      배열에서 조건을 만족하는 요소만 모아 새로운 배열로 반환.
 */

arr5 = [
  { name: "홍길동", hobby: "당구" }, // index : 0
  { name: "이종원", hobby: "영화" }, //index : 1
  { name: "신다민", hobby: "당구" }, // index : 2
  { name: "김효빈", hobby: "노래" }, // index : 3
];

let filterArr = arr5.filter((item) => item.hobby === "당구");

console.log(filterArr);

console.log("--- 13. 변형 메소드 - map ---");
/**
 * 13. 변형 메소드 - map
 *     배열을 변형하거나 요소를 재정렬.
 *
 *     - 콜백 메소드를 매개변수로 전달
 *     - item, index, arry 가 제공됨.
 */

arr5 = [1, 2, 3, 4];

let newArray = arr5.map((item) => item * 3);

console.log(newArray);

console.log("--- 13. 변형 메소드 - map - 객체 배열 ---");

arr5 = [
  { name: "홍길동", hobby: "당구" }, // index : 0
  { name: "이종원", hobby: "영화" }, // index : 1
  { name: "신다민", hobby: "당구" }, // index : 2
  { name: "김효빈", hobby: "노래" }, // index : 3
];

newArr = arr5.map((item) => item.name);

console.log(newArr);

console.log("--- 14. 변형 메소드 - 정렬 - sort -");
/**
 * 14. 변형 메소드 - 정렬 -sort
 *      배열의 요소를 재정렬
 *
 *      - 콜백 메소드를 매개변수로 전달. 비교함수 ( 오름차순, 내림차순 )
 *      - itme, index, array 가 제공됨.
 */

arr5 = ["b", "a", "c"]; //문자 형태의 요소
arr5.sort(); // 오름차순 정렬
console.log(arr5);

arr5 = [10, 5, 3];
arr5.sort();
console.log(arr5);
// 문자 형태는 정렬, 숫자형태는 정렬 안되고 있음. => 비교 함수를 사용해야 함

// 비교 함수 선언 - 오름 차순
function compare(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

arr5.sort(compare);

console.log(arr5); // 결과 오름차순으로 정렬

// 비교 함수 선언 - 내림 차순
function compare2(a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
}

arr5.sort(compare2);
console.log(arr5); // 결과 내림차순으로 정렬

console.log("--- 15. 변형 메소드 - 문자열 연결 - join -");
/**
 * 15. 변형 메소드 - 문자열 연결 - join
 *      배열 요소를 모두 연결해 하나의 문자열로 반환
 *
 *      - 분리 기호를 사용하는 구분자를 인수로 전달. 필수는 아님.
 *        생략하면, 기본적으로 "," 를 사용.
 */

arr5 = ["너무", "쉬워", "JavaScript"];

console.log(arr5.join()); // 구분자 : ,
console.log(arr5.join("-")); // 구분자 : -

console.log("--- 16. 변형 메소드 - reduce -");
/**
 * 16. 변형 메소드 - reduce
 *      배열 요소를 모두 순회하면서, 인수로 제공한 함수를 실행하고,
 *      단 하나의 결과값을 반환
 *
 *      - 콜백 메소드를 전달해야 함. => 리듀서
 *        콜백 메소드 전달 시 초기값을 전달.
 *      - acc 제공됨. 누산기
 *        이전 함수의 호출 결과는 저장.
 *        리듀서 ( 콜백 메소드 ) 의 두번째 매개변수가 누산기의 초기값이 됨.
 *      - item, index, array 제공됨.
 */

// reduce 메소드를 활용 - 배열의 모든 요소의 값에 대한 누적값을 구할 수 있음.

arr5 = [1, 2, 3, 4, 5];

let result = arr5.reduce((acc, item) => acc + item, 0);
/**
 * acc : 누산기
 * item : 현재의 배열의 요소
 * acc + item : 콜백 메소드
 * 0 : acc(누산기)의 초기값.
 *
 * 0 -> 0+1 -> 0+1+2 -> 0+1+2+3 ... -> 0+1+2+3+4+5 (반환되는 결과값)
 */

console.log(result);

/**
 * Date 객체와 날짜
 */

// Date 객체 생성
let date = new Date();

// 협정 세계시 : 1970.1.1.0:0:0 기준 => UTC + 0

date = new Date(0); //UTC + 0 로 날짜 객체 생성
console.log(date); //한국 표준시 : 기준시갖보다 9시간 이르다.

//타임 스탬프를 사용한 Date 객체 생성
//타임 스탬프 :  UTC+0 을 기준으로 지난 시간을 밀리초로 환산한 값.

console.log("--- dateClone ---");

date = new Date(2024, 7, 2);
let timeStamp = date.getTime();
console.log(timeStamp);

let dateClone = new Date(timeStamp);
console.log(dateClone);

//Date 객체에서 제공되는 메소드
// 1. getFullYear : 네 자리수의 연도를 반환
console.log("getFullYear : " + dateClone.getFullYear());

//2. getMonth : 월을 반환. 0~11 범위.
console.log("getMonth : " + dateClone.getMonth());

//3. getDate : 일을  반환
console.log("getDate : " + dateClone.getDate());

//4. getDat : 요일을 반환 0(일)~6(토) 범위
console.log("getDat : " + dateClone.getDate());

// 5. getHours, getMinutes, getSeconds, getMilliseconds

// Date 객체에서 제공되는 메소드 : setter
//6. setFullYear : 연도 수정
dateClone.setFullYear(2017);

console.log(dateClone);

// 7. setMonth : 월 수정
dateClone.setMonth(4);
console.log(dateClone);

// 8. setHoers, setMinutes, setSeconds, setMilliseconds

// Date 객체에서 제공되는 메소드 : 출력 ( 문자열로 변환 )
console.log(dateClone.toString()); // 날짜, 시간정보
console.log(dateClone.toDateString()); //날짜
console.log(dateClone.toLocaleString()); //년월일 순서의 날짜와 시간정보
console.log(dateClone.toLocaleDateString()); //년월일 순서의 날짜

//Date 객체 응용하기 - 중요 - 기능을 구현해야 함.
// 1. n 월 단위로 이동
function moveMonth(date, moveMonth) {
  // 매개변수 date 객체의 월 정보 취득
  const curTimestamp = date.getTime();
  const curMonth = date.getMonth();

  const resultDate = new Date(curTimestamp);

  // 취득한 월 정부에 moveMonth 를 더함
  // 더한 월을 setter를 이용해서 설정
  resultDate.setMonth(curMonth + moveMonth);

  return resultDate;
}

const dateA = new Date("2000-10-10"); //현재 날짜
console.log(dateA); // Oct : 10월

const dateB = moveMonth(dateA, 2);
console.log(dateB); //Dec : 12월

const dateC = moveMonth(dateA, -1);
console.log(dateC); //sep : 9월

// 더 중요
// 2. 날짜가 프로퍼티로 있는 객체 배열에서 날짜로 해당 객체를 조회  => 검색 결과가 배열로 반환
//    배열에 제공되는 메소드 => 탐색 메소드 => filter() 메소드를 활용.
//    filter() 메소드의 매개변수로 callback 메소드를 전달. => 검색 조건 구현.

// 첫번째 매개변수 : 검색날짜조건
// 두번째 매개변수 : date 정보가 프로퍼티로 있는 객체 배열
function filterThisMonth(searchConditionDate, dateArray) {
  // 매개변수에서 년, 월 정보 취득
  const year = searchConditionDate.getFullYear();
  const month = searchConditionDate.getMonth();

  // 시작일 종료일 날짜 생성 : 검색 범위
  const startDate = new Date(year, month, 1, 0, 0, 0, 0);
  const endDate = new Date(year, month + 1, 0, 23, 59, 59, 0);

  // 두번째 매개변수의 filter 메소드를 사용
  // 검색 범위의 값은 timestamp로 사용.
  const resultArray = dateArray.filter(
    (item) =>
      startDate.getTime <= item.getTime() && item.getTime() <= endDate.getTime()
  );

  // 검색 결과 배열 반환
  return resultArray;
}

console.log("---");

// 2000. oct. 01. 00:00:00
const startDate = new Date(2000, 9, 1, 0, 0, 0, 0);
console.log("startdate : " + startDate);
// 2000. oct. 31. 23:59:59
const endDate = new Date(2000, 9 + 1, 0, 23, 59, 59, 0);
console.log("enddate : " + endDate);

const dateArray = [
  new Date("2000-10-1"), // 검색 결과 대상
  new Date("2000-10-31"), // 검색 결과 대상
  new Date("2000-11-1"),
  new Date("2000-9-30"),
  new Date("1900-10-1"),
];

const today = new Date("2000-10-10/00:00:00");

const filteredArray = filterThisMonth(today, dateArray);

console.log("filteredArray : " + filteredArray);

// 비동기 처리
/**
 * javascript 에서의 비동기 처리
 *
 * 1. 비동기 처리
 *    오래 걸리는 작업이 종료된 때까지 기다리지 않고 다음 작업을 수행할 수 있도록 하는
 *    유연한 프로그래밍 방법
 *
 *    순차적으로 처리하는 코드를 동기처리 라고 함.
 *    오래 걸리는 작업을 빨리 끝날 작업보다 먼저 실행하게 되면, 지연문제가 발생.
 *
 * 2. 세 가지 비동기 방식
 *    2.1 콜백 함수.
 *        전통적으로 사용되어오고 있는 방식
 *
 *        단점 : 콜백 함수가 연속해서 사용되는 경우가 발생 => 콜백 지옥
 *               콜백 지옥을 개선한 방식이 프로미스 방식.
 *
 *    2.2 프로미스
 *        a. promise 객체를 생성
 *           resolve callback : then() method 와 연결됨
 *           reject callback  : catch() method 와 연결됨
 *        b. promise 객체를 사용하는 쪽 구현.
 *           then() method : promise 에서 성공했다는 결과를 받아서 처리
 *           catch() method : promise에서 실패했다는 결과를 받아서 처리
 *           finally() method : 마지막으로 처리해야 할 부분을 구현
 *        c. promise 체이닝
 *           then() method를 사용해서 여러개의 프로미스를 연결하는 것.
 *
 *           promise().
 *              then(step1).
 *                  then(step2).
 *                      then(step3)....
 *
 *           콜백 지옥보다는 상대적으로 각 단계에서의 처리에 대한 정의가 명확해짐.
 *
 *        d. 장점
 *           promise 객체 작성시, resolve(성공), reject(실패) 를 사용
 *            => 성공과 실패에 대해서 명확하게 구분이 가능.
 *            => 콜백 지옥을 해결할 수 있음.
 *
 *    2.3 async, await
 *        promise 가 콜백 메소드 방식에서 개선되었지만, 메소드 체이닝을 너무길게 사용하면
 *        유지보수가 힘들어짐
 *
 *        이러한 문제점을 해결하기 위한 대안이 async, await 임.
 *
 *        a. async 예약어 ( 비동기의 의미)
 *           메소드 선언시 사용하게 되고, promise 를 반환함.
 *
 *        b. await 예약어 ( 대기의 의미)
 *           await는 async 메소드 에서만 사용 가능.
 *
 */

// setTimeout을 활용한 비동기 처리

console.log("비동기 처리 실습");
