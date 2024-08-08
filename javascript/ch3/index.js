import * as circle from "./circle.js";
import lodash from "loadsh";

const arr = [1111, 222, 111, 44, 33, 222];

const uniueArr = lodash.uniqBy(arr);

// lodash 에는 객체와 배열관련 기능을 제공
console.log(uniueArr); // 배여르이 중복된 요소를 제거하고 출력

// 터미널에서 npm run start 입력

console.log(circle.PI, circle.getArea(1), circle.getCircumference(1));

//console.log("index run~!!");
