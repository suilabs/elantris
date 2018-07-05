import React from 'react';
import { storiesOf } from '@storybook/react';

import DropDownMenu from '../../../src/Components/Common/DropdownMenu';

storiesOf('DropdownMenu', module)
  .add('NonVisible', () => (
    <DropDownMenu>
      <ul>
        <li>element 1</li>
        <li>element 2</li>
        <li>element 3</li>
      </ul>
    </DropDownMenu>
  ))
  .add('Visible', () => (
    <DropDownMenu showMenu >
      <ul>
        <li>element 1</li>
        <li>element 2</li>
        <li>element 3</li>
      </ul>
    </DropDownMenu>
  ))
  .add('Toggle', () => {
    class C extends React.Component {
      constructor() {
        super();
        this.state = { show: false };
      }

      render() {
        const { show } = this.state;
        return (
          <div>
            <button onClick={() => this.setState({ show: !this.state.show })}>
              Toggle
            </button>
            <DropDownMenu showMenu={show}>
              <ul>
                <li>element 1</li>
                <li>element 2</li>
                <li>element 3</li>
              </ul>
            </DropDownMenu>
          </div>
        );
      }
    }
    return <C />;
  });

