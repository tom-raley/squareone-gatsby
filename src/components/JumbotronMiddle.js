import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Img from 'gatsby-image'

class JumbotronMiddle extends Component {
  componentDidMount() {
    if (!window.doBuild) {
      this.preloadWidgetScript();
    } else {
      window.doBuild();
    }
  }

  preloadWidgetScript = () => {
    const script = document.createElement('script');
    script.async = true;
    script.dataset.pinBuild = 'doBuild';
    script.src = '//assets.pinterest.com/js/pinit.js';
    document.body.appendChild(script);
  }

  render() {
    const diagonalLogo = this.props.diagonalLogo.childImageSharp.fluid
    return (
      <Jumbotron fluid className="jumbotron-middle" id="about">
        <h1 className="display-4">ABOUT <span className="square-one-teal">US</span></h1>
        <div className="about-text">
          <div data-aos="fade-right" data-aos-duration="2000" className="about-img">
            <Img className="diagonal-logo img-fluid" fluid={diagonalLogo} alt="diagonal logo" id="diagonal-logo" />
          </div>
          <div id="pinterest-button">
            <a data-pin-do="buttonPin" style={{width: '49.5px !important'}} href="https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.squareonemission.com&media=https%3A%2F%2Fsquareonemission.com%2Fresources%2Fimages%2Fdiagonal-logo.jpg&description=Reusable%20Eco-Friendly%20Sandwich%20%26%20Snack%20Bags"></a>
          </div>
          <div data-aos="fade-left" data-aos-duration="2000" className="desktop-mission">
            <p>We design one-of-a-kind, sustainable products. <br/><br/> Simplicity, safety and superior durability are featured in high quality materials and craftsmanship. <br /><br/>"U are one" that will make a difference today. Join us on our mission to reuse.<br /><br />Meet us at Square One.</p>
          </div>
        </div>
      </ Jumbotron>
    )
  }
}

export default JumbotronMiddle