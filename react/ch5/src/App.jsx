import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Body from "./components/Body";

// function App() {
//   return (
//     <>
//       <Header />
//       <Main />
//       <Footer />
//     </>
//   );
// }

function App() {
  const buttonProps = {
    text: "기타",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      <Button text={"메일"} color={"red"} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <div>자식요소</div>
        <Header />
      </Button>

      <Button {...buttonProps} />
    </>
  );

  // const name = "이정환";

  // return (
  //   <div className="App">
  //     <Header />
  //     <Body name={name} location={"부천시"} />
  //     <Footer />
  //   </div>
  // );
}
// function ChildComp() {
//   return <div>Child component</div>;
// }

// function App() {
// const BodyProps = {
//   name: "이정환",
//   location: "부천",
//   favorList: ["파스타", "빵", "떡볶이"],
// };

// return (
//   <div className="Body">
//     <Header />
//     <Body {...BodyProps} />
//     <Footer />
//   </div>
// );

// return (
//   <div className="App">
//     <Header>
//       <Body>
//         <ChildComp />
//       </Body>
//     </Header>
//   </div>
// );
//}

export default App;
