import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Add from './components/Add';
import List from './components/List';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <Router>
    <div>
      <Nav />
        <Switch>
          <Route  exact  path="/"><Home /></Route>
          <Route path="/services"><Services /></Route>
          <Route path="/portfolio"><Portfolio /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/team"><Team /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/add"><Add /></Route>
          <Route path="/add"><Add /></Route>
          <Route path="/list"><List /></Route>
        </Switch>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
