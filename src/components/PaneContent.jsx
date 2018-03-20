import React, {Component} from 'react'

export default class PaneContent extends Component {
  render(){
    return(
      <div className={`paneContent ${this.props.className} ${this.props.contentVisibilityClass}`}>
        <div className="paneContentHeader">{this.props.headerText}</div>
        {this.props.children}
      </div>
    )
  }
}
