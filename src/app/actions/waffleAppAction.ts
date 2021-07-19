import { CHANGE_WAFFLE_SELECTED_TITLE } from './action_config';
import store from '../../store';

export const anotherName = (name: any) => {
    return {
        type: 'CHANGE_APP',
        payload:name   
    }
}

export const changeWaffleSelectedTitle = (title : string) => {
    
    store.dispatch({
        type: CHANGE_WAFFLE_SELECTED_TITLE,
        payload: title
    })
}