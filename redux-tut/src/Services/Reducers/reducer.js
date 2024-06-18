import { ADD_TO_CART,REMOVE_FROM_CART } from "../constants";

const initialState = {
    cartData: []
}

export default function cartItems(State=initialState.cartData, action){
    switch(action.type){
        case ADD_TO_CART:
            // console.log('Reducer = ',action);
            return[
                ...State,
                {cartData: action.data,}
            ]
            break;
        case REMOVE_FROM_CART:
            const index = State.findIndex(item => item.cartData.name === action.data.name);
            if (index >= 0) {
                const newState = [...State];
                newState.splice(index, 1);
                return newState;
            }
            return State;
        default:
            return State;
    }
}