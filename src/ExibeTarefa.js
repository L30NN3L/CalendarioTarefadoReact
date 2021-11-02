import React, { Component } from 'react';
import './calendario.css'

class ExibeTarefa extends Component {

    render() {

        return (
            <div className="ExibeTarefa">
                <div id="tela3" class="component hidden">
                    <div class="componentHeader">
                        <h1 class="componentTitle" id="tarefaTiulo"></h1>
                    </div>
                    <div class="componentContent">
                        <div class="field">
                            <label for="inputExibeTarefa">Tarefa:</label>
                            <input id="inputExibeTarefa" type="text" autocomplete="off" />
                        </div>

                        <div id="exibeTarefa" class="center">

                        </div>

                        <div class="center">
                            <p id="countdown">30:00</p>
                        </div>


                    </div>
                    <div class="componentFoot center">
                        <button id="btnCanc2" class="button quarter secondary">Cancelar</button>
                        <button id="btnTempo" class="button primary" onclick="countdown()">
                            <img src="./assets/plus1.png" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

}

export default ExibeTarefa;