import {
    constants
} from '../../consts';

const initialState = {
    isSignin: true
}

const signInReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case (constants.signUser):
            return {
                isSignin: !state.isSignin
            }

            default:
                return state
    }
}

export default signInReducer;