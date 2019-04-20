import React from 'react';
import Car from '../../Components/Beer';
import Road from '../../Components/Road';
import Roadtask from '../../Components/Roadtask';

const PlayerRow = ({ progress }) => {
  return (
    <PlayerRow>
      <Car progress={progress}>
        <span>User B</span>
        <img style={{ width: '80px' }} src="/images/beer.png" alt="beer" />
      </Car>
      <Road>
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
      </Road>
    </PlayerRow>
  );
};

export default PlayerRow;
