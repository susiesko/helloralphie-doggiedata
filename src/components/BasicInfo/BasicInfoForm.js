import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import * as actions from '../../store/actions/index';
import ButtonThemed from '../ThemedElements/ButtonThemed/ButtonThemed';
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
        <Grid item xs={12}>
          <DatePicker
            label="Date"
            value={date}
            onChange={ val => dispatch(actions.updateLogField('date', val)) }
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            label="Weight"
            value={weight}
            type="number"
            onChange={ ev => dispatch(actions.updateLogField('weight', ev.target.value)) }
            fullWidth
          />
        </Grid>

        <Grid 
          container 
          item
          xs={12}
          direction="row"
          justify="center"
        >
          <ButtonThemed onClick={saveBasicInfo}>Next</ButtonThemed>
        </Grid>
      </Grid>
    </div>
  );
}

export default BasicInfoForm;
