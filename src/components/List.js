
import React from 'react';

import axios from 'axios';
import Table from 'react-bootstrap/Table';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {

    axios.get('http://localhost:8000/api/service')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })

  }
  removeData(id) {
    console.log(id);
  }

  render() {
    return (
      <section class="page-section" id="about">
      <div class="container">
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {this.state.persons.map((repo) => {
          return (
            <tr>
              <td>{repo.id}</td>
              <td>{repo.title}</td>
              <td><img style={{width:100}} src={"http://localhost:8000/"+repo.img}></img></td>
              <td>
                <Link className="edit-link" to={  "/Edit/"+repo.id }>
                  Edit
                </Link>
                <button size="sm" variant="danger" onClick={() => this.removeData(repo.id)}>Delete</button>


              </td>

            </tr>
          );
        })}
        </tbody>
      </Table>
    </div>
    </div>
  </section>
      // <ul>
      //   { this.state.persons.map(person => <li>{person.title}</li>)}
      // </ul>
    )
  }
}