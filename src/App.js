import React from 'react';
import './App.css';
<<<<<<< HEAD
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
=======
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
>>>>>>> origin/main
import Dia from './Dia';
import './calendario.css'
import Cabecalho from './Cabecalho';
import NovaTarefa from './NovaTarefa';


function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Router>
        <Switch>
          <Route exact path="/" component={Dia} />
          <Route path="/dadosTarefa" component={NovaTarefa} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
