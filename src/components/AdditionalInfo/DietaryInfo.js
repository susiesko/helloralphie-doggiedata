import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import * as actions from '../../store/actions/index';
import DietarySlider from './DietarySlider/DietarySlider';

const DietaryInfo = () => {
  // state management hooks
  const { appetite, water, restroom} = useSelector(state => {
    return {
      appetite: state.newLogItem.appetite,
      water: state.newLogItem.water,
      restroom: state.newLogItem.restroom
    }
  });
  const dispatch = useDispatch();

  // event handlers
  const onSlide = (field, val) => {
    dispatch(actions.updateLogField(field, val));
  }

  return (
    <React.Fragment>
      <label>Appetite</label>
      <DietarySlider 
        value={appetite}
        onChange={ (ev, val) => onSlide('appetite', val) }
      />
      <label>Water</label>
      <DietarySlider 
        value={water}
        onChange={ (ev, val) => onSlide('water', val) }
      />
      <label>Restroom</label>
      <DietarySlider 
        value={restroom}
        onChange={ (ev, val) => onSlide('restroom', val) }
      />
    </React.Fragment>
  );
}

export default DietaryInfo;
