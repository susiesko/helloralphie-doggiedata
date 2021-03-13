import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

import * as actions from '../../store/actions/index';
import BirthdatePicker from '../DatePicker/BirthdatePicker/BirthdatePicker';
import axios from '../../axios';

//import classes from './ProfileForm.module.css';

const useStyles = makeStyles({
  profileForm: {
    width: '70%'
  },
  grid: {
    display: 'flex',
    justifyContent: 'start',
    direction: 'column',
    alignItems: 'stretch'
  }
});

const ProfileForm = () => {
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
    axios.post('/doggieData/profiles.json', {
      name,
      breed,
      birthdate
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div className={classes.profileForm}>
      <h1>Your Doggy Profile</h1>
      <Grid 
        container
        className={classes.grid}
        spacing={5}
      >
        <Grid container item>
          <TextField
            placeholder="Name"
            value={name}
            onChange={ ev => dispatch(actions.updateProfileField('name', ev.target.value)) }
          />
        </Grid>
        
        <Grid container item>
          <TextField 
            value={breed}
            placeholder="Breed"
            onChange={ ev => dispatch(actions.updateProfileField('breed', ev.target.value)) }
          />
        </Grid>

        <Grid container item>
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
          <Button onClick={saveProfile} className='btn'>Next</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfileForm;
