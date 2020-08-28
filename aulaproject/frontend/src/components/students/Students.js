import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getStudents, deleteStudent } from '../../actions/students';


export class Students extends Component {
    static propTypes = {
        students: PropTypes.array.isRequired,
        getStudents: PropTypes.func.isRequired,
        deleteStudents: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getStudents();
    }

    render(){
        return(
            <Fragment>
                <h1>Estudiantes</h1>
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Id Colegio</th>
                        <th>Id Curso</th>
                        <th>Id Tutor</th>
                        <th>Code</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    { this.props.students.map(student => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.surname}</td>
                            <td>{student.id_school}</td>
                            <td>{student.id_grade}</td>
                            <td>{student.tutor}</td>
                            <td>{student.log_code}</td>
                            <td><button
                                     onClick={this.props.deleteStudent.bind
                                                (this, student.id)}
                                                className="btn btn-danger btn-sm">
                              {"  "}
                              Eliminar
                              </button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
        </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    students: state.students.students
});

export default connect(mapStateToProps, { getStudents, deleteStudent })(Students);