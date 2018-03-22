import React, { Component } from 'react'
import SidePane from './SidePane'
import PaneContent from './PaneContent'

export default class PaneMain extends Component {

  render() {
    return ( <SidePane rotationHome={-78} animationSpeed={0.75} bobbleSpeed={2} lable="Main" className="mainPane contentPane">
      <PaneContent className="paneContentMainColor" headerText="Hello World">
        <p>
          This. dont forget the this dot.
        </p>
      </PaneContent>
    </SidePane> )
  }
}
