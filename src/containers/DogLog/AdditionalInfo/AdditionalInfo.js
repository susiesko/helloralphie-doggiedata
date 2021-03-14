import React from 'react';
import Grid from '@material-ui/core/Grid';

import BaseInfo from '../BaseInfo/BaseInfo';
import BehavioralInfo from '../../../components/AdditionalInfo/BehavioralInfo';
import DietaryInfo from '../../../components/AdditionalInfo/DietaryInfo';

const AdditionalInfo = () => {
  
  return (
    <BaseInfo>
      <Grid 
        container
        justify="space-between"
        spacing={5}
      >
        <Grid 
          item
          xs={6}
        >
          <h2>Behavioral</h2>
          <BehavioralInfo/>
        </Grid>

        <Grid
          item
          xs={6}
        >
          <h2>Dietary &amp; Digestional</h2>
          <DietaryInfo/>
        </Grid>

      </Grid>
    </BaseInfo>
  );
}

export default AdditionalInfo;
