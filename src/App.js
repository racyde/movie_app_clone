import React from "react";
import PropTypes from "prop-types"; // prop-types를 사용하기 위해 import


const foodILike = [ // 일종의 더미데이터용?
  {
    id: 1,
    name: "Kimchi",
    image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "bulgogi",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2016/12/30/df939769792632a48a0eba8bc895e8601.jpg",
    rating: 4.8
  },
  {
    id: 3,
    name: "kimbap",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg",
    rating: 3.5
  },
  {
    id: 4,
    name: "samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
    rating: 4.6
  }
];
  

function Food({name, picture, rating}) {  // (인자) 이런식으로 쓸 수도 있지만 { name } 이런식으로 쓰면 인자.name 할 필요없이 name 으로 값을 가져올 수 있음
  // console.log(name)         // 인자가 2개 이상인 경우 , 로 구분해서 나열해 쓰면 된다
  return (
    <div>
    <h2>I like {name}</h2>  {/* props 명이 name인 것의 값인 {eachFood.name} 을 가져온 것*/}
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/> {/*props 명이 picture 인 것의 값인 {eachFood.image} 을 가져온 것 */}
  </div>
  )
}

Food.propTypes= { // prop-types를 사용하기 위한 설정 반드시 "컴포넌트.propTypes" 의 이름으로 써야한다 -> props 검사 용도
  name: PropTypes.string.isRequired,  // string 타입의 name값이 필요(만족?)되는가?(isRequired)
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired   //string타입의 rating값이 요구되는가? -> number이므로 콘솔에 경고해줌 -> number로 바꿔주자\
  // isRequired 같은 건 옵션이라보면 된다
  //prop-types는 이외에도 여러 응용이 가능(찾아보기)
}


function App() {
  return (
    <div className="App">
      
      {foodILike.map(eachFood => {  //부모 컴포넌트인 App 에서 자식 컴포넌트인 Food에 props를 전달
        return <Food key={eachFood.id} name={eachFood.name} picture={eachFood.image} rating={eachFood.rating} /> //동적으로 작동하도록 map 메서드를 사용
        // Food에 name, picture 라는 props를 전달하기 위한 구문
        // 리액트 내의 모든 element는 유일해야 한다(unique -> key 설정이 필요하다는 뜻)
        // -> key props는 전달되지 않는다. 리액트 내부에서 사용하기 위한 것
        // 그런데 부모 컴포넌트로부터 전달받은 props가 우리가 원하는 props인지 어떻게 점검할까?
        // prop-types 이라는 패키지를 설치: 내가 전달받은 props가 내가 원하는 props인지를 확인해 줌
        // npm i prop-types   여기서 i는 install의 축약어
        // 우리가 사람이다 보니 코딩할때 실수할 수 있다 -> props를 잘못 설정하거나 다른 파일을 넣는등
        // -> prop-types는 이런것을 우리에게 알려준다




      })}
    </div>
  );
}

export default App;
