import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';

import Avatar from '../SVGs/Avatar';

const BaseBadge = props => {
  return (
    <Grid container item direction="row" justify="center" alignItems="flex-start" spacing={1}>
      <Grid item xs={12}>
        <Avatar/>
      </Grid>
      <Hidden smDown>
        <Grid item xs={12}>
          {props.children}
        </Grid>
      </Hidden>
    </Grid>
  );
}

export default BaseBadge;
