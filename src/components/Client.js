import React, { Component }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class Client extends Component {
  render() {
    return(
      <div class="py-5">
      <div class="container">
          <div class="row">
              <div class="col-md-3 col-sm-6 my-3">
                  <a href="#!"><img class="img-fluid d-block mx-auto" src="assets/img/logos/envato.jpg" alt="" /></a>
              </div>
              <div class="col-md-3 col-sm-6 my-3">
                  <a href="#!"><img class="img-fluid d-block mx-auto" src="assets/img/logos/designmodo.jpg" alt="" /></a>
              </div>
              <div class="col-md-3 col-sm-6 my-3">
                  <a href="#!"><img class="img-fluid d-block mx-auto" src="assets/img/logos/themeforest.jpg" alt="" /></a>
              </div>
              <div class="col-md-3 col-sm-6 my-3">
                  <a href="#!"><img class="img-fluid d-block mx-auto" src="assets/img/logos/creative-market.jpg" alt="" /></a>
              </div>
          </div>
      </div>
  </div>

    );
  }
}
export default Client;
