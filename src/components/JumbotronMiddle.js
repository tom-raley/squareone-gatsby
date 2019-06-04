import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'

class JumbotronMiddle extends Component {
  componentDidMount() {
    const AOS = require('aos');
    this.aos = AOS
    this.aos.init()
  }

  componentDidUpdate() {
    this.aos.init()
    this.aos.refresh()
  }

  render() {
    const diagonalLogo = require('../dist/images/diagonal-logo.jpg')
    return (
      <Jumbotron fluid className="jumbotron-middle" id="about">
        <h1 className="display-4">ABOUT <span className="square-one-teal">US</span></h1>
        <div className="about-text">
          <div data-aos="fade-right" data-aos-duration="2000" className="about-img">
            <Image className="diagonal-logo" fluid src={diagonalLogo} alt="diagonal logo" />
            
          </div>
          <a data-pin-do="buttonPin" href="https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.squareonemission.com&media=https%3A%2F%2Fsquareonemission.com%2Fresources%2Fimages%2Fdiagonal-logo.jpg&description=Reusable%20Eco-Friendly%20Sandwich%20%26%20Snack%20Bags"></a>
          <div data-aos="fade-left" data-aos-duration="2000" className="desktop-mission">
            <p>We design one-of-a-kind, sustainable products. Simplicity, safety and superior durability are featured in high quality materials and craftsmanship. "U are one" that will make a difference today. Join us on our mission to reuse.<br /><br />Meet us at Square One.</p>
          </div>
        </div>
        <div style={{paddingRight: '4em'}} className="pinterest-button-desktop">
          
        </div>
      </ Jumbotron>
    )
  }
}

export default JumbotronMiddle