import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { behaviors as allBehaviors } from '../../helpers/behavioralInfo';
import ToggleButtonStyled from '../Elements/ToggleButtonStyled/ToggleButtonStyled';
import ToggleButtonGroupStyled from '../Elements/ToggleButtonGroupStyled/ToggleButtonGroupStyled';

import * as actions from '../../store/actions/index';

const BehavioralInfo = () => {
  const selectedBehaviors = useSelector(state => state.newLogItem.behaviors);
  const dispatch = useDispatch();

  const toggleButtons = allBehaviors.map(btn => {
    const selected = selectedBehaviors.find(b => b === btn.value);
    return (
      <ToggleButtonStyled 
        key={btn.value} 
        value={btn.value}
        selected={selected}
      >
        {btn.text}
      </ToggleButtonStyled>
    )
  });

  const onToggle = (ev, val) => {
    let newVal = [...selectedBehaviors];

    if (newVal.find(b => b === val[0])){
      newVal = newVal.filter(b => b !== val[0]);
    }
    else{
      newVal.push(val[0]);
    }
    dispatch(actions.updateLogField('behaviors', newVal));
  }
  return (
      <ToggleButtonGroupStyled        
        onChange={ onToggle }
      >
        {toggleButtons}
      </ToggleButtonGroupStyled>
  );
}

export default BehavioralInfo;
