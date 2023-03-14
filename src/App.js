import { Global } from '@emotion/react';
import globalStyles from './Styles/global';

function App() {
  // get요청 예시
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const res = await IssuesAPI.getData('angular', 'angular-cli', {
  //         sort: 'comments',
  //       });
  //       console.log(res);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   getData();
  // });
  return (
    <>
      <Global styles={globalStyles} />
      <div>:)</div>
    </>
  );
}

export default App;
