import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import SelectThemed from '../Elements/SelectThemed/SelectThemed';
import { getMonths } from '../../utils/date';

import classes from './DatePicker.module.css'

const useSelectStyles = makeStyles({
  root: {
    width: '32%'
  }
});

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
  const selectClasses = useSelectStyles();
  const {month=0, day, year} = value;

  const onDateChange = useCallback((m, d, y) => {
    onChange({ month: m, day: d, year: y });
  }, [onChange]);

  const months = getMonths();
  const daysInMonth = (month > 0) ? months[month - 1].daysIn : 0;

  const selectInputConfigs = [
    {
      config: {
        labelId: "month-label",
        label: 'Month',
        id: 'month-select',
        value: month || '',
        onChange: ev => onDateChange(ev.target.value, day, year)
      },
      children: monthMenuItems(months)
    },
    {
      config: {
        label: 'Day',
        id: 'day-select',
        value: day || '',
        onChange: ev => onDateChange(month, ev.target.value, year)
      },
      children: dayMenuItems(daysInMonth)
    },
    {
      config: {
        label: 'Year',
        id: 'year-select',
        value: year || '',
        onChange: ev => onDateChange(month, day, ev.target.value)
      },
      children: yearMenuItems(minYear, maxYear)
    }
  ];

  const selectInputs = selectInputConfigs.map(input => (
    <Grid
      key={input.config.label.toLowerCase(0)}
      item
      xs={4}
    >
      <SelectThemed
        {...input.config}
        fullWidth
      >
        { input.children }
      </SelectThemed>
    </Grid>
  ));


  return (
    <div className={classes.DatePicker}>
      <InputLabel shrink id="month-label">
        { label }
      </InputLabel>
      <Grid 
        container        
        direction="row"
        justify="space-between"
        spacing={2}
      >
        {selectInputs}
      </Grid>
    </div>
  );
}

export default DatePicker;
