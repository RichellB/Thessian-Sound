import React from 'react'

class Song extends React.Component{

  shouldComponentUpdate(nextProps, nextState){
    console.log("Checking if component should update");
    return nextProps.isInCart !== this.props.isInCart ? true : false
  }

  componentDidUpdate(){
    console.log("UPDATED!")
  }

  

  render(){
    return(
      <div className="song" id={this.props.song.title + "-song"}>
        <h3>{this.props.song.title}</h3>
        <h3>Title: {this.props.song.title}</h3>
        <br/>
        Price: {this.props.song.price}
        <br/>
        {!this.props.isInCart && <button onClick={(e) => this.props.addToCart(this.props.song.id)}>Add To Cart</button>}
      </div>
    )
  }

}
export default Song;