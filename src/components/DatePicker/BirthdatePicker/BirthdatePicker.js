import React from 'react';

import DatePicker from '../DatePicker';

const BirthdatePicker = ({ animalType='human', value }) => {
  const currentYear = new Date().getFullYear();

  switch(animalType){
    case 'dog': return <DatePicker label="Birthdate" minYear={currentYear - 30} value={value} />;
    default: return <DatePicker minYear={currentYear - 120} value={value} />;
  }
}

export default BirthdatePicker;
