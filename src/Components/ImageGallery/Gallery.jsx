import React, { Component } from 'react';
import PropTypes from 'proptypes';
import ImageBox from '../GalleryImageBox';
import { HFlexBox, VFlexBox } from '../Common/FlexBoxes'

import './Gallery.css';

class Gallery extends Component {
    constructor (props) {
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

    filterInstances(instances, filter) {
        return instances.filter(instance => instance.title.toLowerCase().indexOf(filter) !== -1);
    }

    render() {
        const { filterable, instances } = this.props;

        const rows = instances.reduce((ret, instance, index) => {
            const retIndex = Math.floor(index/this.maxRowElemets);
            if (!ret[retIndex]) { ret[retIndex] = []; }
            ret[retIndex].push(instance);
            return ret;
        }, {})
        return (
            <div className='sui-image-gallery--wrapper'>
                {
                    filterable &&
                    <div className='sui-form-field'>
                        <label>Search</label>
                        <input type='text' onChange={this.onFilterChange} />
                    </div>
                }
                <VFlexBox>
                    {
                        this.filterInstances(instances, this.state.filter).map(instance => (
                            <ImageBox
                                key={instance.title}
                            {...instance}
                            />
                        ))
                    }
                </VFlexBox>
            </div>
        )
    }
}

Gallery.propTypes = {
    instances: PropTypes.arrayOf(PropTypes.shape({
        ...ImageBox.propTypes, 
        tag: PropTypes.arrayOf(PropTypes.string)
    })),
    filterable: PropTypes.bool,
}

Gallery.defaultProps = {
    instances: [],
    filterable: false,
}

export default Gallery;
