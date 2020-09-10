import { constants } from '../../consts';

const initialState = {
  data: {},
  loading: false
}

const dataReducer = (state = initialState, action) => {

  switch (action.type) {
    case(constants.fetchRequest):
      return {
        ...state,
        loading: true
      }
    case(constants.fetchDataSuccess):
      return{
        ...state,
        loading: false,
        data: action.data
      }
    case(constants.fetchDataFailure):
      return{
        ...state,
        loading: false
      }
    case constants.getData:
      return state.data;

    case constants.setData:
      return{
        ...state,
        data: action.data
      }
    default:
      return state
  }
}

export default dataReducer;