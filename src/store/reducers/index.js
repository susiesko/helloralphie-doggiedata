import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/object';

const initialState = {
  profile: {
    name: '',
    breed: '',
    birthdate: ''
  },
  newLogItem: {
    date: '',
    weight: ''
  }
};

const updateProfileField = (state, fieldName, fieldValue) => {
  const updatedProfile = updateObject(state.profile, { [fieldName]: fieldValue });
  return updateObject(state, { profile: updatedProfile });
};

const updateLogField = (state, fieldName, fieldValue) => {
  const updatedLogItem = updateObject(state.newLogItem, { [fieldName]: fieldValue });
  return updateObject(state, { newLogItem: updatedLogItem });
};

const reducer = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.UPDATE_PROFILE_FIELD: return updateProfileField(state, action.field, action.value);
    case actionTypes.UPDATE_LOG_FIELD: return updateLogField(state, action.field, action.value);
    default: return state;
  }
}

export default reducer;