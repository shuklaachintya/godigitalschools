import { EXPERIENCE_APP_ERROR, GET_EXPERIENCE_DATA, EXP_APP_SELECTED } from './action_config'
import store from '../../store';
import HttpService from '../../core/services/HttpService';
import { API_EXPERIENCE_DATA } from '../../shared/global_constants'
import { Config } from '../../shared/global_config'

export const getExperienceData = async () => {
    try {
        const httpService = new HttpService();
        const url = Config.getUrl(API_EXPERIENCE_DATA)

        //let data : any[] = []

        await httpService.get(url)
        .then((res:any) => {
            //data = res.data

            store.dispatch({
                type: GET_EXPERIENCE_DATA,
                payload: res.data
            })
        })
    } catch (err) {
        store.dispatch({
            type: EXPERIENCE_APP_ERROR,
            payload: err?.response?.data
        })
    }      
}

export const expAppSelected =  (id:number) =>{
    try {
        store.dispatch({
            type: EXP_APP_SELECTED,
            payload: id
        })
    } catch (err) {
        store.dispatch({
            type: EXPERIENCE_APP_ERROR,
            payload: err.response.data
        })
    }
}