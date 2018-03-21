import React, { Component } from 'react'

export default class PaneContent extends Component {

  stopPropagation = ( e ) => {
    e.stopPropagation()
  }

  render() {
    return ( <div className={`paneContent ${ this.props.className} ${ this.props.contentVisibilityClass }`} onClick={( e ) => {
        this.stopPropagation( e )
      }}>
      <div className="paneContentHeader">{this.props.headerText}</div>
      {this.props.children}
    </div> )
  }
}
