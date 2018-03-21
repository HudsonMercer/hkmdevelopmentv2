import React, {Component} from 'react'

export default class IconBar extends Component{

  render(){
    return(
      <div className="iconContainer">
        {this.props.children}
      </div>
    )
  }
}
