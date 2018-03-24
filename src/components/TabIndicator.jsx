import React, { Component } from 'react';

export default class TabIndicator extends Component {
  state = {
    selectorPosition: '',
    selectorScale: 1,
  };

  setTabDots = () => {
    let tabArray = [],
      { totalTabs } = this.props;

    for (let i = 0; i < totalTabs; i++) {
      let el = (
        <div id={this.props.tabIdPrefix + i} className="tabDot" key={i}>
          {i === 0 ? this.tabSelected() : ''}
        </div>
      );
      tabArray.push(el);
    }

    return tabArray;
  };

  setSelectorPosition = index => {
    let selectorPosition = '',
      rem = 2 * index,
      px = 15 * index;

    selectorPosition = `translateX(calc(${rem}rem + ${px}px))`;

    this.setState({
      ...this.state,
      selectorPosition,
      selectorScale: 3,
    });

    setTimeout(() => {
      this.setState({
        ...this.state,
        selectorScale: 1,
      });
    }, 250);
  };

  tabSelected = () => {
    return (
      <div
        className="tabSelected"
        style={{
          transform: `${this.state.selectorPosition} scale(${
            this.state.selectorScale
          }, ${this.state.selectorScale})`,
        }}
      />
    );
  };

  componentDidMount() {
    this.setTabDots();
  }

  componentWillReceiveProps(props) {
    if (props.index !== this.props.index) {
      this.setSelectorPosition(props.index);
    }
  }

  render() {
    let tabArray = this.setTabDots();
    return <div className="tabIndicator">{tabArray}</div>;
  }
}
