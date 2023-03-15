/** @jsxImportSource @emotion/react */
import { S } from './style';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { css } from '@emotion/react';

function PerPageBox() {
  const [choice, setChoice] = useState('');
  const navigate = useNavigate();
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const { owner, repository, sort, per_page } = useParams();
  const onOpenFilter = () => setIsOpenFilter((prev) => !prev);

  const onClickSortFilter = (filter) => {
    navigate(`/${owner}/${repository}/1/${sort}/${filter}`);
  };

  useEffect(() => {
    setIsOpenFilter(false);
    console.log(per_page);
    if (per_page === '10') setChoice('10개씩');
    if (per_page === '20') setChoice('20개씩');
    if (per_page === '50') setChoice('50개씩');
  }, [per_page, sort]);

  return (
    <>
      <S.Wrapper onClick={onOpenFilter}>
        <S.Text>{choice}</S.Text>
        <S.IconBox>
          <MdOutlineKeyboardArrowDown size={20} />
        </S.IconBox>
      </S.Wrapper>
      <S.FilterSpreadBox
        state={isOpenFilter}
        css={css`
          left: 33%;
          margin-left: -7px;
          @media screen and (max-width: 1300px) {
            left: 36%;
          }
          @media screen and (max-width: 945px) {
            left: 38%;
          }
          @media screen and (max-width: 700px) {
            left: 43%;
          }
        `}
      >
        <S.Text
          state={per_page === '10'}
          onClick={() => onClickSortFilter('10')}
        >
          10개씩
        </S.Text>
        <S.Text
          state={per_page === '20'}
          onClick={() => onClickSortFilter('20')}
        >
          20개씩
        </S.Text>
        <S.Text
          state={per_page === '50'}
          onClick={() => onClickSortFilter('50')}
        >
          50개씩
        </S.Text>
      </S.FilterSpreadBox>
    </>
  );
}
export default PerPageBox;
