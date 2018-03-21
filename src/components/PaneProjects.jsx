import React, {Component} from 'react'
import SidePane from './SidePane'
import PaneContent from './PaneContent'
import PaneContentGallery from './PaneContentGallery'

export default class PaneProjects extends Component {

  render(){
    return(
      <SidePane
        rotationHome={-86}
        animationSpeed={0.75}
        bobbleSpeed={2}
        lable="Projects"
        className="projectsPane contentPane"
      >
        <PaneContentGallery>
          <PaneContent className="paneContentProjectsColor" headerText="Hangman">
            <div>A simple implementation of the classic "hangman" game. Written mostly with jQuery.</div>
          </PaneContent>

          <PaneContent className="paneContentProjectsColor" headerText="Tic Tac Toe - jQuery">
            <div>Made with jQuery and ugly, doesn't work well like most jQuery projects. State management lead to this project being abandonded.</div>
          </PaneContent>

          <PaneContent className="paneContentProjectsColor" headerText="Tic Tac Toe - React">
            <div>A more mature implementation of Tic Tac Toe with a serious focus on improved UI, proper state management via Redux and a backend handled by Google's firebase service.</div>
          </PaneContent>

          <PaneContent className="paneContentProjectsColor" headerText="HKM - Dev V1.0">
            <div>The original design of this site. Corporate and boring with little to no color. Built on top of SemanticUI and React.</div>
          </PaneContent>
          <PaneContent className="paneContentProjectsColor" headerText="HKM - Dev V2.0">
            <div>A custom implementation of this site again using React as the front end framework but with completely custom styling and design.</div>
          </PaneContent>
        </PaneContentGallery>
      </SidePane>
    )
  }
}
