import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
