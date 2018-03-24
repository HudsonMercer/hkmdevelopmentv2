import React, { Component } from 'react';

export default class Icon extends Component {
  render() {
    return (
      <a href={this.props.link} target="_blank" rel="noopener noreferrer">
        <img src={this.props.image} className="icon" alt={this.props.label} />
      </a>
    );
  }
}
