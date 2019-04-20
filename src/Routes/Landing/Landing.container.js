import React, { Component } from 'react';
import LandingView from './Landing';

import { db, subscribeRoomData } from '../../firebase';

class Landing extends Component {
  state = {
    players: null,
  };
  componentDidMount() {
    const { roomId } = this.props.match.params;
    subscribeRoomData(roomId, snapshot => {
      const { players = {} } = snapshot.val() || {};
      const playersArr = Object.keys(players).map(p => {
        return { name: p, ...players[p] };
      });
      this.setState({
        players: playersArr,
      });
    });
  }
  handleClick = () => {
    const { roomId } = this.props.match.params;
    this.props.history.push(`/landing/${roomId}`);
  };

  handleComplete = () => {
    const { roomId } = this.props.match.params;
    db.ref(`rooms/${roomId}`).off();
  };
  render() {
    const { players } = this.state;
    if (!players) {
      return null;
    }
    return <LandingView players={players} onComplete={this.handleComplete} />;
  }
}

export default Landing;
