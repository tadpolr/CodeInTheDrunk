import React from 'react';
import HomeView from './Home';
import { db } from '../../firebase';

const Home = ({ history }) => {
  const onStartGame = () => {
    function randomID(length) {
      var text = '';
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }
    const newID = randomID(4);
    db.ref('rooms').on('value', snapshot => {
      let rooms = snapshot.val();
      if (!rooms) {
        rooms = 0;
      } else {
        rooms[newID] = {
          isActive: false,
          players: 0,
        };
      }
      return db.ref('rooms').update(rooms);
    });
    history.push(`/join-me/${newID}`);
  };
  return <HomeView onStartGame={onStartGame} />;
};

export default Home;
