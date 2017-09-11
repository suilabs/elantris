import React from 'react';
import { storiesOf } from '@storybook/react';

import GalleryImageBox from '../../src/Components/GalleryImageBox/';
import testImage from '../assets/testImage.jpg';

storiesOf('GalleryImageBox', module)
    .add('Without Label', () => (
        <GalleryImageBox img={testImage} />
    )).add('Normal', () => (
        <GalleryImageBox img={testImage} title="Test Image" />
    )).add('Vertical anim and Label', () => (
        <GalleryImageBox 
            img={testImage} 
            orientation="vertical" 
            title="Test Image" 
            animationDirection="vertical"
        />
    )).add('Horizontal anim and Vertical Label', () => (
        <GalleryImageBox 
            img={testImage} 
            orientation="vertical" 
            title="Test Image" 
        />
    )).add('Vertical anim and Horizontal Label', () => (
        <GalleryImageBox 
            img={testImage} 
            animationDirection="vertical" 
            title="Test Image" 
        />
    )).add('Vertical Image With Title and description', () => (
        <GalleryImageBox 
            img={testImage} 
            orientation="vertical" 
            title="Test Image"
            descr="Ut eius"
             />
    ));
