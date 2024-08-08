import "./App.css";
import { useState } from "react";

/***
 * AppForState 컴포넌트의 내부 자식 컴포넌트
 *
 * 부모 컴포넌트의 state 인 light 상태정보를 자식 컴포넌트로 props 로 전달.
 *
 * Blub 와 같은 자식 컴포넌트들은 부모 컴포넌트로 부터
 * props(부모의 상태정보) 의 값이 바뀌게 되면, 리렌더링이 발생할 수 있다는 사실.
 */
const Blub = ({ light }) => {
  console.log("Blub().light : " + light);

  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}
    </div>
  );
};

/**
 *
 * 컴포넌트에서 상태(state) 를 생성하려면,
 * 리액트가 제공하는 내장함수 useState를 import 해야함
 *
 * useState() 는 요소가 두개인 배열을 반환
 * - 첫 번째 요소 :
 *   새롭게 생성된 state 의 값
 * - 두 번째 요소 :
 *   함수, 첫 번째 요소인 state 값을 변경시키는 함수 => setter
 *   그래서, 특별히 상태변화 함수라고 부름.
 *
 *
 */

function AppForState() {
  //const state = useState();

  // 요소가 두개임으로 구조분해 할당 방법으로 초기화.
  //const [state, setState] = useState();

  //상태값 초기화
  const [count, setCount] = useState(11);
  console.log(count);

  // light (전등) 상태값을 소등(OFF)으로 초기화.
  const [light, setLight] = useState("OFF");
  console.log(light);

  /**
   * button 을 클릭하면, 컴포넌트의 상태(state) 가 변경이 되어, React 가 이 변경을 감지하게 되어,
   * 자동으로 컴포넌트를 리렌더링해주게 됨.
   *
   * 즉, react 가 이  컴포넌트 함수를 다시 호출해서 반환된 html 을 브라우저에 렌더링한 것임
   */

  return (
    <>
      <div>
        <h1>{light}</h1>
        <Blub light={light} />
        <button onClick={() => setLight(light === "ON" ? "OFF" : "ON")}>
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}
export default AppForState;
