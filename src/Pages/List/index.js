import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import styled from '@emotion/styled';
import { FlexAlignCSS } from '../../Styles/common';

import { getIssues } from '../../Stores/issues';
import { searchActions } from '../../Stores/search';

import IssueCard from './Components/Box';
import PerPageBox from './Components/PerPage';
import SortBox from './Components/Sort';

import Pagination from '../../Utils/Pagination';
import Loading from '../../Components/Loading';

const CONST_ITEM_COUNT = 200;
const LIMIT = 10;

function ListPage() {
  const issues = useSelector((store) => store.issue.issues);
  const getIssuesState = useSelector((store) => store.issue.getIssuesState);
  const { owner, repository, page, sort, per_page } = useParams();

  const [goPage, setGoPage] = useState(1);
  const totalPage = Math.ceil(CONST_ITEM_COUNT / per_page);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  console.log(issues);

  useEffect(() => {
    dispatch(
      searchActions.editSearchText(`https://github.com/${owner}/${repository}`)
    );
    setGoPage(+page);
  }, []);

  useEffect(() => {
    navigate(`/${owner}/${repository}/${goPage}/${sort}/${per_page}`);
  }, [goPage]);

  const getData = useCallback(async () => {
    dispatch(
      getIssues({ owner, repository, params: { page, sort, per_page } })
    );
  }, [page, sort, per_page]);

  useEffect(() => {
    if (getIssuesState.loading === true) {
    }
    getData();
  }, [getData]);

  return (
    <>
      {getIssuesState.loading ? (
        <Loading />
      ) : (
        <>
          <S.Wrapper>
            <S.Line>
              <SortBox />
              <PerPageBox />
            </S.Line>
            {issues.map((issue) => (
              <IssueCard
                number={`🌎 ${issue.number}`}
                title={issue.title}
                body={
                  issue.body
                    ? issue.body.split('').slice(0, 99).join('') + ' ...'
                    : issue.body
                }
                commentLen={issue.comments}
                updatedAt={issue.updated_at}
              />
            ))}
          </S.Wrapper>
          <Pagination
            totalPage={totalPage}
            limit={LIMIT}
            page={goPage}
            setPage={setGoPage}
          />
        </>
      )}
    </>
  );
}
export default ListPage;

const Wrapper = styled.div`
  width: 50%;
  margin: 20px auto;
`;
const Line = styled.div`
  ${FlexAlignCSS}
  justify-content: flex-start;
`;

const S = { Wrapper, Line };
