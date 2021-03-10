import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProfilePic from '../../components/SVGs/ProfilePic';
import ProfileForm from '../../components/Profile/ProfileForm';

const Profile = () => {
  return (
    <Grid 
      container      
      direction="row"
      justify="center"
      alignItems="stretch"
    >
      <Grid container item xs={9} spacing={3}>
        <ProfileForm/>
      </Grid>
      
      <Grid container item xs={3} spacing={3}>        
        <ProfilePic/>
      </Grid>
      
    </Grid>
  );
}

export default Profile;
