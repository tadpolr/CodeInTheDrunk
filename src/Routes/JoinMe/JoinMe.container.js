import React, { Component } from 'react';
import JoinMeView from './JoinMe';

import { db, subscribeRoomData } from '../../firebase';

class JoinMe extends Component {
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
    db.ref(`rooms/${roomId}`).off();
    this.props.history.push(`/landing/${roomId}`);
  };
  render() {
    const { roomId } = this.props.match.params;
    const { players } = this.state;
    if (!players) {
      return null;
    }
    return <JoinMeView onClick={this.handleClick} players={players} roomId={roomId} />;
  }
}

export default JoinMe;
