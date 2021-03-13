import React from 'react';
import Button from '@material-ui/core/Button';

// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   root: {

//   }
// });

const ButtonThemed = props => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
      >
        {props.children}
      </Button>
    </div>
  );
}

export default ButtonThemed;
