var initialState={
    cart:{}
}


export default function RootReducer(state=initialState , action) {
    switch (action.type) {

        case 'Add_detail':
            state.cart[action.payload[0]]=action.payload[1]   
            console.log('cart',state.cart);          
            return {cart:state.cart}

            case 'Remove_detail':
                delete state.cart[action.payload[0]]
                return {cart:state.cart}
    
        default:
            return state;
    }
}
