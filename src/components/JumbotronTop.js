import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

import { Link } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

class JumbotronTop extends Component {

  componentDidMount() {
    const AOS = require('aos');
    this.aos = AOS
    this.aos.init()
  }

  componentDidUpdate() {
    this.aos.refresh()
  }

  render() {
    const oceanLandscape = this.props.oceanLandscape.childImageSharp.fluid
    return (
        <BackgroundImage Tag="Jumbotron" style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100vw', height: '110vh'}} className="jumbotron-top" fluid={oceanLandscape}>
          <div className="hero-text">
          <h1 data-aos="fade-zoom-in" data-aos-easing="ease-in" data-aos-duration="1500" data-aos-offset="0" className="display-4"><span className="square-one-teal">U  </span>ARE <span className="change-text">ONE</span></h1>
          <p data-aos="fade-zoom-in" data-aos-easing="ease-in" data-aos-duration="2000" data-aos-offset="0"  className="lead">The future of sustainable living is here.</p>
          <Link to="/#about" data-aos="fade-zoom-in" data-aos-easing="linear" data-aos-duration="500" data-aos-offset="0"><Button type="button" variant="primary" className="btn-square-one" id="learn-more">Learn more</Button></Link>
          <a data-aos="fade-zoom-in" data-aos-easing="linear" data-aos-duration="500" data-aos-offset="0" href="https://www.amazon.com/gp/product/B07J471YWG/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07J471YWG&linkCode=as2&tag=squareonemiss-20&linkId=49a65b01862912ec9251d3cae5978ce7"><Button type="button" variant="primary" className="btn-square-one" id="view-products">View Our Products</Button></a>
          </div>
          </ BackgroundImage>
    )
  }
}

export default JumbotronTop