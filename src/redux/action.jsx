import { BUY_ITEMS } from "./type"

export const buyitem=(values)=>{
    return{
        type:     BUY_ITEMS,
        payload   : values
    }
}