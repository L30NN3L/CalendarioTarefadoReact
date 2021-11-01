import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './calendario.css'

class NovaTarefa extends Component {

    render() {
        return (
            <div className="NovaTarefa">
                <div id="tela2" className="component">
                    <div className="componentHeader">
                        <h1 className="componentTitle">
                            Nova tarefa
                        </h1>
                    </div>
                    <div className="componentContent">
                        <div className="field mt1">
                            <label htmlFor="inputNovaTarefa">Tarefa:</label>
                            <input id="inputNovaTarefa" type="text" autoComplete="off" />
                        </div>
                        <div className="field mt1">
                            <label htmlFor="horas">Horas:</label>
                            <input id="horas" type="text" autoComplete="off" />
                        </div>
                        <div className="field mt1">
                            <label htmlFor="prazo">Prazo:</label>
                            <input id="prazo" type="text" autoComplete="off" />
                        </div>
                        <div className="center mt1">
                            <div style={{display: 'block'}}>
                                <div className="center">Disponibilidade</div>
                                <div className="buttonGroup">
                                    <button className="button">
                                        D
                                    </button>
                                    <button className="button">
                                        S
                                    </button>
                                    <button className="button">
                                        T
                                    </button>
                                    <button className="button">
                                        Q
                                    </button>
                                    <button className="button">
                                        Q
                                    </button>
                                    <button className="button">
                                        S
                                    </button>
                                    <button className="button">
                                        S
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buttonGroup mt1 center">
                        <NavLink exact to="/" id="btnCanc1" className="button quarter secondary">Cancelar</NavLink>
                        <NavLink exact to="/:dadosTarefa" id="btnInc" className="button quarter primary">Incluir</NavLink>
                    </div>
                </div>
            </div>
        );
    }

}

export default NovaTarefa;