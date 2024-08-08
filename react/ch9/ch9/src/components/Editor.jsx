import "./Editor.css";
import { useRef, useState } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef();

  // content 수정  이벤트 핸들러
  const onChangeContent = (e) => {
    setContent(e.target.vlaue);
  };

  // "추가" 버튼에 대한 이벤트 핸들러
  const onSubmit = () => {
    // 빈 문자열 체크, 빈 문자열이면 content input tag에 포커싱
    if (content === "") {
      inputRef.current.focus();
      // 함수 종료
      return;
    }

    onCreate(content);
    setContent("");
  };

  // 엔터키 입력시, 저장되도록 이벤트 핸들러
  // key down event handler

  const onKeyDown = (e) => {
    // enter key에 대한 코드확인
    if (e.keyCode === 13) onSubmit();
  };

  return (
    <div className="Editor">
      <input
        ref={inputRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
