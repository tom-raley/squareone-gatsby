import React, { Component } from "react"
import { graphql } from 'gatsby'

import Helmet from "react-helmet"
import JumbotronTop from '../components/JumbotronTop'
import JumbotronMiddle from '../components/JumbotronMiddle'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Layout from "../components/Layout"
import SEO from "../components/seo"


class IndexPage extends Component {
  render() {
    const images = this.props.data;
    return (
  <Layout>
    <Helmet>
          <script
            type="text/javascript"
            async defer
            src="//assets.pinterest.com/js/pinit.js"
          ></script>
    </Helmet>
    <SEO title="Home" />
    <Navigation logo={images.logoTransparent} />
    <JumbotronTop oceanLandscape={images.oceanLandscape} />
    <JumbotronMiddle diagonalLogo={images.diagonalLogo}>
      <Helmet>
        <script
          type="text/javascript"
          async defer
          src="//assets.pinterest.com/js/pinit.js"
        ></script>
      </Helmet>
    </JumbotronMiddle>
    <Footer />
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
      fluid(maxWidth:1500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`