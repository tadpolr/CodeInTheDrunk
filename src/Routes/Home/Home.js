import React, { useState, useEffect } from 'react';

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
  return <div>Home</div>;
};

export default Home;
