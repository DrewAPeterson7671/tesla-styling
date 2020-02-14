import React from 'react';
import './App.css';
import Nav from './Nav';
import Careers from './Careers';
import { Switch, Route } from 'react-router-dom';
import AboutUs from './AboutUs';

function App() {
  const vidStyle = {
    position: 'fixed',
    top: '0',
    zIndex: '-13',
    width: '100%'
  };
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <div style={vidStyle}>
        <video  poster="/tesla_theme/assets/img/careers/hero-video-poster.jpg?20170710" width='100%' autoPlay={true} muted="" loop={true}>
          <source src="https://www.tesla.com/ns_videos/careers-video-071017.webm" type="video/webm" media="(min-width: 640px)"/>
          <source src="https://www.tesla.com/ns_videos/careers-video-071017.mp4" type="video/mp4;codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" media="(min-width: 640px)"/>
          <source src="https://www.tesla.com/ns_videos/careers-video-071017.mp4" type="video/ogv" media="(min-width: 640px)"/>
        </video>
      </div>
      <Switch>
        <Route exact path='/' component={Careers} />
        <Route path='/about-us' component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App;
