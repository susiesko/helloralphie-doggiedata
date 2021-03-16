import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return {
    root: {
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }      
    }
  }
});

const ButtonThemed = props => {
  const classes = useStyles();
  return (
    <Button
      classes={classes}
      variant="contained"
      color="primary"
      size="large"
      {...props}
    >
      {props.children}
    </Button>
  );
}

export default ButtonThemed;
