import {
    GET_MENU_DATA,
    MENU_DATA_ERROR
} from '../actions/action_config'

const initState = {

    data:[],
    error:[],
}

const navigationReducer = (state = initState, action: any) => {
    
    switch (action.type) {
        case GET_MENU_DATA:
            return {
                ...state,
                data: action.payload
            }
        
        case MENU_DATA_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state

    }

}

export default navigationReducer;