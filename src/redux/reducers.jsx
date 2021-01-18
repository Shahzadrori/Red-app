import { initstate } from "./state";
import { BUY_ITEMS } from "./type";

export const Reducer=(state = initstate , action)=>{
    switch(action.type){
        case BUY_ITEMS :
            return{
                ...state,
                items: state.items + action.payload
            }
            default : return state;
    }
}