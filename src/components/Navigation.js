import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Img from 'gatsby-image'

class Navigation extends Component {
  render() {
    const logo = this.props.logo.childImageSharp.fluid
    return(
      <Navbar style={{zIndex: '1'}} expand="lg"  id="home">
        <Navbar.Brand href="#">
          <Img fluid={logo} alt="square one logo" style={{width: "166px", height: "143px"}}/>
        </ Navbar.Brand>
      </Navbar>
    )
  }
}

export default Navigation