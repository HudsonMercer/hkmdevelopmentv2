import React, {Component} from 'react'
import bodyGraphic from '../res/tentacleMonster.svg'
import bodyGraphicDead from '../res/tentacleMonsterDead.svg'

export default class TentacleMonster extends Component{
  constructor(){
    super()
  }

render(){
  return(
    <div className="monsterBody">
      <img src={bodyGraphic} alt=""/>
    </div>
  )
}
}
