import styled from '@emotion/styled';
import { FlexColumnCSS, HoverCSS } from '../../Styles/common';

function MainPage() {
  return (
    <S.Wrapper>
      <S.Title>안녕하세요, 이슈를 보넷입니다 :)</S.Title>
      <S.SubTitle>원하는 레포지토리의 이슈를 조회해 보세요 !</S.SubTitle>
      <S.Title>How to ?</S.Title>
      <S.SubTitle>
        레포지토리의 url 주소를 상단 검색창에 붙여넣으면 됩니다 !
      </S.SubTitle>
      <img src="example.png" alt="" />
      <a target="_blank" href="https://github.com/" rel="noreferrer">
        <S.Image src="cat.png" alt="" width={200} />
      </a>
      <div>옥토캣을 클릭하면 깃허브 홈페이지가 열립니다 !</div>
    </S.Wrapper>
  );
}
export default MainPage;

const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  ${FlexColumnCSS}
  align-items: center;
  margin-top: 40px;
  height: 90vh;
`;
const Image = styled.img`
  ${HoverCSS}
  margin-top: 30px;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 18px;
`;
const SubTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  color: var(--color-dark-blue);
  margin-bottom: 40px;
`;

const S = { Wrapper, Image, Title, SubTitle };
