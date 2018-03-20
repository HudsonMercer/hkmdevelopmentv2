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

  render(){
    return(
      <div>
        <img src={galleryArrow} className="galleryLeftArrow" alt=""/>
        <div>
          {React.cloneElement(
            this.props.children,
            {contentVisibilityClass: this.props.contentVisibilityClass}
          )}
        </div>
        <img src={galleryRightArrow} className="galleryRightArrow" alt=""/>
      </div>
    )
  }
}
