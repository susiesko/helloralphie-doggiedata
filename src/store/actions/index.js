import * as actionTypes from './actionTypes';

export const updateProfileField = (field, value) => ({
  type: actionTypes.UPDATE_PROFILE_FIELD,
  field,
  value
});