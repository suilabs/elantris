import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import Gallery from '../../src/Components/ImageGallery';
import testImage from '../assets/testImage.jpg';

const instances = [
    {
        img: testImage,
        title: 'Title1',
        descr: 'Non fugiat ea culpa amet nostrud culpa nisi qui.',
        orientation: 'vertical',
        animationDirection: 'vertical'
    },{
        img: testImage,
        title: 'Title2',
        descr: 'Non fugiat ea culpa amet nostrud culpa nisi qui.',
        orientation: 'vertical',
        animationDirection: 'horizontal',
    },{
        img: testImage,
        title: 'Title3',
        descr: 'Non fugiat ea culpa amet nostrud culpa nisi qui.',
        orientation: 'vertical',
        animationDirection: 'vertical',
    },{
        img: testImage,
        title: 'Title4',
        descr: 'Non fugiat ea culpa amet nostrud culpa nisi qui.',
        orientation: 'vertical',
        animationDirection: 'vertical',
    }
]


storiesOf('Gallery', module)
    .add('Non-filterable', () => (
        <Gallery instances={instances} />
    ))
    .add('Filterable', () => (
        <Gallery instances={instances} filterable />   
    ));