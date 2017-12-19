import React from 'react';
import PropTypes from 'proptypes';

import Utils from '../../Utils';
import ProjectWrapper from '../../Components/ProjectWrapper/ProjectWrapper';
import { ImageBoxWithFlange as ImageBoxWF } from '../../Components/ImageBox';

const VerticalImages = props => (
  <ProjectWrapper>
    <div className="sui-project-detail--title">
      <h1>· {props.title} ·</h1>
      <span>{props.type}</span>
    </div>
    {props.images.map((imageObj) => {
      const url = Utils.getImage(imageObj.url);
      console.log(imageObj.text);
      if (!imageObj.text) {
        return <ImageBoxWF key={url} img={url} alt={imageObj.url} />;
      }
      return (
        <ImageBoxWF key={url} img={url} alt={imageObj.url} >
          {imageObj.text}
        </ImageBoxWF>
      );
    })}
  </ProjectWrapper>
);

VerticalImages.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    text: PropTypes.string,
    alt: PropTypes.string.isRequired,
  })),
};

VerticalImages.defaultProps = {
  images: [],
};

export default VerticalImages;
