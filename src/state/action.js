import {constants} from '../consts';

export const getWidget = () => {
  return{
    type: constants.getWidget
  }
}

export const setWidget = () => {
  return{
    type: constants.getWidget
  }
}

export const setData = (data) => {
  return{
    type: constants.setData,
    data
  }
}

export const fetchDataRequest = () => {
  return{
    type: constants.fetchRequest,
  }
}

export const fetchDataSuccess = (data) => {
  return{
    type: constants.fetchDataSuccess,
    data
  }
}

export const fetchDataFaliure = () => {
  return{
    type: constants.fetchDataFailure,
  }
}

