import React, {Component} from 'react'
import SidePane from './SidePane'

export default class PaneProjects extends Component {

  render(){
    return(
      <SidePane>
        <PaneContent className="paneContentProjectsColor" headerText="Projects">
          
        </PaneContent>
      </SidePane>
    )
  }
}
