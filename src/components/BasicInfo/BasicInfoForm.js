import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import * as actions from '../../store/actions/index';
import DatePicker from '../DatePicker/DatePicker';
import classes from './BasicInfoForm.module.css';

const BasicInfoForm = () => {
  // hooks / state management
  const history = useHistory();
  const dispatch = useDispatch();
  const { date, weight } = useSelector(state => {
    return {
      date: state.newLogItem.date,
      weight: state.newLogItem.weight
    }
  });

  const saveBasicInfo = () => {
    history.push('/doglog/additional-info')
  };

  return (
    <div className={classes.BaseInfoForm}>
      <h1>Basic Info</h1>
      <Grid 
        container
        spacing={5}
      >
        <Grid container item>
          <DatePicker
            value={date}
            onChange={ val => dispatch(actions.updateLogField('date', val)) }
          />
        </Grid>
        
        <Grid container item>
          <TextField
            placeholder="Weight"
            value={weight}
            type="number"
            onChange={ ev => dispatch(actions.updateLogField('weight', ev.target.value)) }
          />
        </Grid>

        <Grid 
          container 
          item
          direction="row"
          justify="flex-end"
        >
          <Button onClick={saveBasicInfo} className='btn'>Next</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default BasicInfoForm;
