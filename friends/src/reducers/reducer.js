import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    GET_ACCOUNT_START,
    GET_ACCOUNT_SUCCESS,
    GET_ACCOUNT_FAILED
} from '../actions/actions'


const initialState = {
    friends: [],
    isLoading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case GET_ACCOUNT_SUCCESS: {
            return {
                ...state,
                friends: action.payload,
                isLoading: false,
                error: null
            }
        }

        default: {
            return state;
        }
    }
}

export default reducer;