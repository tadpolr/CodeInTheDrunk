<<<<<<< HEAD
import React from 'react';
import Button from '../../Components/Button';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> origin/develop

import { db } from '../../firebase';
const Home = () => {
<<<<<<< HEAD
  return <div>Home
     <Button>This is my Button</Button>
  </div>;
=======
  const [count, setCount] = useState(0);

  useEffect(() => {
    db.collection('rooms')
      .doc('giBj09ZbcvrbYaCdt6xp')
      .onSnapshot(function(doc) {
        console.log(doc.data());
      });
  });
  return <div>Home</div>;
>>>>>>> origin/develop
};

export default Home;
