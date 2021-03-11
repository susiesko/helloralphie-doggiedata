import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import classes from './ProfileForm.module.css';

import BirthdatePicker from '../DatePicker/BirthdatePicker/BirthdatePicker';

const ProfileForm = () => {  
  return (
    <div className={classes.ProfileForm}>
      <h1>Your Doggy Profile</h1>
      <Grid container
        direction="row"
        justify="center"
        alignItems="stretch"
      >
        <Grid container item xs={12} >
          <TextField placeholder="Name"/>
        </Grid>
        <Grid container item xs={12} >
          <TextField type="text" value="hello" placeholder="Breed"/>
        </Grid>
        <Grid container item xs={12}>
          <BirthdatePicker/>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfileForm;
