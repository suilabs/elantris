import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { VFlexBox } from '../Common/FlexBoxes';

import './Gallery.scss';
import CoverImage from '../CoverImage';

class Gallery extends Component {
  static filterInstances(instances, filter) {
    return instances.filter(instance => instance.title.toLowerCase().indexOf(filter) !== -1);
  }

  constructor(props) {
    super(props);

    this.maxRowElemets = 3;

    this.state = {
      filter: '',
    };

    this.onFilterChange = this.onFilterChange.bind(this);
  }

  onFilterChange(event) {
    this.setState({
      filter: event.target.value,
    });
  }

  render() {
    const {
      filterable, instances, size, onItemClick,
    } = this.props;

    const style = {
      maxWidth: `${(size.width * this.maxRowElemets) + 100}px`,
    };

    return (
      <div className="sui-image-gallery--wrapper" style={style}>
        {
          filterable &&
          <div className="sui-form-field">
            <label htmlFor="filter-input">
              <input id="filter-input" type="text" onChange={this.onFilterChange} />
              Search
            </label>
          </div>
        }
        <VFlexBox>
          {
            Gallery.filterInstances(instances, this.state.filter).map(instance => (
              <CoverImage
                key={instance.title}
                {...instance}
                width={size.width}
                className="sui-add-margins"
                onClick={onItemClick}
              />
            ))
          }
        </VFlexBox>
      </div>
    );
  }
}

Gallery.propTypes = {
  instances: PropTypes.arrayOf(PropTypes.shape({
    ...CoverImage.propTypes,
    tag: PropTypes.arrayOf(PropTypes.string),
  })),
  filterable: PropTypes.bool,
  size: PropTypes.shape({
    width: String.number,
    height: String.number,
  }),
  onItemClick: PropTypes.func,
};

Gallery.defaultProps = {
  instances: [],
  filterable: false,
  size: { width: 200, height: 200 },
  onItemClick: () => {},
};

export default Gallery;
