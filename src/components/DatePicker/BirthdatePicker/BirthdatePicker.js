import React from 'react';

import DatePicker from '../DatePicker';

const BirthdatePicker = ({ animalType='human', value, onChange }) => {
  const currentYear = new Date().getFullYear();

  return (
    <DatePicker 
      label="Birthdate" 
      minYear={currentYear - 30} 
      value={value}
      onChange={onChange}
    />
  );
}

export default BirthdatePicker;
