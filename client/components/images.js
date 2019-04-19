import React, {Component} from 'react'
import StackGrid from 'react-stack-grid'
import {art, graphics} from '../utils'
import Modal from '@material-ui/core/Modal'
import SingleImage from './singleImage'
import {withStyles} from '@material-ui/core/styles'

class Images extends Component {
  constructor(props) {
    super(props)
    this.state = {
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

  componentDidUpdate(prevProps) {
    if (prevProps.pageType !== this.props.pageType) {
      this.grid.updateLayout()
    }
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
    const {artImages, graphicImages} = this.state
    const {classes, pageType} = this.props

    console.log('pageType in render:', this.props.pageType)
    console.log('does pageType === art?', pageType === 'art')

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
          <StackGrid
            columnWidth="25%"
            monitorImagesLoaded="true"
            gridRef={grid => (this.grid = grid)}
          >
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
          <StackGrid columnWidth="20%" gridRef={grid => (this.grid = grid)}>
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
