import { combineReducers } from 'redux';
import students from './students';
import errors from './errors';
import messages from './messages';
import auth from './auth';
import schools from './schools';


export default combineReducers({
    students,
    errors,
    messages,
    auth,
    schools
 });