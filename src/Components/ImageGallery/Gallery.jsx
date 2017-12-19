import React, { Component } from 'react';
import PropTypes from 'proptypes';
import ImageBox from '../ImageBox';
import { VFlexBox } from '../Common/FlexBoxes';

import './Gallery.css';

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
    const { filterable, instances, size } = this.props;

    const style = {
      maxWidth: `${(size.width * this.maxRowElemets) + 100}px`,
    };

    return (
      <div className="sui-image-gallery--wrapper" style={style}>
        {
          filterable &&
          <div className="sui-form-field">
            <label htmlFor="filter-input">Search</label>
            <input id="filter-input" type="text" onChange={this.onFilterChange} />
          </div>
        }
        <VFlexBox>
          {
            Gallery.filterInstances(instances, this.state.filter).map(instance => (
              <ImageBox
                key={instance.title}
                {...instance}
                width={size.width}
                className={'sui-add-margins'}
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
    ...ImageBox.propTypes,
    tag: PropTypes.arrayOf(PropTypes.string),
  })),
  filterable: PropTypes.bool,
  size: PropTypes.shape({
    widht: String.number,
    height: String.number,
  }),
};

Gallery.defaultProps = {
  instances: [],
  filterable: false,
  size: { width: 200, height: 200 },
};

export default Gallery;
