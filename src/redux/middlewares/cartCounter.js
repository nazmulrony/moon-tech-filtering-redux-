import { ADD_TO_CART } from "../actionTypes/actionTypes";

const cartCounter = (store) => (next) => (action) => {
    const state = store.getState();
    const cart = state.product.cart;
    if (action.type === ADD_TO_CART) {
        // console.log(cart.length);
        const newAction = {
            ...action,
            payload: { ...action.payload, position: cart.length },
        };
        // console.log(newAction.payload);
        return next(newAction);
    }

    return next(action);
};

export default cartCounter;
