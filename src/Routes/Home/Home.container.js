import React from 'react';
import HomeView from './Home';
import { db } from '../../firebase';

const Home = props => {
  const onStartGame = () => {
    const { history } = props || {};
    db.ref('rooms').on('value', snapshot => {
      console.log(snapshot);
    });
    history.push('/join-me/room');
  };
  return <HomeView onStartGame={onStartGame} />;
};

export default Home;
