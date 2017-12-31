import React from 'react';
import PropTypes from 'proptypes';

import SocialIcons from '../../assets/social';

import './profilecard.css';

const deviceType = () => {
  const width = window.screen.width;
  if (width < 320) {
    return 'mobile';
  } else if (width > 321 && width < 720) {
    return 'tablet';
  }
  return 'desktop';
};

const isMobile = () => deviceType() === 'mobile';
const isTablet = () => deviceType() === 'tablet';

const socialImage = (type) => {
  if (isMobile()) {
    return SocialIcons[type].sm;
  } else if (isTablet()) {
    return SocialIcons[type].md;
  }
  return SocialIcons[type].lg;
};

const ProfileCard = props => (
  <div className="sui-profile-card">
    <div className="sui-profile__image">
      <img src={props.img} alt={props.name} />
    </div>
    <div className="sui-profile__details">
      <span className="sui-profile__name">{props.name}</span>
      <div className="sui-profile__work">
        {props.work.map(el => <span key={el}>{el}</span>)}
      </div>
      <div className="sui-profile__contact">
        {props.contact.map(el => <span key={el}>{el}</span>)}
      </div>
      <div className="sui-profile__social">
        {
          props.social.map(el => (
            <a href={el.url} key={el}>
              <img src={socialImage(el.type)} alt={el.type} />
            </a>
          ))
        }
      </div>
    </div>
  </div>
);

ProfileCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  work: PropTypes.arrayOf(PropTypes.string).isRequired,
  contact: PropTypes.arrayOf(PropTypes.string).isRequired,
  social: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
};

export default ProfileCard;
