import * as actionTypes from './actionTypes';
import axios from 'axios';

export const initializeRequest = () => {
    return {
        type: actionTypes.HOME_WAITING
    }
}

export const login = (credentials) =>{
    return dispatch => {

        //dispatch(initializeRequest());
        // axios.post('/laurl/api/login', credentials)
        //     .then(response => {
        //         if (response.data.status === 201) {
                     dispatch(logging("145755SDFSD"));
        //         } else {
                    
        //         }
        //     })
    }

}

export const logging = (token) => {
    return {
        type: actionTypes.HOME_LOGIN,
        token: token
    }
};

export const joinToUs = () => {
    return {
        type: actionTypes.HOME_JOIN_TO_US
    }
}

export const joinToUsClosed = () => {
    return {
        type: actionTypes.HOME_JOIN_TO_US_CLOSED
    }
}