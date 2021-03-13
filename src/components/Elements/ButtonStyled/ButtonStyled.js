import React from 'react';
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {

  }
});

const ButtonStyled = props => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
      >
        {props.children}
      </Button>
    </div>
  );
}

export default ButtonStyled;
