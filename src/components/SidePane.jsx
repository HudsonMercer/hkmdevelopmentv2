import React, { Component } from 'react'

export default class SidePane extends Component{

  constructor(props){
    super(props)
    this.state={
      rotationHome: props.rotationHome,
      rotation: props.rotationHome,
      isOpen: false,
      canBobble: false,
      isBobbling: false,
      isMoving: false,
      animationSpeed: props.animationSpeed,
      bannerBottomHide: null,
      bannerBottomDisplay: 'none',
      rotationTarget: props.rotationHome,
      pendingTimers: [],
    }
  }

// paneBobble = (timerID) => {
//   let rotation = this.state.rotation,
//     canBobble = this.state.canBobble,
//     isBobbling = this.state.isBobbling,
//     isOpen = this.state.isOpen,
//     speed = this.props.bobbleSpeed,
//     isMoving = this.state.isMoving,
//     maxRotation = this.state.rotationHome - 0.5,
//     minRotation = this.state.rotationHome + 0.05
//
//   if(!isMoving){
//       if(canBobble &&
//         !isOpen &&
//         !isBobbling &&
//         rotation >= this.props.rotationHome){
//           this.setState({
//             ...this.state,
//             rotation: maxRotation,
//             animationSpeed: speed,
//             isBobbling: true,
//           })
//       } else if(canBobble &&
//           !isOpen &&
//           !isBobbling &&
//           rotation < this.props.rotationHome){
//             this.setState({
//               ...this.state,
//               rotation: minRotation,
//               animationSpeed: speed,
//               isBobbling: true,
//             })
//         }
//
//     if(canBobble &&
//       !isBobbling &&
//       !isOpen){
//         let timer = speed*1000+Math.random()*100
//         setTimeout(this.paneBobble, timer)
//         setTimeout(() => {
//           this.setState({
//             ...this.state,
//             isBobbling: false
//           })
//         }, timer-10)
//     }
//   }
// }

closePane = () => {
  const animationSpeed = this.props.animationSpeed
  const rotationHome = this.props.rotationHome

  this.setState({
    ...this.state,
    isMoving: true,
    isOpen: false,
    animationSpeed,
    bannerBottomHide: 'paneBannerBottomHide',
  })

  setTimeout(() => {
    this.setState({
    ...this.state,
    isMoving: true,
    isOpen: false,
    rotation: rotationHome,
    bannerBottomHide: 'paneBannerBottomHide',
    animationSpeed,
    })
  }, 250)

  setTimeout(() => {
    this.setState({
      ...this.state,
      rotation: rotationHome,
      isMoving: false,
      isOpen: false,
      bannerBottomDisplay: 'none',
      bannerBottomHide: 'paneBannerBottomHide',
      animationSpeed,
    })
  }, animationSpeed*1000)
}

openPane = () => {
  const animationSpeed = this.props.animationSpeed
  this.setState({
    ...this.state,
    isOpen: true,
    isMoving: true,
    rotation: 0,
    animationSpeed,
  })

  setTimeout(() => {
    this.setState({
      ...this.state,
      isOpen: true,
      isMoving: false,
      rotation: 0,
      bannerBottomDisplay: 'block',
      bannerBottomHide: null,
      animationSpeed,

    })
  }, animationSpeed*1000)
}

handleClick = () => {
  if(this.state.isOpen && !this.state.isMoving){
    this.closePane()
  } else if (!this.state.isOpen && !this.state.isMoving){
    this.openPane()
  }
}

toggleBobble = (override) => {
  if(typeof(override) === 'boolean' && !this.state.isMoving){
    this.setState({
      canBobble: override
    })
  } else if(!this.state.isMoving){
    this.setState({
      canBobble: !this.state.canBobble
    })
  }
}

handleMouseEnter = () => {
  const state = this.state
  this.toggleBobble(false)
  if(!this.state.isOpen && this.state.rotation < this.state.rotationHome + 8){
    this.setState({
      ...state,
      rotation: this.state.rotation+3,
      animationSpeed: this.props.animationSpeed/3,
    })
  }
}

handleMouseLeave = () => {
  let pendingTimers = this.state.pendingTimers.slice()
  if(!this.state.isMoving && pendingTimers.length < 1){
    pendingTimers.push(setTimeout(() => {
      //this.paneBobble()
      this.clearPendingTimers()
    }, 100))
    this.setState({
      ...this.state,
      pendingTimers
    })

  }
  this.toggleBobble(true)
}

clearPendingTimers = () => {

  for(let i=0; i < this.state.pendingTimers.length; i++){
    clearTimeout(this.state.pendingTimers[i])
  }
  this.setState({
    ...this.state,
    pendingTimers: []
  })

}

  render(){
    return(
      <div
        className={this.props.className}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        id={`pane${this.props.className}`}
        style={{
          transform: `rotate(${this.state.rotation}deg)`,
          transition: `transform ${this.state.animationSpeed}s ease-in-out`
        }}>

        <div className="paneBannerTop"/>


        <div
          className="paneLable"
          style={{
            opacity: this.state.isOpen ? '0' : '1'
          }}>

          {this.props.lable}

        </div>

        <div
          className={`paneBannerBottom ${this.state.bannerBottomHide}`}
          style={{
            display: `${this.state.bannerBottomDisplay}`
          }}/>

        <div className="paneContent">
          {this.props.children}
        </div>
      </div>
    )
  }
}
