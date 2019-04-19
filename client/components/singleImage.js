import React from 'react'
import sizeMe from 'react-sizeme'

const SingleImage = props => {
  const {width, height} = this.props.size

  return (
    <div className="single-container">
      <div className="single-body">
        <div id="single-image-container">
          <img
            src={props.image.url}
            alt={props.image.id}
            style={{height: '200px', width: '200px'}}
          />
        </div>
      </div>
    </div>
  )
}

const sizeMeConfig = {monitorWidth: true, monitorHeight: true}
const sizeMeHOC = sizeMe(sizeMeConfig)

export default sizeMeHOC(SingleImage)
