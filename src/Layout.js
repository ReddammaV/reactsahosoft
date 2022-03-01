import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Layout extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.element
}


