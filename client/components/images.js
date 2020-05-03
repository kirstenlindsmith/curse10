import React from 'react'

//helpers
import {
  art,
  graphics,
  shuffle
} from '../utils'

//components
import SingleImage from './singleImage'
import StackGrid from 'react-stack-grid'
import Modal from '@material-ui/core/Modal'

//styles
import { withStyles } from '@material-ui/core/styles'

const Images = ({ classes, pageType }) => {
  const [modalOpen, toggleModal] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState({});
  const [artImages, setArtImages] = React.useState(art);
  const [graphicImages, setGraphicImages] = React.useState(graphics);

  React.useEffect(() => {
    setArtImages(shuffle(art));
    setGraphicImages(shuffle(graphics))
  }, []);

  const onImageClick = (event, images) => {
    const activeImage = images.filter(image => {
      if (event.target.src.includes(image.url)) return image;
    });
    if (activeImage) {
      setCurrentImage(currentImage[0]);
      toggleModal(!modalOpen);
    };
  };

  return (
    <React.Fragment>
      <Modal
        classes={{ root: classes.modal }}
        open={modalOpen}
        onClose={toggleModal}
        onClick={toggleModal}
      >
        <SingleImage
          image={currentImage}
          height={currentImage.height}
          width={currentImage.width}
        />
      </Modal>

      <StackGrid columnWidth="25%" monitorImagesLoaded="true">
        {pageType === 'art' &&
          artImages.map(image => (
            <div key={image.id}>
              <img
                src={image.url}
                className="gallery_item"
                onClick={event => onImageClick(event, artImages)}
              />
            </div>
          ))}
        {pageType === 'graphics' &&
          graphicImages.map(image => (
            <div key={image.id}>
              <img
                src={image.url}
                className="gallery_item"
                onClick={event => onImageClick(event, graphicImages)}
              />
            </div>
          ))}
      </StackGrid>
    </React.Fragment>
  )
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
