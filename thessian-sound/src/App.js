import React, { Component} from 'react';
import Welcome from './Welcome.js'
import './App.css';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import CartContainer from './CartContainer.js';
import SongsContainer from './SongsContainer';
import {Switch, Route} from 'react-router-dom';
import Account from './Account';
import { withAuthenticator } from 'aws-amplify-react';
import { useState, useRef, useEffect } from 'react';
import chair from './chair.jpg';
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports.js';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import BeatStore from './BeatStore.js';

Amplify.configure(awsconfig);


function handleAccount() {
 // e.preventDefault()

  alert("hi");
}


class App extends Component{

  constructor(props) {
        super(props);
        this.state = {
            signedUp : false
        }
        this.handleSignup = this.handleSignup.bind(this);
    }

    handleSignup() {
        this.setState({
            signedUp: true
        });
    }

  state = {
    fileUrl: '',
    songs: [],
    cart: [],
    term: ""
  }
  
  componentDidMount(){

     Storage.get('Capture.Shaq1.PNG')
    .then(data => console.log(data))
    .catch(err => console.log(err)); 

  } 

    /* Storage.get('image-reference.png')
    .then(data => (
      this.setState({
        fileUrl: data
      })
    ))
    .catch(err => {
      console.log(err)
    })  
  } */

  /* Storage.get('image-reference.png', { level: 'protected'})
    .then(data => console.log(data))
    .catch(err => console.log(err)); 

  } */
  
  addToCart = (id) => {
    let song = this.state.songs.find(song => song.id === id)
    this.setState(prevState => {
      return ({cart: [...prevState.cart, song]})
    }, () => console.log(this.state))
  }

  addToSongs = (song) => {
    this.setState(prevState => {
      return ({songs: [...prevState.songs, song]})
    })
  }
 
  

  render () {
   // const { signedUp } = this.state;
    return (    
      <div className="App">  
      <NavBar changeView={this.changeView} />
      <Switch>
      <Route exact path="/home"component={() => <Welcome />}/>
        <Route exact path="/songs" component={() => <SongsContainer addToCart={this.addToCart} cart={this.state.cart} songs={this.state.songs} />} />
        <Route exact path='/account' component={() => <Account />} />
        <Route exact path='/beatstore' component={() => <BeatStore />} />
        <Route exact path='/cart' component={() => <CartContainer cart={this.state.cart}/>}/>
        </Switch>
      <Footer />
    </div>
  );
}
}

export default withAuthenticator(App);