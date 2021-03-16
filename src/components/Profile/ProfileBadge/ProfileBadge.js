import React from 'react';

import ProfileDetails from './ProfileDetails/ProfileDetails';
import BaseBadge from '../../BaseBadge/BaseBadge';

const ProfileBadge = () => {
  return (
      <BaseBadge>
        <ProfileDetails/>
      </BaseBadge>
  );
}

export default ProfileBadge;
