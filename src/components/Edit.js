import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
class Edit extends Component {

  constructor(props) {
    super(props)

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);

    // this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      id: this.props.match.params.id,
        title: '',
        description: ''

    }
  }



  componentDidMount() {
    // console.log(this.props.match.params.id)
    console.log(this.state.id)
    axios.get('http://localhost:8000/api/service/edit/'+this.props.match.params.id)
    // axios.get('http://localhost/laravel-ract/test/'+this.props.obj.id)
    // axios.get('http://localhost:8000/api/service/edit/${this.props.match.params.id}')
      .then(res => {

        this.setState({
          title: res.data.title,
          description: res.data.description,

        });
      })

      .catch((error) => {
        console.log(error);
      })
  }

  onChangeTitle(e) {
    this.setState({ title: e.target.value })
  }

  onChangeDescription(e) {
    this.setState({ description: e.target.value })
  }



  // onSubmit(e) {
  //   e.preventDefault()

  //   const productObject = {
  //     title: this.state.title,
  //     description: this.state.description,

  //   };

  //   axios.put('http://localhost/laravel-ract/products/'+this.props.match.params.id, productObject)
  //     .then((res) => {
  //       console.log(res.data)
  //       console.log('Student successfully updated')
  //     }).catch((error) => {
  //       console.log(error)
  //     })

  //   // Redirect to Student List
  //   this.props.history.push('/List')
  // }


  render() {
    // console.log(this.props.match.params.id);
    return (
<section class="" id="">
      <div class="container">
          <div class="text-center">
              <h2 class="section-heading text-uppercase">Add</h2>
          </div>
          <form id="contactForm" name="sentMessage" novalidate="novalidate" onSubmit={this.onSubmit}>
            <div class="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input type="text" class="form-control" id=""value={this.state.title} onChange={this.onChangeTitle}  placeholder="Title" />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Description</label>
                <textarea class="form-control" id="" placeholder="Description"value={this.state.description} onChange={this.onChangeDescription}></textarea>
            </div>
            <div class="form-group">
                <label for="exampleFormControlFile1">Image</label>
                <input type="file"  class="form-control-file" id="exampleFormControlFile1" onChange={this.onChangeImg}/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
      </div>
  </section>
    );
  }
}
export default withRouter(Edit);