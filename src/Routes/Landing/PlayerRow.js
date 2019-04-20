import React from 'react';
import Beer from '../../Components/Beer';
import Road from '../../Components/Road';
import Roadtask from '../../Components/Roadtask';
import PlayerRowContainer from '../../Components/PlayerRow';

const Beers = ({ progress, shots, name }) => {
  let shotsArr = ['0'];
  if (Number.isInteger(shots) && shots > 0) {
    for (let i = 1; i < shots; i++) {
      shotsArr.push(i.toString());
    }
  }
  return (
    <Beer progress={progress >= 100 ? 80 : progress}>
      <div style={{ whiteSpace: 'nowrap' }}>{name}</div>
      {shotsArr.map((s, index) => {
        return (
          <img
            key={index}
            style={{ width: '80px', position: 'absolute', left: `${index * 12}px`, bottom: 0 }}
            src="/images/beer.png"
            alt="beer"
          />
        );
      })}
    </Beer>
  );
};

const PlayerRow = ({ name, progress, shots }) => {
  return (
    <PlayerRowContainer>
      <Road style={{ position: 'relative' }}>
        <Beers progress={progress} shots={shots} name={name} />
        <div style={{ display: 'flex', width: '100%' }}>
          <Roadtask>
            <span>Task 1</span>
          </Roadtask>
          <Roadtask>
            <span>Task 2</span>
          </Roadtask>
          <Roadtask>
            <span>Task 3</span>
          </Roadtask>
          <Roadtask>
            <span>Task 4</span>
          </Roadtask>
          <Roadtask>
            <span>Task 5</span>
          </Roadtask>
        </div>
      </Road>
    </PlayerRowContainer>
  );
};

export default PlayerRow;
