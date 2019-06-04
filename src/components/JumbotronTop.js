import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Link } from 'gatsby'

class JumbotronTop extends Component {
  render() {
    return (
      <Jumbotron fluid className="jumbotron-top">
        <div className="hero-text">
          <h1 className="display-4"><span className="square-one-teal">U  </span>ARE <span className="change-text">ONE</span></h1>
          <p className="lead">The future of sustainable living is here.</p>
          <Link><Button type="button" variant="primary" className="btn-square-one" id="learn-more" href="#about">Learn more</Button></Link>
          <Link><Button type="button" variant="primary" className="btn-square-one" id="view-products" href="https://www.amazon.com/gp/product/B07J471YWG/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07J471YWG&linkCode=as2&tag=squareonemiss-20&linkId=49a65b01862912ec9251d3cae5978ce7">View Our Products</Button></Link>
        </div>
      </ Jumbotron>
    )
  }
}

export default JumbotronTop