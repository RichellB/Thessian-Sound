import React from 'react';
import {ProgressBar} from 'react-bootstrap';
import axios from 'axios';
import { withAuthenticator } from 'aws-amplify-react'

class Account extends React.Component {

    state = {
        selectedFile: null,
        uploadPercentage: 0
    }

     fileSelectedHandler = e => {
        this.setState({
            selectedFile: e.target.files[0]
        })
      }

      fileUploader = () => {
          const fd = new FormData();
          fd.append('cover', this.state.selectedFile, this.state.selectedFile.name);
          const options = {
            onUploadProgress: (progressEvent) => {
              const {loaded, total} = progressEvent;
              let percent = Math.floor( (loaded * 100) / total )
              console.log( `${loaded}kb of ${total}kb | ${percent}%` );
      
              if( percent < 100 ){
                this.setState({ uploadPercentage: percent })
              }
            }
          }
          
          axios.post('https://www.mocky.io/v2/5cc8019d300000980a055e76', fd, options).then(res => { 
            console.log(res)
            this.setState({ uploadPercentage: 100 }, ()=>{
              setTimeout(() => {
                this.setState({ uploadPercentage: 0 })
              }, 1000);
            })
        })
      }

    render () {
        const {uploadPercentage} = this.state;
        return(
            <div className="user-library">
            <h1>OVOS USER LIBRARY</h1>
            <input type="file" onChange={this.fileSelectedHandler}/> 
            <button onClick={this.fileUploader}>Upload File</button>     
            { uploadPercentage > 0 && <ProgressBar now={uploadPercentage} active label={`${uploadPercentage}%`} /> }
            </div>
        )
    }
}

export default withAuthenticator(Account);