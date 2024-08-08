import { useEffect } from "react";

/**
 * 컴포넌트의 용도는 UnMount 단계를 확인하는 목적
 * => useEffect() 를 UnMount 단계에 실행이 되도록 구현이 필요
 */

const Even = () => {
  // useEffect() 의 실행은 Mount  단계에서 실행
  // useEffect() 의 종료는 UnMOunt 단계에서 실행
  useEffect(() => {
    // clean function : useEffect 에서의 반환된는 함수

    // useEffect() 종료의 의미
    // => unmount 단계를 확인하기 위함
    return () => {
      console.log("UnMount");
    };
  }, []);

  return <div>짝수</div>;
};

export default Even;
