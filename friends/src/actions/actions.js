import axios from 'axios'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const GET_ACCOUNT_START = 'GET_ACCOUNT_START'
export const GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS'
export const GET_ACCOUNT_FAILED = 'GET_ACCOUNT_FAILED'



export function login(username, password) {
    return (dispatch) => {
        dispatch({ type: LOGIN_START })

        return axios.post('http://localhost:5000/api/login', { username, password })
            .then((response) => {
                localStorage.setItem('token', response.data.payload)
                dispatch({ type: LOGIN_SUCCESS })
            })
            
            .catch((error) => {
                dispatch({ type: LOGIN_FAILED, error })
            })
    }
}

export function getAccount() {

	return (dispatch) => { 

		dispatch({ type: GET_ACCOUNT_START })

		const headers = {
			Authorization: localStorage.getItem('token'),
		}

		axios.get('http://localhost:5000/api/friends/', { headers })
			.then((response) => {
				dispatch({ type: GET_ACCOUNT_SUCCESS, payload: response.data })
			})
			.catch((err) => {
				dispatch({ type: GET_ACCOUNT_FAILED, payload: err.response })
			})
	}
}