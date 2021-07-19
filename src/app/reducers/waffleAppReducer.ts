import {

    CHANGE_HEADER_TITLE,
    CHANGE_WAFFLE_SELECTED_TITLE

} from '../actions/action_config';

const iState = {

    headerTitle: "",
    waffleSelectedTitle: "Track and Trace"

}

const waffleAppReducer = (state = iState, action: any) => {

    switch (action.type) {

        case CHANGE_HEADER_TITLE:
            return {

                ...state,
                headerTitle: action.payload
            
            }
        case CHANGE_WAFFLE_SELECTED_TITLE:
            return {
                ...state,
                waffleSelectedTitle: action.payload,
                headerTitle: action.payload
            }
        default:
            return state;
    }

}

export default waffleAppReducer;