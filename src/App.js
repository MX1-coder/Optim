import logo from './logo.svg';
import './App.css';
import Heading from "./Heading";
import Banner from "./Banner";
import Tabs from "./Tabs";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact  from "./Contact";
import Home  from "./Home";
import Error from "./Error";


import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">

      <Switch>
      <Route path="/" component={Home} exact />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route component={Error} />

</Switch>

    </div>
  );
}

// const App = () => {
//   return <h1>lalit</h1>
// }

export default App;
