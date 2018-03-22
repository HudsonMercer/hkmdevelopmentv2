import React, { Component } from 'react'

export default class IconBar extends Component {

  render() {
    return ( <div className="iconBar">
      {this.props.children}
    </div> )
  }
}
