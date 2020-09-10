import { constants } from '../../consts';

const initialState = {
  widgets: [
    { name: 'First Widget', value: 33 },
    { name: 'Second Widget', value: 46 }
  ]
}

const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.getWidget:
      return state.widgets;
    default:
      return state
  }
}

export default widgetReducer;