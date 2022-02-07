import './App.css';

import Ana from "./anasehife.js"
import Janrlar from "./Janrlar.js"
import Rock from './Rock.js';
import Teqdimat from "./Home.js"
import Tedbirler from "./tədbirlər.js"
import Contact from "./Əlaqə.js"
import Qeydiyyat from "./login-qeydiyyat/Qeydiyyat"
import {BrowserRouter as Router, Route} from "react-router-dom"
function App() {
  return (
<Router>
  <Ana/>
  {/* <Route path="/" component={Ana} /> */}
  <Route exact path="/" component={Teqdimat} />
  <Route exact path="/Janrlar" component={Janrlar} />
  <Route exact path="/Janrlar/Rock" component={Rock}/>
  <Route path="/Tədbirlər" component={Tedbirler} />
  <Route path="/Əlaqə" component={Contact} />
  <Route path = "/Qeydiyyat" component = {Qeydiyyat} />
</Router>
    );
  
}

export default App;
