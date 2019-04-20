import React, { useState, useEffect } from 'react';
import Button from '../../Components/Button';
import Head from '../../Components/Head';
import Bg from '../../Components/Bg';
import { db } from '../../firebase';
const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    db.collection('rooms')
      .doc('giBj09ZbcvrbYaCdt6xp')
      .onSnapshot(function(doc) {
        console.log(doc.data());
      });
  });
  return <div>
    <Bg>
      <Head>
        Code In The Drunk  
      </Head>
      <Button>
        start now
      </Button>
    </Bg>
  </div>;
}
export default Home