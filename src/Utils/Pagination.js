import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { FlexCenterCSS, HoverCSS } from '../Styles/common';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';

function Pagination({ totalPage, limit, page, setPage }) {
  const [currentPageArray, setCurrentPageArray] = useState([]);
  const [totalPageArray, setTotalPageArray] = useState([]);

  const moveToTop = () => window.scrollTo({ top: 0, behavior: 'auto' });

  const sliceArrayByLimit = (total, lim) => {
    const pageList = [];
    for (let i = 0; i < total; i++) pageList.push(i);

    const slicedArray = [];
    for (let i = 0; i < pageList.length; i += lim) {
      slicedArray.push(pageList.slice(i, i + lim));
    }
    return slicedArray;
  };

  useEffect(() => {
    if (page % limit === 1) {
      setCurrentPageArray(totalPageArray[Math.floor(page / limit)]);
    } else if (page % limit === 0) {
      setCurrentPageArray(totalPageArray[Math.floor(page / limit) - 1]);
    }
  }, [page]);

  useEffect(() => {
    const slicedPageArray = sliceArrayByLimit(totalPage, limit);
    setTotalPageArray(slicedPageArray);
    setCurrentPageArray(slicedPageArray[0]);
  }, [totalPage]);

  return (
    <S.Wrapper>
      <S.NextButton onClick={() => setPage(1)} disabled={page === 1}>
        <MdKeyboardDoubleArrowLeft size={30} />
      </S.NextButton>
      <S.NextButton onClick={() => setPage(page - 1)} disabled={page === 1}>
        <MdKeyboardArrowLeft size={30} />
      </S.NextButton>
      <S.ButtonsContainer>
        {currentPageArray.map((i) => (
          <S.Button
            key={i + 1}
            state={page === i + 1}
            onClick={() => {
              setPage(i + 1);
              moveToTop();
            }}
          >
            {i + 1}
          </S.Button>
        ))}
      </S.ButtonsContainer>
      <S.NextButton
        onClick={() => setPage(page + 1)}
        disabled={page === totalPage}
      >
        <MdKeyboardArrowRight size={30} />
      </S.NextButton>
      <S.NextButton
        onClick={() => setPage(totalPage)}
        disabled={page === totalPage}
      >
        <MdKeyboardDoubleArrowRight size={30} />
      </S.NextButton>
    </S.Wrapper>
  );
}
export default Pagination;

const Wrapper = styled.div`
  width: 70%;
  margin: 50px auto;
  ${FlexCenterCSS}
`;
const IconBox = styled.button``;

const ButtonsContainer = styled.div`
  width: 80%;
  ${FlexCenterCSS}
  margin: 0 15px;
`;
const Button = styled.button`
  background-color: var(--color-pink);
  min-width: 9%;
  height: 40px;
  border-radius: 5px;
  margin: 0 3px;
  opacity: ${({ state }) => (state ? '1' : '0.5')};
  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;
const NextButton = styled.button`
  height: fit-content;
  border-radius: 5px;
  ${HoverCSS}
`;

const S = { Wrapper, IconBox, ButtonsContainer, Button, NextButton };
