import React, { useState, useEffect } from 'react';
import LandingView from './Landing';
import { subscribeRoomData } from '../../firebase';

const Landing = ({ match }) => {
  const roomId = match.params.roomId;
  const [players, setPlayers] = useState(null);

  //   useEffect(() => {
  //     subscribeRoomData(roomId, snapshot => {
  //       const { players } = snapshot.val() || {};
  //       const playersArr = Object.keys(players).map(player => {
  //         return players[player];
  //       });
  //       setPlayers(playersArr);
  //     });
  //   }, []);
  return <LandingView players={players} />;
};

export default Landing;
