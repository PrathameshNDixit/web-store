import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cartslice",
    initialState: {
        cart: [],
        quantity:0
    },
    reducers: {
        addToCart: (state, action) => {
            const cartItem = state.cart.find(
                (item) => item.id === action.payload
            );
            if (cartItem) {
                cartItem.quantity += 1;
                state.quantity+=1;
                return;
            }
            state.cart.push({
                quantity: 1,
                id: action.payload,
            });
            state.quantity+=1;
        },
        removeFromCart: (state, action) => {
            const cartItem = state.cart.find(
                (item) => item.id === action.payload
            );
            if (cartItem) {
                cartItem.quantity -= 1;
                if (cartItem.quantity === 0) {
                    state.cart = state.cart.filter(
                        (item) => item.id !== action.payload
                    );
                }
                state.quantity-=1;
                return;
            }
        },
    },
});
export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
