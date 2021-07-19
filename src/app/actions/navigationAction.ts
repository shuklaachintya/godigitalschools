import {
    GET_MENU_DATA,
    MENU_DATA_ERROR
} from './action_config';
import store from '../../store';
import HttpService from '../../core/services/HttpService';
import { API_URI_MENU } from '../../shared/global_constants';
import { Config } from '../../shared/global_config'

export const getMenuData = async (id:number) => {

    try {

        const httpService = new HttpService();

        const url = Config.getUrl(API_URI_MENU+`/${id}/menus`)

        let data : any[] = []

        await httpService.get(url)

        .then((res:any) => {

            data = res.data

            store.dispatch({

                type: GET_MENU_DATA,

                payload: data

            })

        })

    } catch (err) {

        store.dispatch({

            type: MENU_DATA_ERROR,

            payload: err.response.data

        })

    }      

}
