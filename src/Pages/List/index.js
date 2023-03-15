import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { searchActions } from '../../Stores/search';

function ListPage() {
  const { owner, repository, page, sort, perPage } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      searchActions.editSearchText(`https://github.com/${owner}/${repository}`)
    );
  }, []);

  return (
    <div>
      <p>:D</p>
    </div>
  );
}
export default ListPage;
