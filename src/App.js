import React from 'react'
import FrogBackground from './common/frogbackground.js'
import Header from './common/header.js'
import Intro from './common/intro.js'
import Footer from './common/footer.js'
// import './css/page.min.css'
import './css/style.min.css'

function App() {
  return (
    <div className="App">
      <FrogBackground/>
      <Header />
      <Intro />
      <Footer />
    </div>
  );
}

export default App;
