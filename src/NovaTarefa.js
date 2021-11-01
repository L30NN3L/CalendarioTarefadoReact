import React, { Component } from 'react';
import './calendario.css'

class NovaTarefa extends Component {

    render() {

        let date = new Date();
        let today = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;


        return (
            <div className="NovaTarefa">
                <div id="tela2" class="component hidden">
                    <div class="componentHeader">
                        <h1 class="componentTitle">
                            Nova tarefa
                        </h1>
                    </div>
                    <div class="componentContent">
                        <div class="field mt1">
                            <label for="inputNovaTarefa">Tarefa:</label>
                            <input id="inputNovaTarefa" type="text" autocomplete="off" />
                        </div>
                        <div class="field mt1">
                            <label for="horas">Horas:</label>
                            <input id="horas" type="text" autocomplete="off" />
                        </div>
                        <div class="field mt1">
                            <label for="prazo">Prazo:</label>
                            <input id="prazo" type="text" autocomplete="off" />
                        </div>
                        <div class="center mt1">
                            <div style="display: block;">
                                <div class="center">Disponibilidade</div>
                                <div class="buttonGroup">
                                    <button class="button">
                                        D
                                    </button>
                                    <button class="button">
                                        S
                                    </button>
                                    <button class="button">
                                        T
                                    </button>
                                    <button class="button">
                                        Q
                                    </button>
                                    <button class="button">
                                        Q
                                    </button>
                                    <button class="button">
                                        S
                                    </button>
                                    <button class="button">
                                        S
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="buttonGroup mt1 center">
                        <button id="btnCanc1" class="button quarter secondary">Cancelar</button>
                        <button id="btnInc" class="button quarter primary">Incluir</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default NovaTarefa;