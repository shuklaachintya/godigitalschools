import store from '../../store';
import {
    SET_HEADERS,
    TABLE_DATA_ERROR,
    SET_SAVE_CONFIG,
    SET_COMPONENT_CONFIG,
    SET_SAVE,
    TOGGLE_CUSTOMISE_BTN,
    SET_TAB_PANEL,
    RESET_CUSTOM_CHECKBOXES
} from './action_config';

export const setCustomiseFilterList = (data: any) => {

    try {
        store.dispatch({
            type: SET_HEADERS,
            payload: data
        })
    } catch (error) {
        store.dispatch({
            type: TABLE_DATA_ERROR,
            payload: error.response.data
        });
    }

}

export const refreshCustomise = (flag: boolean) => {

    try {
        store.dispatch({
            type: RESET_CUSTOM_CHECKBOXES,
            payload: flag
        })
    } catch (error) {
        store.dispatch({
            type: TABLE_DATA_ERROR,
            payload: error.response.data
        });
    }

}

export const updateCustomSaveConfig = (data: any) => {

    try{
        store.dispatch({
            type: SET_SAVE_CONFIG,
            payload: data
        })
    }
    catch(error){
        store.dispatch({
            type: TABLE_DATA_ERROR,
            payload: error.response.data
        });
    }

}

export const setSave = (flag: boolean) => {

    try{
        store.dispatch({
            type: SET_SAVE,
            payload: flag
        })
    }
    catch(error){
        store.dispatch({
            type: TABLE_DATA_ERROR,
            payload: error.response.data
        });
    }

}

export const updateComponentConfig = (data: any) => {

    try{
        store.dispatch({
            type: SET_COMPONENT_CONFIG,
            payload: data
        })
    }
    catch(error){
        store.dispatch({
            type: TABLE_DATA_ERROR,
            payload: error.response.data
        });
    }

}

export const toggleCustomiseBtn = (flag: boolean) => {

    try{
        store.dispatch({
            type: TOGGLE_CUSTOMISE_BTN,
            payload: flag
        })
    }
    catch(error){
        store.dispatch({
            type: TABLE_DATA_ERROR,
            payload: error.response.data
        });
    }

}

export const setTabPanel = (data: any) => {

    try{
        store.dispatch({
            type: SET_TAB_PANEL,
            payload: data
        })
    }
    catch(error){
        store.dispatch({
            type: TABLE_DATA_ERROR,
            payload: error.response.data
        });
    }

}