/* eslint-disable */
import React, { Component } from 'react';
import './App.css';
import openSocket from 'socket.io-client';

class App extends Component {
  render() {
    const socket = openSocket.connect('http://localhost:8080');
    socket.on('news', function (data) {
      console.log(data);
      socket.emit('my other event', { my: 'data' });
    });
    return (
      <div>SUPPPPPP</div>
    );
  }
}

export default App;
