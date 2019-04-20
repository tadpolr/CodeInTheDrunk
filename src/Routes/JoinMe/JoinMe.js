import React from 'react';
import Link from '../../Components/Link';
import Name from '../../Components/Name';
import Button from '../../Components/Button';
import Head from '../../Components/Head';
import Bg from '../../Components/Bg';

const JoinMe = ({ onClick, players, roomId }) => {
  return (
    <div>
      <Bg>
        <Head>Code In The Drunk</Head>
        <Button onClick={onClick}>game start!</Button>
        <Link>
          <p>code to join: {roomId}</p>
        </Link>
        <Name>
          {Array.isArray(players) &&
            players.length > 0 &&
            players.map((player, index) => {
              const { name = `player-${index + 1}` } = player || {};
              return <p key={index}>{name.toUpperCase()}</p>;
            })}
        </Name>
      </Bg>
    </div>
  );
};

export default JoinMe;
