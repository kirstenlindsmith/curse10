import React from 'react'

const Modal = props => {
  if (!props.show) {
    return null
  }
  return (
    <div className="modalBackdrop">
      <div className="modal modals">
        {props.children}
        <div className="footer">
          <button onClick={props.onClose} />
        </div>
      </div>
    </div>
  )
}

export default Modal

// import React from 'react'
// import Popup from 'reactjs-popup'

// const contentStyle = {
//   maxWidth: '600px',
//   width: '90%',
//   color: 'black'
// }

// const Modal = () => (
//   <Popup
//     trigger={<button className="button"> Open Modal </button>}
//     modal
//     contentStyle={contentStyle}
//   >
//     <span>This is content wow so amazing</span>
//   </Popup>
// )

// export default Modal
