import { useEffect } from 'react';
import { IssuesAPI } from './Apis/issues';

function App() {
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await IssuesAPI.getData({ sort: 'comments' });
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  });
  return <div>:)</div>;
}

export default App;
