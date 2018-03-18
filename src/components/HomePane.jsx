import React, { Component } from 'react'
import PaneContent from './PaneContent'

export default class HomePane extends Component{
  constructor(){
    super()
    this.state = {
      titles: [
        'HKM Development',
        'World Wide Woven Web',
        'NPM - No Particular Meaning',
        'Nobody Uses Titles Anymore'],
    }
  }

  getTitle = () => {
    let {titles} = this.state
    return titles[Math.floor(Math.random()*titles.length)]
  }

  render(){
    return(
      <div className="homePane">
        <div className="paneContent">
          <PaneContent className="paneContentHomeColor" headerText={this.getTitle()}>
            <div>
              Phone: 208-964-4410 <br/>
              Email @ brandon.grissom89@gmail.com <br/>
              Over the top? over the top.... take it down a notch....
            </div>
          </PaneContent>
        </div>
      </div>
    )
  }
}
