import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/object';

const initialState = {
  profileForm: {}
};

const updateProfileField = (state, fieldName, fieldValue) => {
  const updatedProfileForm = updateObject(state.profileForm, { [fieldName]: fieldValue });
  return updateObject(state, { profileForm: updatedProfileForm });
};

const reducer = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.UPDATE_PROFILE_FIELD: return updateProfileField(state, action.field, action.value);
    default: return state;
  }
}

export default reducer;