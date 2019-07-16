import React, { Component } from 'react'
import { FaTwitterSquare, FaFacebookSquare, FaInstagram,  FaEnvelope} from 'react-icons/fa'

class Footer extends Component {
  render() {
    const logoTransparent = require('../dist/images/logo-transparent.png')
    return(
      <footer>
        <div className="mobile-footer">
          <div className="mobile-footer-logo">
            <a className="footer-logo" href="#home"><img src={logoTransparent} alt="square one logo" width="166px" height="143px" /></a>
          </div>
          <div className="mobile-footer-links">
            <a className="footer-link" href="https://www.amazon.com/gp/product/B07J471YWG/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07J471YWG&linkCode=as2&tag=squareonemiss-20&linkId=49a65b01862912ec9251d3cae5978ce7">View Our Products</a>
          </div>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/squareoneventuresllc" rel="noopener noreferrer" target="_blank" className="social-logo"><FaFacebookSquare size={32} /></a>
          <a href="https://www.instagram.com/square1mission/" rel="noopener noreferrer" target="_blank" className="social-logo"><FaInstagram size={32} /></a>
          <a href="https://twitter.com/Square1Mission" target="_blank" rel="noopener noreferrer" className="social-logo"><FaTwitterSquare size={32} /></a>
          <a href="mailto:nicole@squareonemission.com" rel="noopener noreferrer" className="social-logo"><FaEnvelope size={32} /></a>
        </div>
        <div>
          <a className="dev-shout-out" href="https://tomraley.dev" rel="noopener noreferrer" target="_blank">&copy; tomraley design & dev</a>
        </div>
      </footer>
    )
  }
}

export default Footer