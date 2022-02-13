import { useEffect } from 'react';

import { AppWrapper } from './App.style';

import Ballot from './Components/Ballot/Ballot';

import { getBallotData } from './services/ballot'

function App() {
  useEffect(() => {
    getBallotData().then((data) => {
      console.log('//', data)
    }).catch((error) => {
      console.log('//', error)
    })
  }, []);
  // Feel free to remove the contents of the header tag to make more room for your code
  return (
    <AppWrapper>
      <Ballot />
    </AppWrapper>
  );
}

export default App;
