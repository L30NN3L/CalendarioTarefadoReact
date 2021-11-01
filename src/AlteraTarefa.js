import React, { Component } from 'react';
import './calendario.css'

class AlteraTarefa extends Component {

    render() {


        return (
            <div className="AlteraTarefa">
                <div id="tela4" class="component hidden">
                    <div class="componentHeader">
                        <h1 class="componentTitle">Alteração de tarefa</h1>
                    </div>
                    <div class="componentContent">
                        <div class="field">
                            <label for="inputAlteraTarefa">Tarefa:</label>
                            <input id="inputAlteraTarefa" type="text" autocomplete="off" />
                        </div>
                        <div class="buttonGroup end mt1">
                            <button id="btnCanc3" class="button quarter secondary">Cancelar</button>
                            <button id="btnAlt" class="button quarter primary">Alterar</button>
                        </div>
                        <div class="buttonGroup end mt3">
                            <button id="btnDel" class="button quarter danger">Apagar tarefa</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default AlteraTarefa;