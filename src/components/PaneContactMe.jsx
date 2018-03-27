import React, { Component } from 'react';
import SidePane from './SidePane';
import PaneContent from './PaneContent';
import Icon from './Icon';
import githubImg from '../res/github.svg';

export default class PaneContactMe extends Component {
  render() {
    return (
      <SidePane
        rotationHome={-82}
        label="Contact"
        className="contactPane contentPane"
      >
        <PaneContent className="paneContentContactColor" header="Contact Me">
          <div className="centerText paneContentAllGrid">
            <h1>Phone</h1>
            208-964-4410
            <br />
            <h1>E-mail</h1>
            brandon.grissom89@gmail.com
            <h1>Github</h1>
            <div
              style={{
                width: '10vh',
                height: '10vh',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <Icon image={githubImg} link="https://github.com/Lou-Saydus" />
            </div>
          </div>
        </PaneContent>
      </SidePane>
    );
  }
}
