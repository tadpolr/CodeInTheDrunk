import React from 'react';
import HomeView from './Home';
import { db } from '../../firebase';

const onStartGame = () => {
  db.ref('rooms').on('value', snapshot => {
    console.log(snapshot);
  });
};
const Home = props => {
  return <HomeView onStartGame={onStartGame} />;
};

export default Home;
