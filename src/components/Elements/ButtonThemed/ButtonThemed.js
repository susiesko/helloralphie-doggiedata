import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonThemed = props => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        {...props}
      >
        {props.children}
      </Button>
    </div>
  );
}

export default ButtonThemed;
