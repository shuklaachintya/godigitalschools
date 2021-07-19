import {
    SET_HEADERS,
    SET_SAVE_CONFIG,
    SET_COMPONENT_CONFIG,
    SET_SAVE,
    TOGGLE_CUSTOMISE_BTN,
    SET_TAB_PANEL,
    RESET_CUSTOM_CHECKBOXES

} from '../actions/action_config';

const initState = {

    customFilterList: [],
    customSaveConfig: {
        userId: 'davidc',
        applicationCode: 'TRACKANDTRACE',
        pageName: 'ORDER_DETAILS_PAGE',
        viewName: '',
        viewDescription: '',
        componentConfig: []
    },
    save: false,
    refreshCustomise:false,
    showCustomise: false,
    whichTabPanel: 3

}

const customiseReducer = (state = initState, action: any) => {

    switch (action.type) {

        case SET_HEADERS:
            return {
                ...state,
                customFilterList: [...action.payload]
            }
        case SET_SAVE_CONFIG:
            return {
                ...state,
                customSaveConfig: {
                    ...state.customSaveConfig,
                    ...action.payload
                }
            }
        case SET_COMPONENT_CONFIG:
            return {
                ...state,
                customSaveConfig: {
                    ...state.customSaveConfig,
                    componentConfig: [...action.payload]
                }
            }
        case SET_SAVE:
            return {
                ...state,
                save: action.payload
            }
        case RESET_CUSTOM_CHECKBOXES:
            return{
                ...state,
                refreshCustomise: action.payload
            }
        case TOGGLE_CUSTOMISE_BTN:
            return {
                ...state,
                showCustomise: action.payload
            }
        case SET_TAB_PANEL:
            return {
                ...state,
                whichTabPanel: action.payload
            }


        default:
            return state
    }


}

export default customiseReducer;