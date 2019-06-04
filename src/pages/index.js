import React, { Component } from "react"
import Helmet from "react-helmet"
import JumbotronTop from '../components/JumbotronTop'
import JumbotronMiddle from '../components/JumbotronMiddle'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import Layout from "../components/Layout"
import SEO from "../components/seo"


class IndexPage extends Component {

  render() {
    return (
  <Layout>
    <Helmet>
          <script src="//assets.pinterest.com/js/pinit.js" async=""  ></script>
    </Helmet>
    <SEO title="Home" />
    <Navigation />
    <JumbotronTop />
    <JumbotronMiddle />
    <Footer />
  </Layout>
    )
  }
}

export default IndexPage

