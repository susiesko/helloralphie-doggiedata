import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import axios from '../../../axios';

import BaseInfo from '../BaseInfo/BaseInfo';
import BehavioralInfo from '../../../components/AdditionalInfo/BehavioralInfo';
import DietaryInfo from '../../../components/AdditionalInfo/DietaryInfo';
import ButtonThemed from '../../../components/ThemedElements/ButtonThemed/ButtonThemed';

const AdditionalInfo = () => {
  const history = useHistory();
  const logData = useSelector(state => state.newLogItem);
  const profileId = useSelector(state => state.profile.id);

  const saveLogInfo = () => {
    axios.post('/doglog.json', {
      ...logData,
      profileId
    }).then(res => {
      console.log(res);
      history.push('/doglog/full-log');
    }).catch(err => {
      console.log(err);
    });
  }
  
  return (
    <BaseInfo>
      <Grid 
        container
        justify="space-between"
        spacing={10}
      >
        <Grid 
          item
          xs={12}
          md={6}
        >
          <h2>Behavioral</h2>
          <BehavioralInfo/>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
        >
          <h2>Dietary &amp; Digestional</h2>
          <DietaryInfo/>
        </Grid>
        <Grid
          container
          style={{marginTop: '20px'}}
          xs={12}
          justify="center"    
        >
          <ButtonThemed onClick={saveLogInfo}>Next</ButtonThemed>
        </Grid>
      </Grid>
    </BaseInfo>
  );
}

export default AdditionalInfo;
