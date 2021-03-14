import React from 'react';
import { behaviors } from '../../helpers/behavioralInfo';
import ToggleButtonStyled from '../Elements/ToggleButtonStyled/ToggleButtonStyled';
import ToggleButtonGroupStyled from '../Elements/ToggleButtonGroupStyled/ToggleButtonGroupStyled';

const BehavioralInfo = () => {
  const toggleButtons = behaviors.map(btn => {
    return <ToggleButtonStyled 
      key={btn.value} 
      value={btn.value}
      xs={3}
    >
      {btn.text}
    </ToggleButtonStyled>
  });

  return (
      <ToggleButtonGroupStyled        
        onChange={(ev, val) => console.log(val)}
      >
        {toggleButtons}
      </ToggleButtonGroupStyled>
  );
}

export default BehavioralInfo;
