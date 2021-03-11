import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import * as actions from '../../store/actions/index';

import classes from './ProfileForm.module.css';

import BirthdatePicker from '../DatePicker/BirthdatePicker/BirthdatePicker';
import { useDispatch, useSelector } from 'react-redux';

const ProfileForm = () => {
  const { name, breed, birthdate } = useSelector(state => {
    return {
      name: state.profileForm.name,
      breed: state.profileForm.breed,
      birthdate: state.profileForm.birthdate
    }
  });
  const dispatch = useDispatch();

  return (
    <div className={classes.ProfileForm}>
      <h1>Your Doggy Profile</h1>
      <Grid container
        direction="row"
        justify="center"
        alignItems="stretch"
        spacing={5}
      >
        <Grid container item xs={12} >
          <TextField
            placeholder="Name"
            value={name}
            onChange={ ev => dispatch(actions.updateProfileField('name', ev.target.value)) }
          />
        </Grid>
        <Grid container item xs={12} >
          <TextField 
            value={breed}
            placeholder="Breed"
            onChange={ ev => dispatch(actions.updateProfileField('breed', ev.target.value)) }
          />
        </Grid>
        <Grid container item xs={12}>
          <BirthdatePicker 
            value={birthdate}
            onChange={ val => dispatch(actions.updateProfileField('birthdate', val)) }
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfileForm;
