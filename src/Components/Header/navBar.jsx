import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'proptypes';

import './navBar.css';

class NavBarItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };

    props.history.listen((location) => {
      const root = location.pathname.split('/')[1];
      if (`/${root}` === props.to) {
        this.setState({
          active: true,
        });
      } else {
        this.setState({
          active: false,
        });
      }
    });
  }

  render() {
    const props = this.props;
    const active = this.state.active ? '--active' : '';
    const classname = `sui-navbar__item${active}`;
    return (
      <li className={classname}>
        <Link id={props.to} to={props.to} className="sui-navbar__item--link">
          {props.label}
        </Link>
      </li>
    );
  }
}

NavBarItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  history: PropTypes.shape({
    listen: PropTypes.func.isRequired,
  }).isRequired,
};

const NavBarItemWR = withRouter(NavBarItem);

export const NavBarSpacer = () => (
  <li className="sui-navbar__item-spacer">
    ·
  </li>
);

const NavBar = () => (
  <nav className="sui-navbar">
    <ul>
      <NavBarItemWR to="/design" label="Design" />
      <NavBarSpacer />
      <NavBarItemWR to="/software" label="Software" />
      <NavBarSpacer />
      <NavBarItemWR to="/about" label="About us" />
      <NavBarSpacer />
      <NavBarItemWR to="/contact" label="Contact" />
    </ul>
  </nav>
);

export default NavBar;
