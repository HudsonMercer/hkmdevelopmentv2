import React, {Component} from 'react'
import galleryArrow from '../res/galleryLeftArrow.svg'

export default class PaneContentGallery extends Component {
  constructor(props){
    super(props)
    this.state = {
      galleryPanes: this.props.children,
      paneIndex: 0,
    }
  }

  render(){
    return(
      <div>
        <div className="galleryLeftArrow"></div>
        <div>
          Here be dragons
        </div>
        <div className="galleryRightArrow"></div>
      </div>
    )
  }
}
