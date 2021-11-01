import React, { Component } from 'react';
import './calendario.css'

class Cabecalho extends Component {

    render() {
        return (
            <div className="Cabecalho">
                <header class="headerBar primary">
                    <div class="appName">Calendário Tarefado</div>
                    <div class="badge warning">
                        <span id="estado">0</span>
                    </div>
                </header>
            </div>
        );
    }

}

export default Cabecalho;