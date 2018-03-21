import React, {Component} from 'react'

export default class Icon extends Component {
  render(){
    return(
        <img src={this.props.image} className="icon" alt={this.props.alt}/>
    )
  }
}
