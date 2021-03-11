import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProfilePic from '../../components/SVGs/ProfilePic';
import ProfileForm from '../../components/Profile/ProfileForm';

const Profile = () => {
  return (
    <Grid
      container
      direction="row"
      justify="stretch"
      alignItems="stretch"
    >
      <Grid container item xs={12} md={8}>
        <ProfileForm/>
      </Grid>

      <Grid container item xs={12} md={4}>
        <ProfilePic/>
      </Grid>

    </Grid>
  );
}

export default Profile;
