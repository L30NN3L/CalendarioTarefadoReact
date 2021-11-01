import React, { Component } from 'react';
import './calendario.css'

class Dia extends Component {

    render() {

        let date = new Date();
        let today = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;


        return (
            <div className="Dia">
                <div id="tela1" class="component">
                    <div class="componentHeader center">
                        <button id="hoje" class="button">{today}</button>
                    </div>
                    <div class="componentContent">
                        <div id="blank">
                            <div class="center">
                                <p>Sem tarefas por enquanto</p>
                            </div>
                        </div>
                        <ul id="listaDeTarefas" class="list hidden"></ul>
                    </div>
                    <div class="componentFoot center">
                        <button id="btnAdic" class="button primary">
                            <img src="./assets/plus1.png" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Dia;