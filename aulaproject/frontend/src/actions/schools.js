import axios from 'axios';
import { GET_SCHOOLS } from './types';
import { returnErrors } from './messages'
import { tokenConfig } from './auth'


// GET SCHOOLS
export const getSchools = cod_postal => (dispatch, getState) => {
    axios.get('/api/schools/', tokenConfig(getState), cod_postal) //tokenConfig to access private routes
        .then(res => {
            dispatch({
            type: GET_SCHOOLS,
            payload: res.data.nombre
            });
        })
        .catch(err => dispatch(returnErrors( err.response.data, err.response.status)));
};