import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';

import { behaviors as allBehaviors } from '../../helpers/behavioralInfo';
import * as actions from '../../store/actions/index';

const useGridItemStyle = makeStyles(theme => {
  return {
    // trying to make the buttons square. having a rough time with it!
    root: {
      '&::after': {
        content: '""',
        display: 'block',
        paddingBottom: '50%'
      }
    }
  };
});

const useToggleButtonStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    fontSize: '0.625rem',
    letterSpacing: '0.0625rem'
  }, 
  selected: {
    backgroundColor: 'black'
  }
});

const BehavioralInfo = () => {
  const selectedBehaviors = useSelector(state => state.newLogItem.behaviors);
  const toggleButtonClasses = useToggleButtonStyles();
  const gridItemClasses = useGridItemStyle();

  const dispatch = useDispatch();

  const onToggle = (ev, val) => {
    let newVal = [...selectedBehaviors];

    if (newVal.find(b => b === val)){
      newVal = newVal.filter(b => b !== val);
    }
    else{
      newVal.push(val);
    }
    dispatch(actions.updateLogField('behaviors', newVal));
  }

  const toggleButtons = allBehaviors.map(btn => {
    const selected = selectedBehaviors.find(b => b === btn.value);
    return (
      <Grid
        item
        xs={6}
        sm={3}
        classes={gridItemClasses}
      >
        <ToggleButton 
          key={btn.value} 
          classes={toggleButtonClasses}
          value={btn.value}
          selected={selected}
          onChange={ onToggle }
        >
          {btn.text}
        </ToggleButton>
      </Grid>
    )
  });

  return (
    <Grid
      width={'100%'}
      container
      justify="space-between"
      spacing={2}
    >
      {toggleButtons}
    </Grid>
  );
}

export default BehavioralInfo;
