import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import ButtonThemed from '../../components/ThemedElements/ButtonThemed/ButtonThemed';
import Avatar from '../../components/SVGs/Avatar';

import classes from './DogLog.module.css';

const DogLog = () => {
  const name = useSelector(state => state.profile.name);
  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="center"
      spacing={5}
    >
      <Grid item >
        <Avatar/>
      </Grid>
      <Grid item >
        <div>We're excited to meet {name}!</div>
      </Grid>
      <Grid item >
        <ButtonThemed 
          href="/doglog/basic-info" 
          className="btn">Start Logging</ButtonThemed>
      </Grid>
    </Grid>
  );
}

export default DogLog;
