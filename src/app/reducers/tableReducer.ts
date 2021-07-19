import {

    UPDATE_REQUEST_DATA,
    UPDATE_PAGINATION_DATA,
    GET_ORDER_DETAILS,
    SET_CURRENT_ORDER_DETAIL,
    SET_HISTORY_DATA,
    SET_TABLE_LINK,
    RESET_TABLE_LINK,
    UPDATE_HEADER_NAMES,
    SET_LOADING,
    SET_TITLE

} from '../actions/action_config'

const initState = {

    requestData: {
        columns: [],
        query: '',
        sort: '',
        globalsearch:'',
        recordsPerPage: 1,
        pageNo: 1,
        transformationType: ''
    },
    title: 'All Orders',
    loading:false,
    header_names:[],
    table_link:false,
    pagination: {
        numberOfPages: 1,
        totalRecords: 0,
        pages:[]
    },
    getOrderDetailsData: {
        showOrderDetails: false,
        whichOrderId: 0,
        whichOrderLineItemId: 0
    },
    currentOrderDetailsData: {
        current: {}
    },
    setOrderHistoryData: {
        allHistoryData: []
    }
}

const tableReducer = (state = initState, action: any) => {

    switch (action.type) {

        case UPDATE_REQUEST_DATA:
            return {
                ...state,
                requestData: {
                    ...state.requestData,
                    ...action.payload
                }
            }
        case UPDATE_HEADER_NAMES:
            return{
                ...state,
                header_names: [...action.payload]
            }
        case SET_LOADING:
            return{
                ...state,
                loading: action.payload
            }
        case UPDATE_PAGINATION_DATA:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    ...action.payload
                }

            }
        case SET_TITLE:
            return{
                ...state,
                title: action.payload
            }
        case GET_ORDER_DETAILS:
            return {
                ...state,
                getOrderDetailsData: {
                    ...state.getOrderDetailsData,
                    ...action.payload
                }

            }
        case SET_CURRENT_ORDER_DETAIL:
            return {
                ...state,
                currentOrderDetailsData: {
                    ...state.currentOrderDetailsData,
                    ...action.payload
                }

            }

        case SET_HISTORY_DATA:
            return {
                ...state,
                setOrderHistoryData: {
                    ...state.setOrderHistoryData,
                    ...action.payload
                }
                

            }
        case SET_TABLE_LINK:
            return{
                ...state,
                table_link: action.payload
            }
        case RESET_TABLE_LINK:
            return{
                ...state,
                table_link: false
            }
        default:
            return state

    }

}

export default tableReducer;