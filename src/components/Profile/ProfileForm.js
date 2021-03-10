import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import BirthdatePicker from '../BirthdatePicker/BirthdatePicker';

const ProfileForm = () => {
  
  return (
    <React.Fragment>
    <h1>Your Doggy Profile</h1>
    <Grid container>
      <Grid container item xs="12" >
        <TextField placeholder="Name"/>
      </Grid>
      <Grid container item xs="12" >
        <TextField type="text" value="hello" placeholder="Breed"/>
      </Grid>
      <Grid container item xs="12">
        <BirthdatePicker/>
      </Grid>
    </Grid>
    </React.Fragment>
    
  );
}

export default ProfileForm;
