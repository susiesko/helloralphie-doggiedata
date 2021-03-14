import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import Avatar from '../../components/SVGs/Avatar';

import classes from './DogLog.module.css';

const DogLog = () => {
  const name = useSelector(state => state.profile.name);
  return (
    <div className={classes.DogLog}>
      <Avatar/>
      <div>We're excited to meet {name}!</div>
      <Link to="/doglog/basic-info"><Button className="btn">Start Logging</Button></Link>
    </div>
  );
}

export default DogLog;
