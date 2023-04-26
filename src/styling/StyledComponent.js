import React from 'react';
import styled, {css} from 'styled-components';

//반응형 - 마지막 작성
const sizes = {
  desktop: 1024,
  tablet: 768,
};

//반응형
//참고: https://www.styled-components.com/docs/advanced#media-templates
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

const Box = styled.div`
  /* props로 넣어 준 값을 직접 전달 해 줄 수 있음 - 일반 classNames를 사용하는 CSS/SAss를 비교했을 때 styled-component의 가장 큰 장점*/
  background: ${(props) => props.color || 'blue'};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  /* 반응형  */
  /* @media (max-width: 1024px){
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  } */
  /* 반응형  */
  ${media.desktop`width: 768px;`}
  ${media.tablet`width:100%;`}
`;

/* 단순 변수의 형태가 아니라 여러 줄의 스타일 구문을 조건부로 설정해야 하는 경우에는 CSS를 불러와야함 */
const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  /* &문자를 사용하여 sass처럼 자기 자신 선택 가능 */
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  /* inverted값이 true일때 특정 스타일을 부여 */
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => (
  <Box color="black">
    <Button>안녕하세요</Button>
    {/* // <Button>테두리만</Button> */}
    <Button inverted={true}>테두리만</Button>
  </Box>
);

export default StyledComponent;
