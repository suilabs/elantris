import React from 'react';
import PropTypes from 'prop-types';

import Utils from '../../Utils';
import { ImageBoxWithFlange as ImageBoxWF } from '../ImageBox';

import ProjectWrapper from './ProjectWrapper';

const LayoutDesign = (props) => (
  <ProjectWrapper>
    <div className="sui-project-detail--title">
      <h1>· {props.title} ·</h1>
      <span>{props.type}</span>
    </div>
    {props.images.map((imageObj) => {
      const url = Utils.getImage(imageObj.url);
      if (!imageObj.text) {
        return <ImageBoxWF key={url} img={url} alt={imageObj.url} />;
      }
      return (
        <ImageBoxWF key={url} img={url} alt={imageObj.url}>
          {imageObj.text}
        </ImageBoxWF>
      );
    })}
  </ProjectWrapper>
);

LayoutDesign.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      text: PropTypes.string,
      alt: PropTypes.string.isRequired,
    }),
  ),
};

LayoutDesign.defaultProps = {
  images: [],
};

export default LayoutDesign;
