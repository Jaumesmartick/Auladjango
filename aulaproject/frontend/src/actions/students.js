import axios from 'axios';
import { GET_STUDENTS, DELETE_STUDENT, ADD_STUDENT } from './types';
import { createMessage, returnErrors } from './messages'


// GET STUDENTS

export const getStudents = () => dispatch => {
    axios.get('/api/students/')
        .then(res => {
            dispatch({
            type: GET_STUDENTS,
            payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors( err.response.data, err.response.status)));
};


// DETELE STUDENT

export const deleteStudent = id => dispatch => {
    axios.delete(`/api/students/${id}`)
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

export const addStudent = student => dispatch => {
    axios
        .post('/api/students/', student)
            .then(res => {
                dispatch(createMessage({ addStudent: "Estudiante añadido" }));
                dispatch({
                type: ADD_STUDENT,
                payload: res.data
                });
            })
        .catch(err => dispatch(returnErrors( err.response.data, err.response.status)));
};