import React, { Component } from 'react'
import bodyGraphic from '../res/tentacleMonster.svg'
import bodyGraphicDead from '../res/tentacleMonsterDead.svg'

export default class TentacleMonster extends Component {
  constructor() {
    super()
    this.state = {
      isAlive: true,
      move: null
    }
  }

  componentDidMount() {
    this.doRandomUpdate()
  }

  doRandomUpdate = () => {
    setTimeout( () => {
      this.setState( { move: Math.random() } )
      this.doRandomUpdate()
    }, Math.random() * 10000 + 1000 )
  }

  render() {
    return ( <div className="monsterBody">
      {
        this.state.move
          ? this.state.move
          : null
      }
      <img style={{
          position: 'absolute',
          zIndex: 999,
          left: ( Math.random() * 1700 ).toString() + 'px',
          top: ( Math.random() * 800 ).toString() + 'px'
        }} src={this.state.isAlive
          ? bodyGraphic
          : bodyGraphicDead} alt=""/>
    </div> )
  }
}
