import React, { Component } from 'react'
import FrogBackground from './common/frogbackground.js'
import Header from './common/header.js'
import Intro from './common/intro.js'
import Footer from './common/footer.js'
import LoadingModal from './common/loadingModal.js'
// import './css/page.min.css'
import './css/style.css'

class App extends Component {
  constructor() {
    super();
    // Create an empty initial state;
    this.state = {
      loading: true,
    }
  }


  // componentDidMount() {
  //   this.setState({
  //     loading: true
  //   }).then(() => {
  //     setTimeout(() => {
  //       this.setState({
  //         loading: false
  //       })
  //     }, 1000)
  //   })
  // }

  loadHandler = (s) => {
    this.setState({
      loading: s
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.loading === true ?
          <LoadingModal />
          : null}
        <FrogBackground />
        <Header />
        <Intro />
        <Footer />
      </div>
    );
  }
}

export default App;
