import React from 'react';
import Beer from '../../Components/Beer';
import Road from '../../Components/Road';
import Roadtask from '../../Components/Roadtask';
import Bglanding from '../../Components/Bglanding';
import PlayerRow from '../../Components/PlayerRow';
import Head from '../../Components/Head';


const LandingPlayground = () => {
  return (
    <div>
        <Bglanding>
          <Head>Code In The Drunk</Head> 

          {/* User A */}
           <PlayerRow>  
            <Road style={{position: 'relative'}}>
             <Beer progress={'0'}>
              <span>User A</span>
              <img style={{width:'80px'}} src="/images/beer.png" alt="My test image" />
             </Beer>
             <div style={{display: 'flex', width: '100%'}}>
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
          </PlayerRow>
         
          {/* User B */}
          <PlayerRow>  
            <Road style={{position: 'relative'}}>
             <Beer progress={'60'}>
              <span>User B</span>
              <img style={{width:'80px'}} src="/images/beer.png" alt="My test image" />
             </Beer>
             <div style={{display: 'flex', width: '100%'}}>
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
          </PlayerRow>

          </Bglanding>
         
    </div>
  );
};

export default LandingPlayground;
