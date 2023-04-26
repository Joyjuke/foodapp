//1
// import styles from "./CSSModule.module.scss";

// const CSSModule = () => {
//   return (
//     <div className={`${styles.wrapper} ${styles.inverted}`}>
//       안녕하세요, 저는 <span className="something">CSS Module!</span>
//     </div>
//   );
// };

// export default CSSModule;

//2 classnames 라이브러리 사용시
//CSS Module을 사용할 때 클래스를 여러개 설정하거나 , 조건부로 클래스를 설정할 때 classnames의 bind를 사용하면 편리하게 작성
import React from 'react';
import styles from './CSSModule.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles); //미리 styles에서 클래스를 받아오도록 설정

const CSSModule = () => {
  return (
    <div className={cx('wrapper', 'inverted')}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
