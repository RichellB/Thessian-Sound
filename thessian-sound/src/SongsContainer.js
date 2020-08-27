import React from 'react'
import Song from './Song'
import {fetchSongs} from './songActions'
import {connect} from 'react-redux'

class SongsContainer extends React.Component{

  componentDidMount(){

    console.log("component did mount")
    // call an action that fetches all songs & stores them in state
    this.props.fetchSongs()  

    console.log("component finished action calls")
  }

 /* isInCart(id) {
    return this.props.cart.find(song => song.id === id) ? true : false
  }*/

  render(){
    return(
      <div id="songs-container">

    {this.props.songs.map((song) => <Song key={song.id} song={song} addToCart={this.props.addToCart}/>) /*isInCart={this.isInCart(song.id)}/>) */}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
      songs: state.songReducer.songs,
     // loading: state.songReducer.loading
  }
}

export default connect(mapStateToProps, {fetchSongs})(SongsContainer)