import axios from 'axios';
import { GET_STUDENTS, DELETE_STUDENT, ADD_STUDENT } from './types';
import { createMessage, returnErrors } from './messages'
import { tokenConfig } from './auth'


// GET STUDENTS
export const getStudents = () => (dispatch, getState) => {
    axios.get('/api/students/', tokenConfig(getState)) //tokenConfig to access private routes
        .then(res => {
            dispatch({
            type: GET_STUDENTS,
            payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors( err.response.data, err.response.status)));
};


// DETELE STUDENT
export const deleteStudent = id => (dispatch, getState) => {
    axios.delete(`/api/students/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteStudent: "Estudiante eliminado" }));
            dispatch({
            type: DELETE_STUDENT,
            payload: id
            });
        })
        .catch(err => console.log(err));
};

// ADD STUDENT
export const addStudent = student => (dispatch, getState) => {
    axios
        .post('/api/students/', student, tokenConfig(getState))
            .then(res => {
                dispatch(createMessage({ addStudent: "Estudiante añadido" }));
                dispatch({
                type: ADD_STUDENT,
                payload: res.data
                });
            })
        .catch(err => dispatch(returnErrors( err.response.data, err.response.status)));
};