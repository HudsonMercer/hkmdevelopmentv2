import React, { Component } from 'react';

export default class PaneContent extends Component {
  stopEventPropagation = e => {
    e.stopPropagation();
  };

  render() {
    return (
      <div
        className={`paneContent ${this.props.className} ${
          this.props.contentVisibilityClass
        }`}
        onClick={e => {
          this.stopEventPropagation(e);
        }}
      >
        <div className="paneContentHeader">{this.props.headerText}</div>
        {this.props.children}
      </div>
    );
  }
}
