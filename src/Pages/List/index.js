import styled from '@emotion/styled';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IssuesAPI } from '../../Apis/issues';
import { searchActions } from '../../Stores/search';
import { FlexAlignCSS } from '../../Styles/common';
import IssueCard from './Components/Box';
import PerPageBox from './Components/PerPage';
import SortBox from './Components/Sort';

function ListPage() {
  const [issues, setIssues] = useState([]);
  const { owner, repository, page, sort, per_page } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      searchActions.editSearchText(`https://github.com/${owner}/${repository}`)
    );
  }, []);

  const getData = useCallback(async () => {
    try {
      const { data } = await IssuesAPI.getData(owner, repository, {
        page,
        sort,
        per_page,
      });
      setIssues(data);
    } catch (err) {
      console.log(err);
    }
  }, [page, sort, per_page]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
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
