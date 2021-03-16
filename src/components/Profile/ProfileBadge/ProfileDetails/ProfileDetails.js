import React from 'react';
import { useSelector } from 'react-redux';

import classes from './ProfileDetails.module.css';

const calculateAge = (birthdate) => {
  var ageDifMs = Date.now() - birthdate.getTime();
  var ageDate = new Date(ageDifMs); // milliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const ProfileDetails = () => {
  const { name, breed, birthdate } = useSelector(state => {
    return {
      name: state.profile.name,
      breed: state.profile.breed,
      birthdate: state.profile.birthdate
    };
  });

  let birthdateString = '';
  const { month, day, year } = birthdate;

  if (month && day && year){
    birthdateString = `${year}-${month}-${day}`;
  }

  const pStyle = {textAlign: 'center'};
  const pContent = [name, breed, birthdateString];

  return (
    <div>
      { pContent.map(content => <p style={pStyle}>{ content }</p>) }
    </div>
  );
}

export default ProfileDetails;
