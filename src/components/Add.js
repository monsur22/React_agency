import React,{ Component }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';

class Add extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeImg = this.onChangeImg.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      title: '',
      description: '',
      img: null,
    }
  }

  onChangeTitle(e) {
    this.setState({ title: e.target.value })
  }

  onChangeDescription(e) {
    this.setState({ description: e.target.value })
  }

  onChangeImg(e) {

      this.setState({ img: e.target.files[0],loaded: 0, })

  }
//   onChangeImg=event=>{

//     this.setState({
//       img: event.target.files[0],
//       loaded: 0,
//     })
// }

  onSubmit(e) {
    e.preventDefault()
    const data = new FormData()

    data.append('title', this.state.title)
    data.append('description', this.state.description)
    data.append('img', this.state.img)

    axios.post('http://localhost:8000/api/service', data)
      .then(res => console.log(res.data));

    this.setState({ title: '', description: '',img: ''})
  }

  render() {
    return(

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
export default Add;
