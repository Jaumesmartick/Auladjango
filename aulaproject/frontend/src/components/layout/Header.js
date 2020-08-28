import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth'

export class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    };

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <button onClick={this.props.logout} className="nav-link btn btn-info btn-sm text-light">Cerrar sesión</button>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Registro</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Inicio sesion</Link>
                </li>
            </ul>
        );

        return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">Gestión de Usuarios</a>
          </div>
          {isAuthenticated ? authLinks : guestLinks}
         </div>
        </nav>

        )
    }
}

const mapStatetoProps = state => ({
    auth: state.auth

});

export default connect(mapStatetoProps, { logout })(Header);