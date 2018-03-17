import React, { Component } from 'react'
import SidePane from './components/SidePane'
import HomePane from './components/HomePane'
import TentacleMonster from './components/TentacleMonster'

class App extends Component {
  render() {
    return (
      <div className="App">
        I AM ROOT
        <HomePane/>
        <SidePane
          rotationHome={-78}
          animationSpeed={0.75}
          bobbleSpeed={2}
          lable="Main"
          className="mainPane contentPane"
        >
          <div>Some stuff goes in here right?</div>
        </SidePane>
        <SidePane
          rotationHome={-82}
          animationSpeed={0.75}
          bobbleSpeed={2}
          lable="Contact"
          className="contactPane contentPane"
        >
          <div>Some stuff goes in here right?</div>
        </SidePane>
        <SidePane
          rotationHome={-86}
          animationSpeed={0.75}
          bobbleSpeed={2}
          lable="Projects"
          className="projectsPane contentPane"
        >
          <div>Some stuff goes in here right?</div>
        </SidePane>
        <TentacleMonster/>
      </div>
    )
  }
}

export default App
