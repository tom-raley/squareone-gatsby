import React, { Component } from 'react'

class PinterestWidget extends Component {
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
    const url = 'https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.squareonemission.com&media=https%3A%2F%2Fsquareonemission.com%2Fresources%2Fimages%2Fdiagonal-logo.jpg&description=Reusable%20Eco-Friendly%20Sandwich%20%26%20Snack%20Bags'
    return (
      <a data-pin-do="buttonPin" data-pin-build="doBuild" href={url}>
        {url}
      </a>
    )
  }
}

export default PinterestWidget