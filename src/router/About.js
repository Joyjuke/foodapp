//1
import React from 'react';
const About = () => {
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터 기초 실습</p>
    </div>
  );
};

export default About;

//2
// import React from 'react';
// import qs from 'qs';
// //query문자열을 객체로 변환

// const About = ({ location }) => {
//   console.log(window.location);
//   const query = qs.parse(location.search, {
//     ignoreQueryPrefix: true, //이 설정을 통해 문자열 맨 앞의 ?를 생략
//   });
//   console.log(query);
//   const showDetail = query.detail === 'true'; //쿼리의 파싱 결과값은 문자열
//   return (
//     <div>
//       <h1>Introduction</h1>
//       <p>This project is an exercise sample to practice React Router Basics.</p>
//       {showDetail && <p>detail값을 true로 설정하셨군요!</p>}
//     </div>
//   );
// };

// export default About;
