function Body(props) {
  const { name, location, favorList } = props;
  console.log(name, location, favorList);
  return (
    <div className="body">
      {name}은 {location} 에 있고 좋아하는 음식은 {favorList} 이다 .<br></br>
      좋아하는 음식의 종류는 {favorList.length}개 입니다
    </div>
  );
}

Body.defaultprops = {
  favorList: [],
};

// function Body({ children }) {
//   console.log(children);
//   return <div className="body">{children}</div>;
// }

export default Body;
