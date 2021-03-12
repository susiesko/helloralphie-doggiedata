import React from 'react';
import { useSelector } from 'react-redux';

import ProfilePic from '../../SVGs/ProfilePic';

import classes from './ProfileBadge.module.css';

const ProfileBadge = () => {
  const { name, breed, birthdate } = useSelector(state => {
    return {
      name: state.profileForm.name,
      breed: state.profileForm.breed,
      birthdate: state.profileForm.birthdate
    }
  });

  return (
    <div className={classes.ProfileBadge}>
      <ProfilePic/>
      
    </div>
  );
}

export default ProfileBadge;
