import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import * as actions from '../../store/actions/index';

import classes from './ProfileForm.module.css';

import BirthdatePicker from '../DatePicker/BirthdatePicker/BirthdatePicker';
import { useDispatch, useSelector } from 'react-redux';

const ProfileForm = () => {
  const profileForm = useSelector(state => state.profileForm);
  const dispatch = useDispatch();

  return (
    <div className={classes.ProfileForm}>
      <h1>Your Doggy Profile</h1>
      <Grid container
        direction="row"
        justify="center"
        alignItems="stretch"
      >
        <Grid container item xs={12} >
          <TextField 
            placeholder="Name"
            value={profileForm.name}
            onChange={ ev => dispatch(actions.updateProfileField('name', ev.target.value)) }
          />
        </Grid>
        <Grid container item xs={12} >
          <TextField 
            value={profileForm.breed}
            placeholder="Breed"
            onChange={ ev => dispatch(actions.updateProfileField('breed', ev.target.value)) }
          />
        </Grid>
        <Grid container item xs={12}>
          <BirthdatePicker/>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfileForm;
