import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

  const sliderConfigs = [
    {
      key: 'appetite',
      label: 'Appetite',
      value: appetite
    },
    {
      key: 'water',
      label: 'Water',
      value: water
    },
    {
      key: 'restroom',
      label: 'Restroom',
      value: restroom
    }
  ];


  // event handlers
  const onSlide = (field, val) => {
    dispatch(actions.updateLogField(field, val));
  }

  const sliders = sliderConfigs.map(slider => {
    return (
      <DietarySlider 
        key={slider.key}
        label={slider.label}
        value={slider.value}
        onChange={ (ev, val) => onSlide(slider.key, val) }
      />
    );
  })

  return (
    <React.Fragment>
      {sliders}
    </React.Fragment>
  );
}

export default DietaryInfo;
