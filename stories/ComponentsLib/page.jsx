import React from 'react';

import { storiesOf } from '@storybook/react';

import { SuiHeroImage, SuiTag, SuiParagraph, SuiImage } from '../../src/ComponentsLib';

const text = `This is the text in the Paragraph. It can be any kind of text. This is just
      an example of what can be here. You won't probably read this far, but you are beautiful.
      This is the text in the Paragraph. It can be any kind of text. This is just
      an example of what can be here. You won't probably read this far, but you are beautiful.
      I might be repeating myself but that's okay.`;

storiesOf('Components', module)
  .add('Normal', () => (
    <div style={{
      width: '50%',
    }}
    >
      <SuiHeroImage
        image={{
          url: 'http://altunit.com/wp-content/uploads/2017/10/hero-750x400.jpg',
        }}
        alt="this is a hero image"
        projectTitle="This is a test page"
        projectDescription="This test page should show how a page with a Hero Image, a tag line, a paragraph and two image side by side should be displayed"
      />
      <SuiTag
        tags="Tag1, Tag2, Tag3, tag with spaces"
      />
      <SuiParagraph
        text={text}
      />
      <SuiImage
        image={{
          url: 'http://altunit.com/wp-content/uploads/2017/10/hero-750x400.jpg',
        }}
        alt="this is a hero image"
        width={50}
      />
      <SuiImage
        image={{
          url: 'http://altunit.com/wp-content/uploads/2017/10/hero-750x400.jpg',
        }}
        alt="this is a hero image"
        width={50}
      />
    </div>
  )).add('DiferentColors', () => (
    <div
      style={{
      width: '50%',
    }}
    >
      <SuiHeroImage
        image={{
          url: 'http://altunit.com/wp-content/uploads/2017/10/hero-750x400.jpg',
        }}
        alt="this is a hero image"
        titleColor="#da3456"
        subTitleColor="#ddd"
        projectTitle="This is a test page"
        projectDescription="This test page should show how a page with a Hero Image, a tag line, a paragraph and two image side by side should be displayed"
      />
      <SuiTag
        tags="Tag1, Tag2, Tag3, tag with spaces"
        style={{
        color: '#da3456',
      }}
      />
      <SuiParagraph
        text={text}
        textColor="#da3456"
      />
      <SuiImage
        image={{
          url: 'http://altunit.com/wp-content/uploads/2017/10/hero-750x400.jpg',
        }}
        alt="this is a hero image"
        width={50}
      />
      <SuiImage
        image={{
          url: 'http://altunit.com/wp-content/uploads/2017/10/hero-750x400.jpg',
        }}
        alt="this is a hero image"
        width={50}
      />
    </div>
  ));
