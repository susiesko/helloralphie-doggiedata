import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import ButtonThemed from '../../components/ThemedElements/ButtonThemed/ButtonThemed';
import Avatar from '../../components/SVGs/Avatar';

import classes from './DogLog.module.css';

const DogLog = () => {
  const name = useSelector(state => state.profile.name);
  return (
    <div className={classes.DogLog}>
      <Avatar/>
      <div>We're excited to meet {name}!</div>
      <ButtonThemed 
        href="/doglog/basic-info" 
        className="btn"
      >
        Start Logging
      </ButtonThemed>
    </div>
  );
}

export default DogLog;
