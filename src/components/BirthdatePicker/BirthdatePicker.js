import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import { getMonths } from '../../utils/date';

import classes from './BirthdatePicker.module.css'

const monthMenuItems = (months) => {
  return months.map((month, idx) => {
    return <MenuItem key={month.monthName} value={idx + 1}>{month.monthName}</MenuItem>
  });
}

const dayMenuItems = (days) => {
  const menuItems = [];

  for (let i = 1; i <= days; i++){
    menuItems.push(
      <MenuItem key={`day${i}`} value={i}>{i}</MenuItem>
    );
  }
  
  return menuItems;
}

const yearMenuItems = (maxYears) => {
  const startYear = new Date().getFullYear();
  const endYear = startYear - maxYears;
  
  const menuItems = [];

  for (let i = startYear; i >= endYear; i--){
    menuItems.push(
      <MenuItem key={`year-${i}`} value={i}>{i}</MenuItem>
    );
  }

  return menuItems;
}

const BirthdatePicker = props => {
  const {month=0, day, year} = props;

  const onBirthdateChange = () => {
    props.onChange();
  }

  const onDropdownChange = () => {
    
  }
  
  const months = getMonths();
  const daysInMonth = month > 0 ? months[month - 1].daysIn : 0;

  return (
    <div className={classes.BirthdatePicker}>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="month-label">
          Birthdate
        </InputLabel>
        <Select
          labelId="month-label"
          id="month-select"          
          onChange={onDropdownChange}
          value={month}
          placeholder="Month"
        >
          { monthMenuItems(months) }
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select
          id="day-select"    
          value={day}      
          onChange={onDropdownChange}
          placeholder="Day"
        >
          { dayMenuItems(daysInMonth) }
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select
          id="year-select"
          value={year}
          onChange={onDropdownChange}
          placeholder="Year"
        >
          { yearMenuItems(30) }
        </Select>
      </FormControl>
    </div>
  );
}

export default BirthdatePicker;
