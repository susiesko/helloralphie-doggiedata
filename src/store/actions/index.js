import * as actionTypes from './actionTypes';

export const updateProfileField = (field, value) => ({
  type: actionTypes.UPDATE_PROFILE_FIELD,
  field,
  value
});
export const updateLogField = (field, value) => ({
  type: actionTypes.UPDATE_LOG_FIELD,
  field,
  value
});