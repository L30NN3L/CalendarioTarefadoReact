import React, { Component } from 'react';
import './calendario.css'

class Cabecalho extends Component {

    render() {
        return (
            <div className="Cabecalho">
                <header className="headerBar primary">
                    <div className="appName">Calendário Tarefado</div>
                    <div className="badge warning">
                        <span id="estado">0</span>
                    </div>
                </header>
            </div>
        );
    }

}

export default Cabecalho;