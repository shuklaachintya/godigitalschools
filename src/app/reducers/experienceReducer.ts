import {GET_EXPERIENCE_DATA, EXPERIENCE_APP_ERROR, EXP_APP_SELECTED} from '../actions/action_config'

const initState = {
    data: [],
    error: [],
    whichExpAppSelected: 0,
}

const experienceReducer = (state = initState, action:any) => {
    
    switch(action.type){
        case GET_EXPERIENCE_DATA :
            return{
                ...state,
                data: [...action.payload],
            }
        case EXPERIENCE_APP_ERROR:
            console.error(action.payload)
            return{
                ...state,
                error: action.payload
            }
        case EXP_APP_SELECTED:
            return{
                ...state,
                whichExpAppSelected: action.payload
            }
        default:
            return state
    }
};

export default experienceReducer;