import React, { PureComponent } from 'react';
import Link from '../../Components/Link';
import Button from '../../Components/Button';
import Head from '../../Components/Head';
import Bg from '../../Components/Bg';

const JoinMe = () => {
  return <div>
     <Bg>
      <Head>
        Code In The Drunk  
      </Head>
      <Button>
        game start!
      </Button>
      <Link>
        <p>here is the link</p>
        <p>USER A</p>
        <p>USER B</p>
        <p>USER C</p>
        <p>USER D</p>
      </Link>
    </Bg>
  </div>;
};

export default JoinMe;