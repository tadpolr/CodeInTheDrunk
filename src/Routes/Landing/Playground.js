import React from 'react';
import Car from '../../Components/Beer';
import Road from '../../Components/Road';
import Roadtask from '../../Components/Roadtask';
import Bg from '../../Components/Bg';
import PlayerRow from '../../Components/PlayerRow';

const LandingPlayground = () => {
  return (
    <div>
      
          {/* User A */}
           <PlayerRow>
            <Car progress={'40'}>
              <span>User A</span>
              <img style={{width:'80px'}} src="/images/beer.png" alt="My test image" />
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
          {/* UserB */}
          <PlayerRow>
            <Car progress={'80'}>
              <span>User B</span>
              <img style={{width:'80px'}} src="/images/beer.png" alt="My test image" />
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
          {/* User C */}
          <PlayerRow>
            <Car progress={'20'}>
              <span>User C</span>
              <img style={{width:'80px'}} src="/images/beer.png" alt="My test image" />
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
          {/* User D */}
          <PlayerRow>
            <Car progress={'60'}>
              <span>User D</span>
              <img style={{width:'80px'}} src="/images/beer.png" alt="My test image" />
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
          {/* User E */}
          <PlayerRow>
            <Car progress={'0'}>
              <span>User E</span>
              <img style={{width:'80px'}} src="/images/beer.png" alt="My test image" />
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
     
    </div>
  );
};

export default LandingPlayground;
