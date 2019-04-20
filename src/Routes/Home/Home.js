import React from 'react';
import Button from '../../Components/Button';
import Head from '../../Components/Head';
import Bg from '../../Components/Bg';

const Home = ({ onStartGame }) => {
  return (
    <div>
      <Bg>
        <Head>Code In The Drunk</Head>
        <Button onClick={onStartGame}>start now</Button>
      </Bg>
    </div>
  );
};
export default Home;
