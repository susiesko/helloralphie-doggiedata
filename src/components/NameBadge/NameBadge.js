import React from 'react';
import { useSelector } from 'react-redux';

import BaseBadge from '../BaseBadge/BaseBadge';

const ProfileBadge = () => {
  const name = useSelector(state => state.profile.name);
  return (
    <BaseBadge badgeType="name">
      {name}
    </BaseBadge>
  );
}

export default ProfileBadge;
