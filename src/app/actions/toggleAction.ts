import {
    UPDATE_TOGGLE,DELETE_TOGGLE,DROP_VALUE
} from './action_config';
import store from '../../store';

export const updateToggle= (toggle:any) => {
   store.dispatch ({
        type: UPDATE_TOGGLE,
        payload: toggle
    })

}

export const deleteToggle=(toggle:any)=>{
    store.dispatch ({
        type: DELETE_TOGGLE,
        payload: toggle
    })

}

export const dropValue=(value:any)=>{
    store.dispatch ({
        type: DROP_VALUE,
        payload: value
    })

}
