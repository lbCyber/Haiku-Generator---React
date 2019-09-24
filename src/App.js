import React, { Component } from 'react'
import FrogBackground from './common/frogbackground.js'
import Header from './common/header.js'
import Intro from './common/intro.js'
import Footer from './common/footer.js'
import LoadingModal from './common/loadingModal.js'
import PoemGenerator from './common/poemGenerator.js'
// import './css/page.min.css'
import './css/style.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      generateGo: false
    }
  }

  makeGenerate = (s) => {
    this.setState({ generateGo: s })
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
      <React.Fragment>
        {this.state.loading ?
          <LoadingModal />
          : null}
        <FrogBackground />
        <Header />
        {this.state.generateGo ? <PoemGenerator loader={this.loadHandler} />
          : <Intro makeGenerate={this.makeGenerate} />
        }
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
