import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import './calendario.css'

class Dia extends Component {

    componentDidMount() {

      //  console.log(this.props.match.props);

    }


    render() {

        let date = new Date();
        let today = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        


        return (
            <div className="Dia">
                <div id="tela1" className="component">
                    <div className="componentHeader center">
                        <button id="hoje" className="button">{today}</button>
                    </div>
                    <div className="componentContent">
                        <div id="blank">
                            <div className="center">
                                <p>Sem tarefas por enquanto</p>
                            </div>
                        </div>
                        <ul id="listaDeTarefas" className="list hidden"></ul>
                    </div>
                    <div className="componentFoot center">
                        <NavLink exact to="/dadosTarefa" id="btnAdic" className="button primary">
                            <img src="./assets/plus1.png" />
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Dia;