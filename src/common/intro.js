import React from 'react'
import '../css/intro.css'

const Intro = () => {
  return (
    <div className="topContentBox">
      <div className="topContent">
        <h1>online haiku generator</h1>
        <h3>poetry made easy!</h3>
        <div className="frontText">
          <div className="textBody">
            <h5><strong>haiku</strong>, <em>n - hai·​ku | \ ˈhī-(ˌ)kü</em></h5>
            <p>The haiku, or <em>'hokku'</em>, was developed in mid-17th century Japan first as the opening stanza to a larger work. It wouldn't reach prominence in the English-speaking world until the early 20th century, when Japanese-American poets and others advocated its use as art in its distilled form.</p>
            <p>The format has remained relatively unchanged since its inception: The haiku consists of 17 syllables, or <em>'on'</em>. In English these are typically broken up into three lines, following the form of 5-7-5. Thematically, haiku can be used to express a diverse array of ideas and images, but are most often centered around descriptive images of fleeting moments of nature, or of the actions or thoughts of living things.</p>
            <p>This generator is designed to hold true to that ideal. Each line is procedurally generated from an extensive database of pre-written content. Every haiku generated will be unique, from its content to its aesthetics. Find your favourite one and keep it in mind!</p>
          </div>
          <div className="startButton">
            <h3 className="center">just click below to start!</h3>
            <div className="downOne"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro;