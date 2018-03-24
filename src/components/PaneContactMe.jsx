import React, { Component } from 'react';
import SidePane from './SidePane';
import PaneContent from './PaneContent';
import PaneContentGallery from './PaneContentGallery';

export default class PaneContactMe extends Component {
  render() {
    return (
      <SidePane
        rotationHome={-82}
        animationSpeed={0.75}
        bobbleSpeed={2}
        label="Contact"
        className="contactPane contentPane"
      >
        <PaneContent
          className="paneContentContactColor"
          headerText="Contact Me"
        >
          <div>
            Phone: 208-964-4410
            <br />
            Email @ brandon.grissom89@gmail.com and some other stuff here to
            test this
            <br />
            Dig dig
          </div>
        </PaneContent>
      </SidePane>
    );
  }
}
