import React from 'react';
import { makeStyles } from '@material-ui/core';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles(theme => {
  console.log(theme);
  return ({
    root: {
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'stretch'
    },
    grouped: {
      display: 'inline-block'
    }
  });
});

const ToggleButtonGroupStyled = props => {
  const classes = useStyles();
  return (
    <ToggleButtonGroup
      classes={classes}
      onChange={props.onChange}
    >
      { props.children }
    </ToggleButtonGroup>
  );
}

export default ToggleButtonGroupStyled;
