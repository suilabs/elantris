import React from 'react';

import { storiesOf } from '@storybook/react';

import { SuiParagraph } from '../../src/ComponentsLib/';

const text = `This is the text in the Paragraph. It can be any kind of text. This is just
      an example of what can be here. You won't probably read this far, but you are beautiful.
      This is the text in the Paragraph. It can be any kind of text. This is just
      an example of what can be here. You won't probably read this far, but you are beautiful.
      I might be repeating myself but that's okay.`;

storiesOf('Paragraph', module)
  .add('Normal', () => (
    <SuiParagraph
      text={text}
    />
  ))
  .add('No full width', () => (
    <SuiParagraph
      text={text}
      width={50}
    />
  ))
  .add('Different text color', () => (
    <SuiParagraph
      text={text}
      textColor="rgba(139, 3, 73, 1)"
    />
  ))
  .add('Two paragraph side by side', () => [
    <SuiParagraph
      text={text}
      textColor="rgba(139, 3, 73, 1)"
      width={50}
    />,
    <SuiParagraph
      text={text}
      textColor="rgba(139, 3, 73, 1)"
      width={50}
    />,
  ]);
