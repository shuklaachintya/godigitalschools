import {

    UPDATE_REQUEST_DATA,
    UPDATE_PAGINATION_DATA,
    TABLE_DATA_ERROR,
    GET_ORDER_DETAILS,
    SET_CURRENT_ORDER_DETAIL,
    SET_HISTORY_DATA,
    SET_TABLE_LINK,
    RESET_TABLE_LINK,
    UPDATE_HEADER_NAMES,
    SET_LOADING,
    SET_TITLE

} from './action_config';
import store from '../../store';
import HttpService from '../../core/services/HttpService';

export const updateRequestData = (data: any) => {

    try {
        setLoading(true)
        store.dispatch({
            type: UPDATE_REQUEST_DATA,
            payload: data
        })
    } catch (error) {
        store.dispatch({
            type: TABLE_DATA_ERROR,
            payload: error.response.data
        });
    }

}

export const updateHeaderNames = async (header_ids: any[],apiView: string,metaDataURL: any) => {

    try {
        //setLoading(true);
        //let data = await fetchHeaderNames(header_ids,apiView);
        const httpService = new HttpService();

        let header_names: any[] = [];
        await httpService.get(`https://csc.csc-dev.podium.io/api/orders/supply-automation/define?metadataType=${apiView}`)
        .then((res: any) => {
            
            header_names = header_ids.map((header_id: string) => {

                const header_obj = res.data.columns.find((header_object: any) => header_object.apiName === header_id)
                return header_obj!.displayName
            
            })
            console.info(header_names)
            
            store.dispatch({
                type: UPDATE_HEADER_NAMES,
                payload: header_names
            })
            
        })
        //console.info(data);
    } catch (error) {
        store.dispatch({
            type: TABLE_DATA_ERROR,
            payload: error.response.data
        });
    }

}

export const updateTableTitle = (title: string) => {


    try{

        store.dispatch({
            type:SET_TITLE,
            payload: title
        })

    }
    catch(error){
        store.dispatch({
            type: TABLE_DATA_ERROR,
            payload: error.response.data
        });
    }

}

export const setLoading = (flag: boolean) =>{

    try{

        store.dispatch({
            type:SET_LOADING,
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

/* const fetchHeaderNames = (header_ids: string[], apiView: string) => {

    try {
        const httpService = new HttpService();
        let header_names: any[] = [];
        httpService.get(`https://csc.csc-dev.podium.io/api/orders/supply-automation/define?metadataType=${apiView}`)
        .then((res: any) => {
            
            header_names = header_ids.map((header_id: string) => {

                const header_obj = res.data.columns.find((header_object: any) => header_object.apiName === header_id)
                return header_obj.displayName
            
            })
            console.info(header_names)
        })
        console.info(header_names);
        return header_names;

    } catch (error) {
        store.dispatch({
            type: TABLE_DATA_ERROR,
            payload: error.response.data
        });
    }
} */

export const updatePaginationData = (data: any) => {

    try {
        store.dispatch({
            type: UPDATE_PAGINATION_DATA,
            payload: data
        })
    } catch (error) {
        store.dispatch({
            type: TABLE_DATA_ERROR,
            payload: error.response.data
        });
    }

}

export const getOrderDetails = (data: any) => {
    try {
        store.dispatch({
            type: GET_ORDER_DETAILS,
            payload: data
        })
    } catch (error) {
        store.dispatch({
            type: TABLE_DATA_ERROR,
            payload: error.response.data
        });
    }
}

export const setCurrentOrderDetail = (data: any) => {
    try {
        store.dispatch({
            type: SET_CURRENT_ORDER_DETAIL,
            payload: data
        })
    } catch (error) {
        store.dispatch({
            type: TABLE_DATA_ERROR,
            payload: error.response.data
        });
    }
}

export const setHistoryData = (data: any) => {
    try {
        store.dispatch({
            type: SET_HISTORY_DATA,
            payload: data
        })
    } catch (error) {
        store.dispatch({
            type: TABLE_DATA_ERROR,
            payload: error.response.data
        });
    }
}

export const setTableLink = (flag: boolean) => {
    try {
        store.dispatch({
            type: SET_TABLE_LINK,
            payload: flag
        })
    } catch (error) {
        store.dispatch({
            type: TABLE_DATA_ERROR,
            payload: error.response.data
        });
    }
}
export const resetTableLink = () => {
    try {
        store.dispatch({
            type: RESET_TABLE_LINK
        })
    } catch (error) {
        store.dispatch({
            type: TABLE_DATA_ERROR,
            payload: error.response.data
        });
    }
}