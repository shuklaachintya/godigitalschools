import {
    SET_SCHEDULER_MODE,
    SET_SCHEDULER_DATE
} from '../actions/action_config';

const initState= {

    mode : 'month',
    date : new Date()

}

const schedulerReducer = (state = initState,action:any) => {

    switch(action.type){

        case SET_SCHEDULER_MODE:
            return {
                ...state,
                mode: action.payload
            }
            case SET_SCHEDULER_DATE:
                return {
                    ...state,
                    date: action.payload
                }
        default:
            return state;
    }

}

export default schedulerReducer;