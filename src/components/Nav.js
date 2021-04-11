import React, { Component }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class Nav extends Component {
  render() {
    return(

        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                {/* <a class="navbar-brand js-scroll-trigger" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="" /></a> */}
                <Link class="navbar-brand js-scroll-trigger" to="/"><img src="assets/img/navbar-logo.svg" alt="" /></Link>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ml-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ml-auto">
                        {/* <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#services">Services</a></li> */}
                        <li class="nav-item"><Link class="nav-link js-scroll-trigger" to="/services">Services</Link></li>
                        <li class="nav-item"><Link class="nav-link js-scroll-trigger" to="/portfolio">Portfolio</Link></li>
                        <li class="nav-item"><Link class="nav-link js-scroll-trigger" to="/about">About</Link></li>
                        <li class="nav-item"><Link class="nav-link js-scroll-trigger" to="/team">Team</Link></li>
                        <li class="nav-item"><Link class="nav-link js-scroll-trigger" to="/contact">Contact</Link></li>
                        <li class="nav-item"><Link class="nav-link js-scroll-trigger" to="/add">Add</Link></li>
                        <li class="nav-item"><Link class="nav-link js-scroll-trigger" to="/list">List</Link></li>
                        <li class="nav-item"><Link class="nav-link js-scroll-trigger" to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>


    );
  }
}
export default Nav;
