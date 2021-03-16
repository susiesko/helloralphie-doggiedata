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
      spacing={3}
    >
      <Grid item >
        <Avatar/>
      </Grid>
      <Grid item >
        <p style={{fontSize: '24px', fontWeight: 700, letterSpacing: '2.4px'}}>We're excited to meet {name}!</p>
      </Grid>
      <Grid item >
        <Link to="/doglog/basic-info" underline="never">
            <ButtonThemed>Start Logging</ButtonThemed>
        </Link>
      </Grid>
    </Grid>
  );
}

export default DogLog;
