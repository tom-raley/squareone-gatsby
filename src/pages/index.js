import React, { Component } from "react"
import Helmet from "react-helmet"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { Link } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"

const logoTransparent = require('../dist/images/logo-transparent.png')
const diagonalLogo = require('../dist/images/diagonal-logo.jpg')


class IndexPage extends Component {
  componentDidMount() {
    const AOS = require('aos');
    this.aos = AOS
    this.aos.init()
  }

  componentDidUpdate() {
    this.aos.refresh()
  }

  render() {
    return (
  <Layout>
    <Helmet>
      <script async defer src="https://assets.pinterest.com/js/pinit.js"></script>
    </Helmet>
    <SEO title="Home" />
    <Navbar expand="lg" className="" id="home">
      <Navbar.Brand href="#">
        <img src={logoTransparent} alt="square one logo" width="166px" height="143px" />
      </ Navbar.Brand>
    </Navbar>
    <Jumbotron fluid className="jumbotron-top">
      <div className="hero-text">
        <h1 className="display-4"><span className="square-one-teal">U  </span>ARE <span className="change-text">ONE</span></h1>
        <p className="lead">The future of sustainable living is here.</p>
        <Link><Button type="button" variant="primary" className="btn-square-one" id="learn-more" href="#about">Learn more</Button></Link>
        <Link><Button type="button" variant="primary" className="btn-square-one" id="view-products" href="https://www.amazon.com/gp/product/B07J471YWG/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07J471YWG&linkCode=as2&tag=squareonemiss-20&linkId=49a65b01862912ec9251d3cae5978ce7">View Our Products</Button></Link>
      </div>
    </ Jumbotron>
    <Jumbotron fluid className="jumbotron-middle" id="about">
      <h1 className="display-4">ABOUT <span className="square-one-teal">US</span></h1>
      <div className="about-text">
        <div data-aos="fade-right" data-aos-duration="2000" className="about-img">
          <Image className="diagonal-logo" fluid src={diagonalLogo} alt="diagonal logo" />
          <a data-pin-do="buttonPin" href="https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.squareonemission.com&media=https%3A%2F%2Fsquareonemission.com%2Fresources%2Fimages%2Fdiagonal-logo.jpg&description=Reusable%20Eco-Friendly%20Sandwich%20%26%20Snack%20Bags"></a>
        </div>
        <div data-aos="fade-left" data-aos-duration="2000" className="desktop-mission">
          <p>We design one-of-a-kind, sustainable products. Simplicity, safety and superior durability are featured in high quality materials and craftsmanship. "U are one" that will make a difference today. Join us on our mission to reuse.<br/><br/>Meet us at Square One.</p>
        </div>
      </div>
    </ Jumbotron>
    <footer>
      <div className="mobile-footer">
        <div className="mobile-footer-logo">
          <a className="footer-logo" href="#home"><img src={logoTransparent} alt="square one logo" width="166px" height="143px" /></a>
      </div>
        <div className="mobile-footer-links">
          <a className="footer-link" href="https://www.amazon.com/gp/product/B07J471YWG/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07J471YWG&linkCode=as2&tag=squareonemiss-20&linkId=49a65b01862912ec9251d3cae5978ce7" target="_blank">View Our Products</a>
        </div>
      </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/squareoneventuresllc" target="_blank"><i className="fab fa-facebook-square"></i></a>
          <a href="https://www.instagram.com/square1mission/" target="_blank"><i className="fab fa-instagram"></i></a>
          <a href="https://twitter.com/Square1Mission" target="_blank"><i className="fab fa-twitter-square"></i></a>
          <a href="mailto:nicole@squareonemission.com"><i className="far fa-envelope"></i></a>
        </div>
        <div>
          <a className="dev-shout-out" href="https://tomraley.dev" target="_blank">&copy; tomraley design & dev</a>
        </div>
    </footer>
  </Layout>
    )
  }
}

export default IndexPage
