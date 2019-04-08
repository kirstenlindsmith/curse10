import React from 'react'
import Popup from 'reactjs-popup'

const contentStyle = {
  maxWidth: '600px',
  width: '90%',
  color: 'black'
}

const Modal = () => (
  <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    contentStyle={contentStyle}
  >
    <span>This is content wow so amazing</span>
  </Popup>
)

export default Modal
