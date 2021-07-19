const initState = {

    customViewsMenu: [],

}

const customViewsReducer = (state = initState, action: any) => {

    switch(action.type){

        case 'SET_CUSTOM_VIEWS_MENU':
            return{
                ...state,
                customViewsMenu: [...action.payload]
            }
        default:
            return state
    }


}

export default customViewsReducer;