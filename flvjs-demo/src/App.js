import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class FlvVideo extends Component {
  constructor(props) {
    super(props);    
  }

  componentDidMount() {
    console.log("componentDidMount");

    if (window.flvjs.isSupported()) {
        var videoElement = document.getElementById('videoElement');

        var flvPlayer = window.flvjs.createPlayer({
            type: 'flv',
            url: 'http://localhost:3000/video/flv.d.ts'
        });

        flvPlayer.attachMediaElement(videoElement);
        flvPlayer.load();
        flvPlayer.play();
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <video id="videoElement"></video>
    );
  }
}

class H5Video extends Component {
  render() {
    return (
      <video src={this.props.src} controls="controls" autoplay="autoplay"></video>
    );
  }
}

class VideojsVideo extends Component {
  componentDidMount() {
    console.log("componentDidMount");

    var options = {};

    var player = window.videojs(this.props.id, options);
  }

  render() {
    return (
      <video id={this.props.id}
          className="video-js vjs-fluid"
          controls
          autoPlay
          poster="//192.168.0.88:3000/img/u=1259008651,161387334&fm=27&gp=0.jpg"
          data-setup='{}'>
        <source src={this.props.src} type={this.props.type}></source>
      </video>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>        
        </header>        
        <FlvVideo id="videoElement"/>        
        <H5Video src="http://192.168.0.88:3000/video/阳光电影www.ygdy8.com.二十二.HD.1080p.国语中英双字.mp4" />
        <VideojsVideo id="my-player" src="http://192.168.0.88:3000/video/阳光电影www.ygdy8.net.灵魂摆渡黄泉.HD.720p.国语中字.mp4" type="video/mp4" />                
       <VideojsVideo id="my-player" src="http://192.168.0.88:3000/video/阳光电影www.ygdy8.com.二十二.HD.1080p.国语中英双字.mp4" type="video/mp4" />
        */}                                       
      </div>      
    );
  }
}

export default App;
