import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addStudent } from '../../actions/students';


export class Form extends Component {

    state = {
        id: '',
        name: '',
        surname: '',
        id_school: '',
        id_grade: '',
        tutor: '',
        log_code: ''
    };

    static propTypes = {
        addStudent: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { id, name, surname, id_school, id_grade, tutor, log_code } = this.state;
        const student = { id, name, surname, id_school, id_grade, tutor, log_code };
        this.props.addStudent(student);
        this.setState({
                    id: "",
                    name: "",
                    surname: "",
                    id_school: "",
                    id_grade: "",
                    tutor: "",
                    log_code: ""
        });
    }

    render(){
     const { id, name, surname, id_school, id_grade, tutor, log_code } = this.state;
        return(
        <div className="card card-body mt-4 mb-4">
                <h2>Añadir estudiante</h2>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>ID</label>
                    <input
                      className="form-control"
                      type="text"
                      name="id"
                      onChange={this.onChange}
                      value={id}
                    />
                  </div>
                  <div className="form-group">
                    <label>Nombre</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      onChange={this.onChange}
                      value={name}
                    />
                  </div>
                  <div className="form-group">
                    <label>Apellido</label>
                    <input
                      className="form-control"
                      type="text"
                      name="surname"
                      onChange={this.onChange}
                      value={surname}
                    />
                  </div>
                  <div className="form-group">
                    <label>Colegio</label>
                    <textarea
                      className="form-control"
                      type="text"
                      name="id_school"
                      onChange={this.onChange}
                      value={id_school}
                    />
                  </div> <div className="form-group">
                    <label>Tutor</label>
                    <textarea
                      className="form-control"
                      type="text"
                      name="tutor"
                      onChange={this.onChange}
                      value={tutor}
                    />
                  </div>
                  <div className="form-group">
                    <label>Curso</label>
                    <textarea
                      className="form-control"
                      type="text"
                      name="id_grade"
                      onChange={this.onChange}
                      value={id_grade}
                    />
                  </div><div className="form-group">
                    <label>Código</label>
                    <textarea
                      className="form-control"
                      type="text"
                      name="log_code"
                      onChange={this.onChange}
                      value={log_code}
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      Guardar
                    </button>
                  </div>
                </form>
            </div>
        )
}
}

export default connect(null, { addStudent })( Form );