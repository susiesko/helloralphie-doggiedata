import React from 'react';
import { withStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import InputLabel from '@material-ui/core/InputLabel';
import Hidden from '@material-ui/core/Hidden';

const CustomSlider = withStyles(theme => ({
  thumb: {
    height: '22px',
    width: '22px',
    backgroundColor: theme.palette.primary.main,
    marginTop: '-11px',
    marginLeft: '-11px'
  },
  mark: {
    height: '5px',
    width: '5px',
    marginTop: '-2px',
    marginLeft: '-2px',
    borderRadius:'2px',
    opacity: 0.2,
    backgroundColor: theme.palette.primary.light
  } ,
  rail: {
    height: '1px',
    backgroundColor: theme.palette.primary.light
  } 
}))(Slider);

const DietarySlider = props => {
  const theme = useTheme();

  // create local circle component for sides of slider
  const circleStyle = {
    height: '22px',
    width: '22px',
    margin: '-30px 0px 0px 6px',
    borderRadius: '11px',
    backgroundColor: theme.palette.primary.light,
    opacity: 0.2
  };

  const circle = (
    <div style={circleStyle}></div>
  );
  
  return (
    <Grid
      container
      direction="row"
      alignItems="flex-end"
      justify="center"
      spacing={0}
    >
      <Hidden smDown>
        <Grid item xs={'auto'} md={1}>
          { circle }
        </Grid>
      </Hidden>
      <Grid
        item
        xs={12}
        md={10}
      >
        <InputLabel style={{margin: '8px 0px', fontSize: '0.8rem'}}>
          { props.label }
        </InputLabel>
        <div style={{margin: '0px 11px'}}>
          <CustomSlider
            defaultValue={1}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            marks
            min={1}
            max={7}
            track={false}
            valueLabelDisplay="auto"
            {...props} />
        </div>
      </Grid>
      <Hidden smDown>
        <Grid item xs={'auto'} md={1}>
          { circle }
        </Grid>
      </Hidden>
      
    </Grid>
  );
}

export default DietarySlider;
