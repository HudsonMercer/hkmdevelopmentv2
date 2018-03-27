import React, { Component } from 'react';
import galleryArrow from '../res/galleryLeftArrow.svg';
import galleryRightArrow from '../res/galleryRightArrow.svg';
import TabIndicator from './TabIndicator';

export default class PaneContentGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryPanes: props.children,
      paneIndex: 0,
    };
  }

  handelNextPaneClick = e => {
    e.stopPropagation();
    let index = this.state.paneIndex,
      totalPanes = this.state.galleryPanes.length;
    if (index < totalPanes - 1) {
      this.setState({
        ...this.state,
        paneIndex: index + 1,
      });
    }
  };

  handelPreviousPaneClick = e => {
    e.stopPropagation();
    let index = this.state.paneIndex;
    if (index > 0) {
      this.setState({
        ...this.state,
        paneIndex: index - 1,
      });
    }
  };

  getChildren = () => {
    let returnEl = [],
      curEl;
    for (let i = 0; i < this.props.children.length; i++) {
      curEl = React.cloneElement(this.props.children[i], {
        contentVisibilityClass: this.props.contentVisibilityClass,
        key: i,
      });
      returnEl.push(curEl);
    }
    return returnEl;
  };

  handelTouchEvent = () => {};

  render() {
    let updatedChildren = this.getChildren();
    return (
      <div onTouchEnd={this.handelTouchEvent}>
        <TabIndicator
          tabIdPrefix="projectPaneTab"
          index={this.state.paneIndex}
          totalTabs={this.props.children.length}
        />
        <img
          src={galleryArrow}
          onClick={e => {
            this.handelPreviousPaneClick(e);
          }}
          className="galleryLeftArrow noMobile"
          alt=""
        />
        <div>{updatedChildren[this.state.paneIndex]}</div>
        <img
          src={galleryRightArrow}
          onClick={e => {
            this.handelNextPaneClick(e);
          }}
          className="galleryRightArrow noMobile"
          alt=""
        />
      </div>
    );
  }
}
