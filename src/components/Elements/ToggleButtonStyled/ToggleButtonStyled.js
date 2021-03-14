import React from 'react';
import { makeStyles } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';

const useStyles = makeStyles(theme => {
  console.log(theme);
  return ({
    root: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        color: theme.palette.primary.main
      }
    },
    selected: {
      backgroundColor: theme.palette.primary.main
    }
  });
});

const ToggleButtonStyled = props => {
  const classes = useStyles();

  const propsWithoutChildren = { ...props, children: null };

  return (
    <ToggleButton 
      {...props}
      classes={classes}
    >
      { props.children }
    </ToggleButton>
  );
}

export default ToggleButtonStyled;
