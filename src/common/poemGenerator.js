import React, { Component } from 'react';
import '../css/poem.css';
import axios from 'axios';
import Swal from 'sweetalert2';

class PoemGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poems5Syb: [],
      poems7Syb: [],
      poemBGs: []
    }
  }

  loader = (r) => {
    this.props.loader(r)
  }

  warningFire = (warning) => {
    Swal.fire({
      title: 'Oops!',
      text: warning,
      type: 'error',
      confirmButtonText: 'Okay'
    })
  }

  componentDidMount() {
    this.loader(true)
    axios({
      url: '../js/haikuData.json',
      method: `GET`,
      dataType: `json`
    }).then(response=>{
      this.setState({ 
        poems5Syb: response.data.fiveSyb,
        poems7Syb: response.data.sevenSyb,
        poemBGs: response.data.background
      })
      // this.props.bg.forEach((bg) => { // preload webms to avoid those nasty cache errors
      //   const img = new Image()
      //   img.src = `../assets/webm/${bg.fileName}`
      // });
    }).catch(error => {  // If nothing matched, something went wrong on your end!
      console.log(error)
      this.warningFire(`Something went wrong on our end! Please wait a moment, and try your search again!`)
    }).finally(()=>{
      this.loader(false)
    })
  }

  render() {
    return (
      <div className="poemBox">
        <p>sup</p>
      </div>
    )
  }
}

export default PoemGenerator