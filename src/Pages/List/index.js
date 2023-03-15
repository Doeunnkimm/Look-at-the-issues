import styled from '@emotion/styled';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IssuesAPI } from '../../Apis/issues';
import { searchActions } from '../../Stores/search';
import IssueCard from './Card/Card';

function ListPage() {
  const [issues, setIssues] = useState([]);
  const { owner, repository, page, sort, perPage } = useParams();
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
        perPage,
      });
      setIssues(data);
    } catch (err) {
      console.log(err);
    }
  }, [page, sort, perPage]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <S.Wrapper>
      {issues.map((issue) => (
        <IssueCard
          number={`🌎 ${issue.number}`}
          title={issue.title}
          body={
            issue.body
              ? issue.body.split('').slice(0, 99).join('') + ' ...'
              : issue.body
          }
        />
      ))}
    </S.Wrapper>
  );
}
export default ListPage;

const Wrapper = styled.div`
  width: 60%;
  margin: 20px auto;
`;

const S = { Wrapper };
