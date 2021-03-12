import React from 'react';
import { useSelector } from 'react-redux';

import ProfilePic from '../../SVGs/ProfilePic';
import ProfileDetails from './ProfileDetails/ProfileDetails';

import classes from './ProfileBadge.module.css';

const ProfileBadge = () => {
  return (
    <div className={classes.ProfileBadge}>
      <ProfilePic/>
      <ProfileDetails/>
    </div>
  );
}

export default ProfileBadge;
