import {
    SET_SCHEDULER_MODE,
    SCHEDULER_ERROR,
    SET_SCHEDULER_DATE
} from './action_config';
import store from '../../store';

export const updateSchedulerMode = (mode: string) => {

    try {
        store.dispatch({
            type: SET_SCHEDULER_MODE,
            payload: mode
        })
    } catch (error) {
        store.dispatch({
            type: SCHEDULER_ERROR,
            payload: error.response.data
        });
    }

}
export const updateSchedulerDate = (date: any) => {

    try {
        store.dispatch({
            type: SET_SCHEDULER_DATE,
            payload: date
        })
    } catch (error) {
        store.dispatch({
            type: SCHEDULER_ERROR,
            payload: error.response.data
        });
    }

}