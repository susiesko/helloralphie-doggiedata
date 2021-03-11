import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProfileBadge from '../../components/Profile/ProfileBadge';
import ProfileForm from '../../components/Profile/ProfileForm';

const Profile = () => {  
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      spacing={10}
    >
      <Grid container item xs={12} md={9}>
        <ProfileForm/>
      </Grid>

      <Grid container item xs={12} md={3}>
        <ProfileBadge/>
      </Grid>

    </Grid>
  );
}

export default Profile;
