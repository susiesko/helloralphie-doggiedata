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
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.contrastText
      }
    },
    selected: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover, &:focus, &:visited': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      }
    }
  });
});

const ToggleButtonStyled = props => {
  const classes = useStyles();

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
