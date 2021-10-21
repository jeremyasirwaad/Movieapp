import React from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./components/Header";
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import Add from './components/Add'
import { MovieProvier } from "./components/MovieContext";
import Footer from "./components/Footer";

function App() {

  return (
    <MovieProvier>
    <Router>
      <Header />
      <Switch>
        <Route exact path = "/">
          <WatchList />
        </Route>
        <Route exact path = "/watched">
          <Watched />
        </Route>
        <Route exact path = "/add">
          <Add />
        </Route>
      </Switch>
      <Footer />
    </Router>
    </MovieProvier>
  );
}

export default App;
