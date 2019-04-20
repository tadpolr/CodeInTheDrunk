import React from 'react';
import Car from '../../Components/Car';
import Road from '../../Components/Road';
import Roadtask from '../../Components/Roadtask';


const LandingPlayground = () => {
  return <div>
     <Car progress={'40'}>
        User A
        <img src="/images/carBlue.png" alt="My test image"></img>
     </Car>
     <Road>
        Road
        <Roadtask> Task 1 </Roadtask>
        <Roadtask> Task 2 </Roadtask>
        <Roadtask> Task 3 </Roadtask>
        <Roadtask> Task 4 </Roadtask>
        <Roadtask> Task 5 </Roadtask>
     </Road>
  </div>;
};

export default LandingPlayground;
