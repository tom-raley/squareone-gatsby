import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'

class Navigation extends Component {
  render() {
    const logoTransparent = require('../dist/images/logo-transparent.png')
    return(
      <Navbar expand="lg" className="" id="home">
        <Navbar.Brand href="#">
          <img src={logoTransparent} alt="square one logo" width="166px" height="143px" />
        </ Navbar.Brand>
      </Navbar>
    )
  }
}

export default Navigation