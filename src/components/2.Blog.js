// //////////blog 1
// import React from 'react';
// import './App.css';

// function App() {
//   let posts = '초록색 구두';

//   return (
//     <div className="App">
//       <div className="black-nav">
//         <div style={{ color: 'blue', fontSize: '30px' }}>My Blog</div>
//         {/* style은 무조건 중괄호 */}
//       </div>
//       <h4> {posts} </h4>
//     </div>
//   );
// }

// export default App;

// //////////blog 2
// import React from 'react';
// import './App.css';

// function App() {
//   let posts = '초록색 구두';

//   return (
//     <div className="App">
//       <div className="black-nav">
//         <div>My Blog</div>
//       </div>
//       <div className="list">
//         <h3> {posts} </h3>
//         <p>9월 20일 구매</p>
//       </div>
//     </div>
//   );
// }

// export default App;

// ///////////////////////////////3.
// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   let posts = '초록색 구두';

//   //destructuring
//   let [title, setTitle] = useState('알록달록 스커트 구경');

//   return (
//     <div className="App">
//       <div className="black-nav">
//         <div>My Blog</div>
//       </div>
//       <div className="list">
//         <h3> {title} </h3>
//         <p>9월 20일 구매</p>
//       </div>
//     </div>
//   );
// }

// export default App;

//////////////////////////////4.
import React, {useState} from 'react';
import './App.css';

function Blog() {
  let posts = '초록색 구두';

  //destructuring
  let [title, setTitle] = useState([
    '알록달록 스커트 구경',
    '댄디한 가을 니트 둘러보기',
    '나만의 개성 ripped jeans',
    '소녀감성 꽃무늬 헤어밴드',
  ]);

  function onBtnClick0() {
    var newTitle = [...title]; //복사로 새로운 객체 생성
    newTitle[0] = '핫한 개성 살리기 프로젝트';
    setTitle(title === newTitle ? title : newTitle[0]);
  }
  function onBtnClick1() {
    var newTitle = [...title]; //복사로 새로운 객체 생성
    newTitle[1] = '향긋한 플로랄 라플라플 드레스';
    setTitle(newTitle);
  }
  function onBtnClick2() {
    var newTitle = [...title]; //복사로 새로운 객체 생성
    newTitle[2] = '집콕엔 코지 오버사이즈 트렁크';
    setTitle(newTitle);
  }
  function onBtnClick3() {
    var newTitle = [...title]; //복사로 새로운 객체 생성
    newTitle[3] = '방울방울 패턴으로 세련미 가득';

    setTitle(title !== newTitle);
  }

  let [like, setLike] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>My Blog</div>
      </div>
      <button onClick={onBtnClick0}>버튼</button>
      <div className="list">
        <h3>
          {title[0]}

          <span className="span" onClick={() => setLike(like + 1)}>
            ❤
          </span>
          {like}
        </h3>
        <p>9월 20일 구매</p>
      </div>
      <button onClick={onBtnClick1}>버튼</button>
      <div className="list">
        <h3> {title[1]} </h3>
        <p>9월 20일 구매</p>
      </div>
      <button onClick={onBtnClick2}>버튼</button>
      <div className="list">
        <h3> {title[2]} </h3>
        <p>9월 20일 구매</p>
      </div>
      <button onClick={onBtnClick3}>버튼</button>
      <div className="list">
        <h3> {title[3]} </h3>
        <p>9월 20일 구매</p>
      </div>
      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <h2>날짜</h2>
      <h2>상세내용</h2>
    </div>
  );
}

export default Blog;
