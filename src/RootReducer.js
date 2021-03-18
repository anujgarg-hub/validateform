var initialState={
    cart:{},
    count:0
}


export default function RootReducer(state=initialState , action) {
    switch (action.type) {

        case 'Add_detail':
            state.cart[action.payload[0]]=action.payload[1] 
            state.count=state.count+1 
            console.log('cart',state.cart);   
            console.log('count',state.count);          
            return {cart:state.cart , count:state.count}

            case 'Remove_detail':
                delete state.cart[action.payload[0]]
                return {cart:state.cart}
    
        default:
            return state;
    }
}
