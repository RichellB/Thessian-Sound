import React from 'react';
import ActionCall from './CallToAction';
import cir from './green-foreground.svg';
import cir2 from './blue-blackground.svg';
import cir3 from './red-foreground.svg';
import cir4 from './red-background.svg';
import cir5 from './yellow-foreground.svg';
import cir6 from './yellow-background.svg';
import cir7 from './green-background.svg';
import cir8 from './white-foreground.svg';
import cir9 from './white-background.svg';
import SecCir from './blue-foreground.svg';
import AllServices from './AllServices';

function Welcome(){
    return (
        <div className="welcome">
      <div className="Circles">
      <img src={SecCir} className="App-logos" alt="logo" />
      <img src={cir2} className="App-logos"/>
      <img src={cir3} className="App-logos"/>
      <img src={cir4} className="App-logos"/>
      <img src={cir5} className="App-logos"/>
      <img src={cir6} className="App-logos"/>
      <img src={cir} className="App-logos"/>
      <img src={cir7} className="App-logos"/>
      <img src={cir8} className="App-logos"/>
      <img src={cir9} className="App-logos"/>
      </div>
      <ActionCall />
      <div id="desc">
        The best in online Audio Production
        </div> 
        <AllServices />        
  </div>
    )
}

export default Welcome;