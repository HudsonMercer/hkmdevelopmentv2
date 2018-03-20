import React, {Component} from 'react'
import galleryArrow from '../res/galleryLeftArrow.svg'
import galleryRightArrow from '../res/galleryRightArrow.svg'

export default class PaneContentGallery extends Component {
  constructor(props){
    super(props)
    this.state = {
      galleryPanes: this.props.children,
      paneIndex: 0,
    }
  }

  handleNextPaneClick = (e) => {
    e.stopPropagation()
    let index = this.state.paneIndex,
      totalPanes = this.state.galleryPanes.length
    if(index < totalPanes-1){
      this.setState({
        ...this.state,
        paneIndex: index+1,
      })
    }
  }

  handlePreviousPaneClick = (e) => {
    e.stopPropagation()
    let index = this.state.paneIndex,
      totalPanes = this.state.galleryPanes.length
    if(index > 0){
      this.setState({
        ...this.state,
        paneIndex: index-1,
      })
    }
  }

  getChildren = () => {
    let returnEl =[], curEl

    for(let i = 0; i < this.props.children.length; i++){
      React.cloneElement(this.props.children[i], {contentVisibilityClass: this.props.contentVisibilityClass}
      )

      returnEl.push(React.cloneElement(this.props.children[i], {contentVisibilityClass: this.props.contentVisibilityClass, key: i}
      ))
    }

    return returnEl
  }

  render(){
    let updatedChildren = this.getChildren()
    return(
      <div>
        <img src={galleryArrow} onClick={(e) => {
          this.handlePreviousPaneClick(e)
        }} className="galleryLeftArrow" alt=""/>
        <div>
          {updatedChildren[this.state.paneIndex]}
        </div>
        <img src={galleryRightArrow} onClick={(e) => {
          this.handleNextPaneClick(e)
        }} className="galleryRightArrow" alt=""/>
      </div>
    )
  }
}

// {React.cloneElement(
//   this.props.children,
//   {contentVisibilityClass: this.props.contentVisibilityClass}
// )}