import React, { Component } from "react"
import { graphql } from 'gatsby'
import JumbotronTop from '../components/JumbotronTop'
import JumbotronMiddle from '../components/JumbotronMiddle'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Layout from "../components/Layout"
import SEO from "../components/seo"
require('typeface-raleway')

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
    const images = this.props.data;
    return (
  <Layout>
    <SEO title="Home" />
    <Navigation logo={images.logoTransparent} />
    <JumbotronTop oceanLandscape={images.oceanLandscape} />
    <JumbotronMiddle diagonalLogo={images.diagonalLogo} />
    <Footer logo={images.logoTransparent} />
  </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
  oceanLandscape:file (relativePath:{eq:"ocean-landscape.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 4000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  diagonalLogo:file (relativePath:{eq:"diagonal-logo.jpg"}) {
    childImageSharp {
      fluid(maxWidth:750) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  logoTransparent:file (relativePath:{eq:"logo-transparent.png"}) {
    childImageSharp {
      fluid(maxWidth:166) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`