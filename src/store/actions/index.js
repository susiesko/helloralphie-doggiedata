import * as actionTypes from './actionTypes';

export const saveProfile = (data) => ({
  type: actionTypes.SAVE_PROFILE,
  data
});