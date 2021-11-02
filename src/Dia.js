import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './calendario.css'

class Dia extends Component {

    state = {
        tarefa: { nome: '', horas: 0, prazo: new Date(), disponibilidade: [] }
    };

    componentDidMount() {

        const {dados} = this.props.location.state;

        console.log(dados);

        if(dados.acao === "inserir") {
            this.setState({ nome: dados.nome})
        }

        console.log(this.state);

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