import React from 'react';
import { Link } from 'react-router-dom';

import HomeImage from '../assets/images/header.jpg';

export default props => (
  <div id='HomePage'>
    <div className='Header uk-flex uk-flex-stretch'>
      <img src={HomeImage} alt='' />
      <Link
        onClick={console.log(props.user)}
        to={props.user ? '/reservation' : '/login'}
        className='BookNow uk-position-bottom-left uk-padding uk-margin-left uk-margin-bottom'>
        <div className='uk-text-center uk-padding-small'>
          <h1 className='uk-margin-remove-bottom uk-margin-top'>
            Planning a <span>RoadTrip</span> this weekend?
          </h1>
          <h3 className='uk-margin-small-top'>Book a reservation now!</h3>
        </div>
      </Link>
    </div>
  </div>
);
