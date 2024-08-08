import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

/***
 * ch6에서 만든 counter react app
 */

/**
 * 리액트 컴포넌트의 lifecycle
 *
 * 1. 종류
 *    1.1 Mount
 *        컴포넌트의 생성 순간, 최초 렌더링되는 순간
 *
 *        A 컴포넌트가 Mount가 되었다
 *        => A 컴포넌트가 화면에 처음 렌더링 되었다
 *
 *    1.2 Update
 *        컴포넌트가 다시 렌더링 되는 순간, 리렌더링 되는 순간
 *
 *        A 컴포넌트가 Update 되었다
 *        => A 컴포넌트가 리렌더링 되었다
 *
 *    1.3 UnMount
 *        컴포넌트가 화면에서 사라지는 순간, 렌더링에서 제외되는 순간
 *
 *        A 컴포넌트가 UnMount 되었다
 *        => A 컴포넌트가 화면에서 사라졌다
 *
 * 2. lifecycle 순서
 *    Mount(컴포넌트 생성) ->
 *    Update(컴포넌트의 상태 변화) ->
 *    UnMount(컴포넌트의 소멸)
 *
 * 3. lifecycle 단계의 활용
 *    3.1 Mount
 *        컴포넌트에서의 초기화 작업 수행
 *        서버에서 데이터를 요청 및 화면 출력 작업
 *
 *        서버와 통신이 불가능한 경우 => exception 컴포넌트로 이동
 *                          react router 활용
 *
 *        SPA( 한 화면 , index.html ) <-> MPA( 기존의 웹 시스템 , 서버 렌더링 )
 *
 *    3.2 Update
 *        상태변수의 변화에 따른 처리를 수행
 *
 *    3.3 UnMount
 *        컴포넌트가 사용했던 메모리 정리
 *
 * 4. useEffect hook
 */

function App() {
  const [count, setCount] = useState(0);

  // useEffect hook 초기화
  const [input, setInput] = useState("");

  // 마운트 여부를 관리하는 flag, 초기화를 false 로 설정
  const isMount = useRef(false);

  //  1. Mount : 컴포넌트 생성
  /**
   * deps 를 빈 배열을 매개변수로 전달하면 됨
   * useEffect(() => {} , [])
   *
   * useEffect 는 deps 에 있는 값이 변경이 되어야만 실행이 되므로
   * 결국 callback 함수는 컴포넌트가 처음 mount 될때 이후에는 다시는 실행이 될수 없음
   * 즉, 변경을 체크하는 의존관계배열이 비어 있기 때문임
   *
   * 버튼을 클릭해서 state(count) 변경해 보더라도, callback() 함수의 mount 문자가 출력이 되지 않음
   *
   * 그래서, component lifecycle 의  mount 단계에서만 실행이 되는 것임
   */
  useEffect(() => {
    console.log("Mount");
  }, []);

  //  2. Update : 리렌더링, 상태변수 변경
  /**
   * lifecycle 의 update 기준을 개발자가 별도로 정의해서 사용할 수 있음
   * 버튼이 click 되었을 때만, lifecycle 의 update로 인정하겠다는 것
   * 기준에 따라 동작이 되도록 구현을 해야함
   *
   * useEffect() 가 mount 단계가 아닌 경우를 판단 할 수 잇어야 함
   *
   * useEffect(()=>{})
   *
   * 두 번째 매개변수인 의존관계배열을 매개변수로 전달하지 않음
   *
   */
  useEffect(() => {
    // 조건문, mount 단계가 아님을 판단
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("Update");
  });

  //  3. UnMount : 컴포넌트 소멸, 렌더링에서 제외
  /**
   * 화면에 렌더링 되었다가 렌더링에서 제외가 되도록 하는 테스트용 컴포넌트가 필요
   *
   * count 상태 변수가 짝수 일때 , 화면에 렌더링 되는 테스트용 컴포넌트를 작성
   *
   * Even.jsc 컴포넌트를 작성 및 사용
   *
   */

  /**
   * useEffect 사용
   * 첫번재 매개변수 : callback 함수, 두번째 매개변수 : 배열 (옵션)
   *
   * - useEffect() 의 동작
   *    컴포넌트 내에서 원하는 상태변수의 값이 변경되었을 때에만
   *    callback 함수가 실행되고 있음
   *
   *    callback 함수는 count 상태 변수에 의존하고  있음
   *
   *    의존관계에 있는 두번째 매개변수를
   *    dependency array, 의존성 배열이라고 함
   *    deps 라고도 함
   *
   *    그리고, deps 에는 여러 개의 의존값이 올 수 있음
   *
   *  - useEffect() 실행과 관련된 이해
   *    count 를 의존하고 있으므로, useEffect() 의 callback() 함수를 사용하지 않고,
   *    event handler 에서 setCount() 상태변경함수 호출 후에 변경된 상태값 (count)를 사용하면 되는 것 아니냐?
   *
   *    결론은 안됨
   *    왜 안되는지를 이해해야만 함 => setCount() 는 비동기 함수기 때문에....
   *    따라서, useEffect() hook 를 사용해야만 함 => 동기
   *
   *    정리하면 React 에서 state(상태) 는 비동기로 동작하기 때문에 변경된 값에 따라서 부가적인 작업을 하려면
   *    반드시 useEffect() hook 을 사용해야 함
   */
  useEffect(() => {
    console.log(`count : ${count}`);
  }, [count]);

  // event handler
  const onClickButton = (value) => {
    // 상태변경함수 호출은 되었으나, 완료가 되기전에 console.log() 호출된것.
    // => 순차처리가 아님 => 비동기 처리
    setCount(count + value);

    //console.log("event handler " + count);
  };

  return (
    <div>
      <section>
        <h1>Simple Counter</h1>
      </section>

      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
