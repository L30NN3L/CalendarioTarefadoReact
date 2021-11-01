let tarefas = [];


// onload = () => {

    let date = new Date();

    let contentToday = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    document.querySelector('#hoje').innerHTML = contentToday;

    document.querySelector('#btnAdic').onclick = () => {
      //  document.querySelector('#btnInc').disabled = true;
        ativa('tela2');
        document.querySelector('#inputNovaTarefa').focus()
    };

    document.querySelector('#btnCanc1').onclick = () => {
        document.querySelector('#inputNovaTarefa').value = '';
        ativa('tela1');
    };

    document.querySelector('#btnCanc2').onclick = () => {
        resetaTitulo();
        ativa('tela1');
    };

    document.querySelector('#btnCanc3').onclick = () => {
        resetaTitulo();
        ativa('tela1');
    };

    document.querySelector('#btnInc').onclick = () => {
        adicionaTarefa();
    };

    document.querySelector('#btnAlt').onclick = () => {
        alteraTarefa();
        resetaTitulo();
    };

    document.querySelector('#btnDel').onclick = () => {
        apagaTarefa();
        resetaTitulo();
    };

// };


const mostraTarefas = () => {
    const listaDeTarefas = document.querySelector('#listaDeTarefas');
    listaDeTarefas.innerHTML = ' ';
    tarefas.forEach( (t) => {
        let elemTarefa = document.createElement('li');
        elemTarefa.innerHTML = t.descricao;
        elemTarefa.setAttribute('data-id', t.id);
        elemTarefa.onclick = () => {
            let divTitulo = document.querySelector('#exibeTarefa');
            let elemTituloTarefa = document.createElement('h1');
            let elemBotaoEditar = document.createElement('button');
            let iconeEditar = document.createElement('img');
            iconeEditar.src = './assets/edit.png';
            elemBotaoEditar.appendChild(iconeEditar);

            ativa('tela3');

            elemTituloTarefa.innerHTML = t.descricao;

            elemBotaoEditar.onclick = () => {
                let campo = document.querySelector('#inputAlteraTarefa');
                ativa('tela4');
                campo.value = t.descricao;
                campo.setAttribute('data-id', t.id);
                campo.focus();
            };

            divTitulo.appendChild(elemTituloTarefa);
            divTitulo.appendChild(elemBotaoEditar);
        };
        listaDeTarefas.appendChild(elemTarefa);
    } );

    document.querySelector('#estado').innerHTML = tarefas.length;

    if(tarefas.length > 0) {
        listaDeTarefas.classList.remove('hidden');
        document.querySelector('#blank').classList.add('hidden');
    } else {
        listaDeTarefas.classList.add('hidden');
        document.querySelector('#blank').classList.remove('hidden');
    }

};

const ativa = (comp) => {
    let listaDeTelas = document.querySelectorAll('body > .component');
    listaDeTelas.forEach( (c) => c.classList.add('hidden') );
    document.querySelector('#'+comp).classList.remove('hidden');
};

const adicionaTarefa = () => {
    let campo = document.querySelector('#inputNovaTarefa');
    let descricao = campo.value;
    if(descricao != '') {
        tarefas.push({
            id: Math.random().toString().replace('0.',''),
            descricao: descricao
        });
        campo.value = '';
        ativa('tela1');
        salvaTarefas();
        mostraTarefas();
    }
};

const monitoraCampoAdic = (e) => {
    let botao = document.querySelector('#btnInc');
    if(e.target.value.length > 0) {
        botao.disabled = false;
    }
    else {
        botao.disabled = true;  
    } 
};

const alteraTarefa = () => {
    let campo = document.querySelector('#inputAlteraTarefa');
    let idTarefa = campo.getAttribute('data-id');
    let i = tarefas.findIndex( (t) => t.id == idTarefa );
    tarefas[i].descricao = campo.value;
    campo.value = '';
    campo.removeAttribute('data-id');
    ativa('tela1');
    salvaTarefas();
    mostraTarefas();
};

const apagaTarefa = () => {
    let campo = document.querySelector('#inputAlteraTarefa');
    let idTarefa = campo.getAttribute('data-id');
    tarefas = tarefas.filter( (t) => t.id != idTarefa );
    campo.value = '';
    campo.removeAttribute('data-id');
    ativa('tela1');
    salvaTarefas();
    mostraTarefas();
};

const salvaTarefas = () => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
};

const countdown = () => {
    let minutosIniciais = 30;
    let tempo = minutosIniciais * 60;

    let countdownElem = document.getElementById('countdown');

    function updateCountdown() {

        let minutos = Math.floor(tempo / 60);
        let segundos = tempo % 60;

        segundos = segundos < 10 ? '0' + segundos : segundos;

        countdownElem.innerHTML = `${minutos} : ${segundos}`;

        tempo--;

    }

    setInterval(updateCountdown, 1000);

};

const resetaTitulo = () => {
    let divTitulo = document.querySelector('#exibeTarefa');
    divTitulo.removeChild(divTitulo.children[1]);
    divTitulo.removeChild(divTitulo.children[0]);
};

navigator.serviceWorker.register('./calendario-sw.js');