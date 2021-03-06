import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages'

export class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: ''

  };

   static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  }



  onSubmit = (e) => {
    e.preventDefault();
    const { email, password, password2, isValidated } = this.state;
    if(password !== password2){
        this.props.createMessage({ passwordNotMatch: 'Las contraseñas no coinciden' });
    } else {
        const newUser = {
            username: email,
            password,
            email,
            isValidated
        }
        this.props.register(newUser)
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if(this.props.isAuthenticated){
        return <Redirect to="/" />;
    }

    const { email, password, password2 } = this.state
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Register</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email..."
                onChange={this.onChange}
                value={email}
              />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Constraseña..."
                onChange={this.onChange}
                value={password}
              />
            </div>
            <div className="form-group">
              <label>Confirmar contraseña</label>
              <input
                type="password"
                className="form-control"
                name="password2"
                placeholder="Confirmar constraseña..."
                onChange={this.onChange}
                value={password2}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Registro
              </button>
            </div>
            <p>
              Tienes una cuenta? <Link to="/login">Iniciar Sesión</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, { register, createMessage })(Register);