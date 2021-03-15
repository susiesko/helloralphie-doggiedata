import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';

import * as actions from '../../store/actions/index';
import ButtonThemed from '../ThemedElements/ButtonThemed/ButtonThemed';
import BirthdatePicker from '../DatePicker/BirthdatePicker/BirthdatePicker';
import axios from '../../axios';

//import classes from './ProfileForm.module.css';

const useStyles = makeStyles({
  root: {
    width: '70%',
    '@media only screen and (max-width: 992px)': {
      width: '100%'
    }
  }
});

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
  const classes = useStyles();

  const saveProfile = () => {
    axios.post('/profiles.json', {
      name,
      breed,
      birthdate
    }).then(res => {
      console.log(res);
      dispatch(actions.updateProfileField('id', res.data.name));
      history.push('/doglog');
    }).catch(err => {
      console.log(err);
    });
  }

  return (
    <div className={classes.profileForm}>
      <h1>Your Doggy Profile</h1>
      <Grid 
        container
        justify="start"
        direction="column"
        alignItems="stretch"
        spacing={5}
      >
        <Grid item xs={12}>
          <TextField
            label="Name"
            value={name}
            onChange={ ev => dispatch(actions.updateProfileField('name', ev.target.value)) }
            fullWidth
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField 
            value={breed}
            label="Breed"
            onChange={ ev => dispatch(actions.updateProfileField('breed', ev.target.value)) }
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
