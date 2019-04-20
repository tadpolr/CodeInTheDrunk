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
        <div>
          <Head>Code In The Drunk</Head>
          <Link>
            <p>
              join us at: <span style={{ marginLeft: '16px', fontSize: '36px' }}>{roomId}</span>
            </p>
          </Link>

          {Array.isArray(players) && players.length > 0 && (
            <div style={{ marginBottom: '24px' }}>
              <div style={{ color: 'yellow', marginBottom: '8px', fontSize: '20px' }}>players:</div>
              <Name style={{ width: 'fit-content' }}>
                {players.map((player, index) => {
                  const { name = `player-${index + 1}` } = player || {};
                  return <p key={index}>{name.toUpperCase()}</p>;
                })}
              </Name>
            </div>
          )}

          <Button onClick={onClick} style={{ marginLeft: 0 }}>
            start game!
          </Button>
        </div>
      </Bg>
    </div>
  );
};

export default JoinMe;
