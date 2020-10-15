import * as types from './../constants/actionType';

export const actByProduct = (product, quantity) => {
    return {
        type : types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type : types.CHANGE_MSG,
        message
    }
}