import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const CustomSlider = withStyles(theme => ({
  thumb: {
    height: 22,
    width: 22,
    backgroundColor: theme.palette.primary.main,
    marginTop: -11,
    marginLeft: -11
  },
  mark: {
    height: 5,
    width: 5,
    marginTop: -2,
    marginLeft: -2,
    borderRadius:'2px',
    opacity: 0.5,
    backgroundColor: theme.palette.primary.light
  } 
}))(Slider);

const DietarySlider = props => {
  return (
    <CustomSlider    
      defaultValue={1}
      aria-labelledby="discrete-slider-small-steps"
      step={1}
      marks
      min={1}
      max={7}
      track={false}
      valueLabelDisplay="auto"
      {...props}
    />
  );
}

export default DietarySlider;
