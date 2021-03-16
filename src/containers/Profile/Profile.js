import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'

import ProfileBadge from '../../components/Profile/ProfileBadge/ProfileBadge';
import ProfileForm from '../../components/Profile/ProfileForm';

const useGridStyle = makeStyles({
  root: {
    '@media only screen and (max-width: 960px)': {
      flexDirection: 'column-reverse'
    }
  }
});

const Profile = () => {  
  const classes = useGridStyle();
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      spacing={10}
      classes={classes}
    >
      <Grid item xs={12} md={8}>
        <ProfileForm/>
      </Grid>

      <Grid container item xs={12} md={4}>
        <ProfileBadge/>
      </Grid>

    </Grid>
  );
}

export default Profile;
