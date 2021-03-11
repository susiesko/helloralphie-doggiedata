import React, { useCallback } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import { getMonths } from '../../utils/date';

import classes from './DatePicker.module.css'

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

const yearMenuItems = (minYear, maxYear) => {
  const startYear = maxYear || new Date().getFullYear();
  const endYear = minYear || (startYear - 120);

  const menuItems = [];

  for (let i = startYear; i >= endYear; i--){
    menuItems.push(
      <MenuItem key={`year-${i}`} value={i}>{i}</MenuItem>
    );
  }

  return menuItems;
}

const DatePicker = ( {value={}, minYear, maxYear, label, onChange} ) => {
  const {month=0, day, year} = value;

  const onDateChange = useCallback((m, d, y) => {
    onChange({ month: m, day: d, year: y });
  }, [onChange]);

  const months = getMonths();
  const daysInMonth = (month > 0) ? months[month - 1].daysIn : 0;

  return (
    <div className={classes.DatePicker}>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="month-label">
          { label }
        </InputLabel>
        <Select
          labelId="month-label"
          id="month-select"
          onChange={ev => onDateChange(ev.target.value, day, year)}
          value={month || ''}
          placeholder="Month"
        >
          { monthMenuItems(months) }
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select
          id="day-select"
          value={day || ''}
          onChange={ev => onDateChange(month, ev.target.value, year)}
          placeholder="Day"
        >
          { dayMenuItems(daysInMonth) }
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select
          id="year-select"
          value={year || ''}
          onChange={ev => onDateChange(month, day, ev.target.value)}
          placeholder="Year"
        >
          { yearMenuItems(minYear, maxYear) }
        </Select>
      </FormControl>
    </div>
  );
}

export default DatePicker;
