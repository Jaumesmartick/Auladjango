import React, {Component} from 'react';
import { validateUser } from '../../actions/auth';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

class Validate extends Component {

    // componentDidMount() {
    //     this.props.validateUser(this.props.match.params.validCode)
    // }

    validate = () => {
        const isValidated = this.props.match.params.validCode
            this.props.validateUser(isValidated)
    }

    render() {
        console.log(this.props.isValidated)
        if(this.props.isValidated){
        return <Redirect to="/login" />;
        }
        return (
            <div>
                <h1>Confirmar registro de usuario</h1>
                <p>Presione el botón inferior para confirmar el registro del usuario</p>
                <button onClick={this.validate}>
                    Validar
                </button>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isValidated: state.auth.isValidated
});


export default connect(mapStateToProps, { validateUser })(Validate);