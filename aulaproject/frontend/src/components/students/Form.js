import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addStudent } from '../../actions/students';
import { getSchools } from '../../actions/schools';

import Select from 'react-select';

// Generate random string
    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
          });
        }

export class Form extends Component {

    // keep select input selected values
    schoolHandler = e => { this.setState({ school: e ? e.value : '' });};
    gradeHandler = e => { this.setState({ grade: e ? e.value : '' });};

    // define the 'local variables'
    state = {
        id: '',
        name: '',
        surname: '',
        school: '',
        grade: '',
        tutor: '',
        log_code: '',
        postalCode: '',
        schools:[],
    };

    // define the 'local functions' from other modules ??
    static propTypes = {
        schools: PropTypes.array.isRequired,
        addStudent: PropTypes.func.isRequired,
        getSchools: PropTypes.func.isRequired
    };

    // keep input in the field
    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onChangePostal = e => {
         const postalCode = this.state.postalCode
         this.setState({ [e.target.name]: e.target.value })
            if(postalCode.length >= 4){
                this.props.getSchools(e.target.value.toString());
                console.log('ha leido los 5 caracteres')
                console.log(this.state.schools)
            } else {
                console.log(`hay ${postalCode.length+1} caracteres ${e.target.value}`)
            }
    }


    onSubmit = e => {
        e.preventDefault();
        const  { id, name, surname, school, grade, log_code} = this.state;
        const tutor = this.props.user
        const student = { id, name, surname, school, grade, tutor, log_code};
        this.props.addStudent(student);
        this.setState({
                    id: "",
                    name: "",
                    surname: "",
                    school: "",
                    grade: "",
                    tutor: "",
                    log_code: "",
                    postalCode:""
        });
    }

    render(){
     const { id, name, surname, school, grade, tutor, log_code, postalCode } = this.state;
     const schools = this.props.schools;
     const grades = [ { value: '1', label: '1ºP' }, { value: '2', label: '2ºP' }, { value: '3', label: '3ºP' } ]
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
                    <label>Codigo Postal</label>
                    <input
                      className="form-control"
                      type="text"
                      name="postalCode"
                      onChange={this.onChangePostal}
                      value={postalCode}
                    />
                  </div>
                  <h1>{schools}</h1>
                  <div className="form-group">
                    <label>Colegio</label>
                    <Select
                    options={schools}
                    name="school"
                    value={schools}
                    onChange={this.schoolHandler}
                     />
                  </div>
                  <div className="form-group">
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
                    <Select
                    options={grades}
                    name="grade"
                    value={grades.find(item => item.value === grade)}
                    onChange={this.gradeHandler}
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

const mapStateToProps = state => ({
    schools: state.schools
});


export default connect(mapStateToProps, { addStudent, getSchools })( Form );