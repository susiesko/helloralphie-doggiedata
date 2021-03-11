import React from 'react';

import ProfilePic from '../SVGs/ProfilePic';

import classes from './ProfileBadge.module.css';

const ProfileBadge = () => {
  return (
    <div className={classes.ProfileBadge}>
      <ProfilePic/>
    </div>
  );
}

export default ProfileBadge;
