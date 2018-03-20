import React, { Component } from 'react'
import SidePane from './components/SidePane'
import HomePane from './components/HomePane'
import PaneContent from './components/PaneContent'
import TentacleMonster from './components/TentacleMonster'
import PaneContentGallery from './components/PaneContentGallery'

class App extends Component {
  render() {
    return (
      <div className="App">
        I AM ROOT
        {/* <TentacleMonster/> */}
        <HomePane/>

        <SidePane
          rotationHome={-78}
          animationSpeed={0.75}
          bobbleSpeed={2}
          lable="Main"
          className="mainPane contentPane"
        >
          <PaneContent className="paneContentMainColor" headerText="Hello World">
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
            <div>Some bool shite</div> <br/>
          </PaneContent>
        </SidePane>

        <SidePane
          rotationHome={-82}
          animationSpeed={0.75}
          bobbleSpeed={2}
          lable="Contact"
          className="contactPane contentPane"
        >
          <PaneContent className="paneContentContactColor" headerText="Contact Me">
            <div>
              Phone: 208-964-4410 <br/>
              Email @ brandon.grissom89@gmail.com <br/>
              Dig dig
            </div>
          </PaneContent>
        </SidePane>

        <SidePane
          rotationHome={-86}
          animationSpeed={0.75}
          bobbleSpeed={2}
          lable="Projects"
          className="projectsPane contentPane"
        >
          <PaneContent className="paneContentProjectsColor" headerText="Projects">

          </PaneContent>
        </SidePane>
      </div>
    )
  }
}

export default App
