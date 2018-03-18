import React, {Component} from 'react'

export default class PaneContent extends Component {
  render(){
    return(
      <div className={this.props.className}>
        <div className="paneContentHeader">{this.props.headerText}</div>
        {this.props.children}
      </div>
    )
  }
}
