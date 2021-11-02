import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './calendario.css'

class NovaTarefa extends Component {

    state = {
        nomeTarefa: "",
        horas: 0,
        prazo: new Date(),
        disponibilidade: []
    };

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
                            <input id="inputNovaTarefa"
                                type="text"
                                autoComplete="off"
                                onChange={(e) => this.setState({ nomeTarefa: e.target.value })} />
                        </div>
                        <div className="field mt1">
                            <label htmlFor="horas">Horas:</label>
                            <input
                                id="horas"
                                type="text"
                                autoComplete="off"
                                onChange={(e) => this.setState({ horas: Number(e.target.value) })} />
                        </div>
                        <div className="field mt1">
                            <label htmlFor="prazo">Prazo:</label>
                            <input
                                id="prazo"
                                type="text"
                                autoComplete="off"
                                onChange={(e) => this.setState({ prazo: e.target.value })}
                            />
                        </div>
                        <div className="center mt1">
                            <div style={{ display: 'block' }}>
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
                        <Link exact to="/"
                            id="btnCanc1"
                            className="button quarter secondary">Cancelar</Link>
                        <Link exact to={{
                            pathname: "/"
                            , state: {
                                dados: {
                                    acao: 'inserir',
                                    tarefa: this.state.nomeTarefa,
                                    horas: this.state.horas,
                                    prazo: this.state.prazo,
                                    disponibilidade: ['seg', 'sex']
                                }
                            }
                        }} id="btnInc" className="button quarter primary">Incluir</Link>
                    </div>
                </div>
            </div>
        );
    }

}

export default NovaTarefa;