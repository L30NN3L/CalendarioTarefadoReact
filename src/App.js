import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
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
          <Route exact path="/">
            <Dia />
          </Route>
          <Route path="/:dados">
            <Dia />
          </Route>
          <Route path="/dadosTarefa">
            <NovaTarefa />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
