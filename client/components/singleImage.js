import React from 'react'

const SingleImage = props => {
  let imageHeight = props.height
  if (imageHeight > 600) imageHeight = 800
  if (imageHeight < 600) imageHeight = 600

  return (
    <img src={props.image.url} alt={props.image.id} style={{height: '100%'}} />
  )
}

export default SingleImage
