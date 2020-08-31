import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Alerts extends Component {

    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired,
    };

    componentDidUpdate(prevProps){
        const { error, alert, message } = this.props;
        if(error !== prevProps.error){
           if(error.msg.name)
                alert.error(`Nombre: ${error.msg.name.join()}`); //Join to convert from array to string
           if(error.msg.surname)
                alert.error(`Apellido: ${error.msg.surname.join()}`);
           if(error.msg.non_field_errors)
                alert.error(error.msg.non_field_errors.join());
            }

        if(message !== prevProps.message){
           if(message.deleteStudent)
             alert.success(message.deleteStudent);
           if(message.addStudent)
             alert.success(message.addStudent);
           if(message.passwordNotMatch)
             alert.error(message.passwordNotMatch);
        }
    }

    render() {
        return <Fragment />;
    }
}

const mapStateToProps = (state) => ({
   error: state.errors,
   message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));