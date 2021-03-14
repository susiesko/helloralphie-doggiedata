import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import DietarySlider from './DietarySlider/DietarySlider';

const DietaryInfo = () => {
  return (
    <React.Fragment>
      <label>Appetite</label>
      <DietarySlider value={''}/>
      <label>Water</label>
      <DietarySlider value={''}/>
      <label>Restroom</label>
      <DietarySlider value={''}/>
    </React.Fragment>
  );
}

export default DietaryInfo;
