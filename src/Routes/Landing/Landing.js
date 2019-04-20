import React, { useState, useEffect } from 'react';
import Bglanding from '../../Components/Bglanding';
import Head from '../../Components/Head';
import CompleteModal from '../../Components/CompleteModal';
import PlayerRow from './PlayerRow';

const Landing = ({ players, onComplete }) => {
  const [isCompleted, setCompleted] = useState(false);
  const [completedName, setCompletedName] = useState('');

  useEffect(() => {
    players.forEach(({ progress = 0, name }) => {
      if (progress >= 100) {
        setCompleted(true);
        setCompletedName(name);
        onComplete();
      }
    });
  }, [players]);
  return (
    <div>
      <Bglanding style={{ paddingTop: '48px' }}>
        <Head style={{ marginBottom: '32px' }}>Code In The Drunk</Head>
        {Array.isArray(players) &&
          players.length > 0 &&
          players.map((player, index) => {
            const { name = `player-${index + 1}`, progress, shots } = player || {};
            return <PlayerRow key={index} progress={progress} name={name} shots={shots} />;
          })}
      </Bglanding>
      <CompleteModal open={isCompleted} name={completedName} />
    </div>
  );
};

export default Landing;
