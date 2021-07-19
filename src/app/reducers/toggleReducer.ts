import { 
    UPDATE_TOGGLE,DELETE_TOGGLE, DROP_VALUE

} from '../actions/action_config'

const initState:{checked:number[],value:number} = {

    //toggles:[{key:"toggleA",name:"Toggle A",state:false}]
    checked:[],
    value:-1
    
}

const toggleReducer=(state = initState, action: any)=>{
      
      
    const index = state.checked.indexOf(action.payload);
     
 
    switch(action.type){
        

        case UPDATE_TOGGLE:
            return { 
                ...state,          
                checked:[...state.checked,action.payload]
            }

        case DELETE_TOGGLE:
            return{
             ...state,     
            checked:[...state.checked.filter(item => item !== action.payload)]
        }

        case DROP_VALUE:
            return {
                ...state,
                value:action.payload
            }
            
        default :
           return state;

    } 
      
}



export default toggleReducer;