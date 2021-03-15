import React from 'react';

import ProfileDetails from './ProfileDetails/ProfileDetails';
import BaseBadge from '../../BaseBadge/BaseBadge';

import classes from './ProfileBadge.module.css';

const ProfileBadge = () => {
  return (
      <BaseBadge className={classes.ProfileBadge}>
        <ProfileDetails/>
      </BaseBadge>
  );
}

export default ProfileBadge;
