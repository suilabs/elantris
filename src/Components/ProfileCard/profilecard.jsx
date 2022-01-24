import React from 'react';
import PropTypes from 'prop-types';

import './profilecard.scss';
import Utils from '../../Utils';

const ProfileCard = (props) => (
  <div className="sui-profile-card">
    <div className="sui-profile__image">
      <img src={props.img} alt={props.name} />
    </div>
    <div className="sui-profile__details">
      <span className="sui-profile__name">{props.name}</span>
      <div className="sui-profile__work">
        {props.work.map((el) => (
          <span key={el}>{el}</span>
        ))}
      </div>
      <div className="sui-profile__contact">
        {props.contact.map((el) => (
          <span key={el}>{el}</span>
        ))}
      </div>
      <div className="sui-profile__social">
        {props.social.map((el) => (
          <a href={el.url} key={el}>
            <img src={Utils.getAWSImagesPath('linkedin.svg')} alt={el.type} />
          </a>
        ))}
      </div>
    </div>
  </div>
);

ProfileCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  work: PropTypes.arrayOf(PropTypes.string).isRequired,
  contact: PropTypes.arrayOf(PropTypes.string).isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProfileCard;
