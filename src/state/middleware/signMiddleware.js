import {
    constants
} from '../../consts';

const signLogger = (store) => (next) => (action)=>{
    if(action.type===constants.signUser){
        console.log('USER LOGGER', action.type);
        next(action)
    }
    
}

export default signLogger;