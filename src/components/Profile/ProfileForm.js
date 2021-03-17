import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import * as actions from '../../store/actions/index';
import ButtonThemed from '../ThemedElements/ButtonThemed/ButtonThemed';
import BirthdatePicker from '../DatePicker/BirthdatePicker/BirthdatePicker';
import axios from '../../axios';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const history = useHistory();
  const { name, breed, birthdate } = useSelector(state => {
    return {
      name: state.profile.name,
      breed: state.profile.breed,
      birthdate: state.profile.birthdate
    }
  });
  const dispatch = useDispatch();

  const saveProfile = () => {
    axios.post('/profiles.json', {
      name,
      breed,
      birthdate
    }).then(res => {
      dispatch(actions.updateProfileField('id', res.data.name));
      history.push('/doglog');
    }).catch(err => {
    });
  }

  return (
    <div className={classes.ProfileForm}>
      <h1>Your Doggy Profile</h1>
      <Grid 
        container
        justify="flex-start"
        direction="column"
        alignItems="stretch"
        spacing={5}
      >
        <Grid item xs={12}>
          <TextField
            label="Name"
            value={name}
            onChange={ ev => dispatch(actions.updateProfileField('name', ev.target.value)) }
            inputProps={{
              maxLength: 15,
              required: true
            }}
            fullWidth
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField 
            value={breed}
            label="Breed"
            onChange={ ev => dispatch(actions.updateProfileField('breed', ev.target.value)) }
            inputProps={{
              maxLength: 15,
              required: true         
            }}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <BirthdatePicker 
            value={birthdate}
            onChange={ val => dispatch(actions.updateProfileField('birthdate', val)) }
          />
        </Grid>

        <Grid 
          container 
          item
          direction="row"
          justify="flex-end"
        >
          <ButtonThemed onClick={saveProfile}>Next</ButtonThemed>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfileForm;
