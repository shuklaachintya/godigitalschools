import store from '../../store';


export const updateCustomViewsMenu = (data: any) => {

    try {
        store.dispatch({
            type: 'SET_CUSTOM_VIEWS_MENU',
            payload: data
        })
    } catch (error) {
        store.dispatch({
            type: 'CUSTOM_VIEWS_ERROR',
            payload: error.response.data
        });
    }

}