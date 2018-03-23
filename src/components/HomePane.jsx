import React, { Component } from 'react'
import PaneContent from './PaneContent'

export default class HomePane extends Component {
  constructor() {
    super()
    this.state = {
      titles: [
        'HKM Development',
        'World Wide Woven Web',
        'NPM - No Particular Meaning',
        'Nobody Uses Titles Anymore',
        '"I love configuring webpack" - Nobody',
        'Never Forget the "this."',
        'Easy As τ'
      ]
    }
  }

  getTitle = () => {
    let { titles } = this.state
    return titles[Math.floor( Math.random() * titles.length )]
  }

  render() {
    return ( <div className="homePane">
      <h1>Look over there!</h1>
      <div className="paneHomeArrow"></div>
    </div> )
  }
}
