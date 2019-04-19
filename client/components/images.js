import React, {Component} from 'react'
import StackGrid from 'react-stack-grid'
import {art, graphics} from '../utils'
import Modal from '@material-ui/core/Modal'
import SingleImage from './singleImage'
import {withStyles} from '@material-ui/core/styles'

let imageHeight

class Images extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageType: props.pageType,
      isImageModalOpen: false,
      currentImage: {},
      artImages: [],
      graphicImages: []
    }

    this.onImageClick = this.onImageClick.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }

  componentDidMount() {
    const artImages = this.shuffle(art)
    const graphicImages = this.shuffle(graphics)
    this.setState({
      artImages,
      graphicImages
    })
  }

  componentDidUpdate() {
    imageHeight = this.state.currentImage.height
    if (imageHeight > 600) imageHeight = 800
    if (imageHeight < 600) imageHeight = 600
  }

  onImageClick(event, images) {
    let currentImage = images.filter(image => {
      if (event.target.src.includes(image.url)) return image
    })
    this.setState({currentImage: currentImage[0]})
    this.toggleModal()
  }

  toggleModal = () => {
    this.setState({isImageModalOpen: !this.state.isImageModalOpen})
  }

  shuffle(array) {
    const newArray = array.slice()
    let currentIndex = newArray.length
    let tempValue
    let randomIndex

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      tempValue = newArray[currentIndex]
      newArray[currentIndex] = newArray[randomIndex]
      newArray[randomIndex] = tempValue
    }

    return newArray
  }

  render() {
    const {pageType, artImages, graphicImages} = this.state
    const {classes} = this.props

    return (
      <React.Fragment>
        <Modal
          classes={{root: classes.modal}}
          open={this.state.isImageModalOpen}
          onClose={this.toggleModal}
          onClick={this.toggleModal}
        >
          <SingleImage
            image={this.state.currentImage}
            height={this.state.currentImage.height}
            width={this.state.currentImage.width}
          />
        </Modal>

        {pageType === 'art' ? (
          <StackGrid columnWidth="25%" monitorImagesLoaded="true">
            {artImages.map(image => (
              <div key={image.id}>
                <img
                  src={image.url}
                  className="gallery_item"
                  onClick={event => this.onImageClick(event, artImages)}
                />
              </div>
            ))}
          </StackGrid>
        ) : (
          <StackGrid columnWidth="20%">
            {graphicImages.map(image => (
              <div key={image.id}>
                <img
                  src={image.url}
                  className="gallery_item"
                  onClick={event => this.onImageClick(event, graphicImages)}
                />
              </div>
            ))}
          </StackGrid>
        )}
      </React.Fragment>
    )
  }
}

const styles = () => {
  return {
    modal: {
      display: 'flex',
      justifyContent: 'center'
    }
  }
}

export default withStyles(styles)(Images)
//passes a 'classes' object to props; keys are based on given styles
