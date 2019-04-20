import React from 'react';
import Link from '../../Components/Link';
import Button from '../../Components/Button';
import Head from '../../Components/Head';
import Bg from '../../Components/Bg';

const JoinMe = ({ onClick, players, roomId }) => {
  console.log(players);
  return (
    <div>
      <Bg>
        <Head>Code In The Drunk</Head>
        <h1 style={{ color: 'white' }}>{roomId}</h1>
        <Button onClick={onClick}>game start!</Button>
        <Link>
          <p>here is the link</p>
          {Array.isArray(players) &&
            players.length > 0 &&
            players.map((player, index) => {
              const { name = `player-${index + 1}` } = player || {};
              return <p key={index}>{name.toUpperCase()}</p>;
            })}
        </Link>
      </Bg>
    </div>
  );
};

export default JoinMe;
