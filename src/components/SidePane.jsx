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
    }
  }

paneBobble = () => {
  let rotation = this.state.rotation,
    canBobble = this.state.canBobble,
    isBobbling = this.state.isBobbling,
    isOpen = this.state.isOpen,
    speed = this.props.bobbleSpeed,
    isMoving = this.state.isMoving,
    maxRotation = this.state.rotationHome - 0.5,
    minRotation = this.state.rotationHome + 0.05

  if(!isMoving){
      if(canBobble &&
        !isOpen &&
        !isBobbling &&
        rotation >= this.props.rotationHome){
          this.setState({
            ...this.state,
            rotation: maxRotation,
            animationSpeed: speed,
            isBobbling: true,
          })
console.log('bobblin yo')
      } else if(canBobble &&
          !isOpen &&
          !isBobbling &&
          rotation < this.props.rotationHome){
            this.setState({
              ...this.state,
              rotation: minRotation,
              animationSpeed: speed,
              isBobbling: true,
            })
console.log('bobblin')
        }

    if(canBobble &&
      !isBobbling &&
      !isOpen){
        let timer = speed*1000+Math.random()*100
        setTimeout(this.paneBobble, timer)
        setTimeout(() => {
          this.setState({
            ...this.state,
            isBobbling: false
          })
        }, timer-10)
    }
  }
}

handleClick = () => {
  let animationSpeed = this.props.animationSpeed
  if(!this.state.isOpen && !this.state.isMoving){
    this.setState({
      ...this.state,
      rotation: 0,
      isOpen: true,
      animationSpeed,
      isMoving: true,
    })
  } else if(!this.state.isMoving){
    this.setState({
      ...this.state,
      closeTimeoutSet: true,
    })

    if(!this.state.isMoving){
      this.setState({
        ...this.state,
        bannerBottomHide: 'paneBannerBottomHide',
      })
    }

    if(!this.state.closeTimeoutSet){
    setTimeout(() => {
      this.setState({
        ...this.state,
        rotation: this.props.rotationHome,
        isOpen: false,
        animationSpeed,
        isMoving: true,
        bannerBottomHide: null,
        bannerBottomDisplay: 'none',
        closeTimeoutSet: false,
      })
    }, 250)}
  }
  setTimeout(() => {
    this.setState({
      ...this.state,
      isMoving: false,
    })
    this.paneBobble()
  },
  animationSpeed*1000)
}

toggleBobble(override){
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

setBottomBannerVisibility = () => {
  this.setState((prevState) => {
    if(prevState.bannerBottomDisplay === 'none'
    && this.state.isOpen
    && !this.state.isMoving){
      return {
        bannerBottomDisplay: 'block'
      }
    }
  })
}

handleMouseEnter = () => {
  this.toggleBobble(false)
  if(!this.state.isOpen && this.state.rotation < this.state.rotationHome + 8){
    this.setState({
      rotation: this.state.rotation+3,
      animationSpeed: this.state.animationSpeed/3,
    })
  }
}

  render(){
    this.setBottomBannerVisibility()
    return(
      <div
        className={this.props.className}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={() => {
          if(!this.state.isMoving){
            setTimeout(this.paneBobble, 100)
          }
          this.toggleBobble(true)
        }}

        style={{
          transform: `rotate(${this.state.rotation}deg)`,
          transition: `transform ${this.state.animationSpeed}s ease-in-out`
        }}>

        <div className="paneBannerTop"/>

        {this.props.children}

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

      </div>
    )
  }
}
