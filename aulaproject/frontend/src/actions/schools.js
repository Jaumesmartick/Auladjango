import axios from 'axios';
import { GET_SCHOOLS } from './types';
import { returnErrors } from './messages'
import { tokenConfig } from './auth'


// GET SCHOOLS
export const getSchools = () => (dispatch, getState) => {
    axios.get('/api/schools/', tokenConfig(getState)) //tokenConfig to access private routes
        .then(res => {
            dispatch({
            type: GET_SCHOOLS,
            payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors( err.response.data, err.response.status)));
};