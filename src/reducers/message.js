import * as types from './../constants/actionType';
import * as mess from './../constants/Message';
var initialState = mess.MSG_WELLCOME;

const message = (state = initialState , action ) => {
    switch (action.type){
        case types.CHANGE_MSG :
            return action.message;
        default : return [...state];
    }
}

export default message;