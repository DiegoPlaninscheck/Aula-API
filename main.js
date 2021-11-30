const listUser = [
    { name: 'Diego Planinscheck', userName: 'frst157'},
    { name: 'Bruno Henrique Verbinnen de Carvalho', userName: 'brunohvc' },
    { name: 'Vytor Augusto Rosa', userName: 'K43RU' },
    { name: 'João Henrique Meireles da Silva', userName: 'nihilth' },
    { name: 'Otavio Augusto dos Santos', userName: 'SantOtavio' },
    { name: 'Camilly de Souza Pessotti', userName: 'camillyPessotti' },
    { name: 'Thiago Marins Braga', userName: 'ThiagoBrag' },
    { name: 'Ester Girelli', userName: 'Esterzinha12' },
    { name: 'Gustavo Rebelatto Zapella', userName: 'rebelattogustavo' },
    { name: 'Henrique Cole Fernandes', userName: 'HenriqueCole' },
    { name: 'Kenzo Hideaky Ferreira Sato', userName: 'Kenzohfs' },
    { name: 'Vinícius Bonatti Benner', userName: 'viniciusz1' },
    { name: 'Leonardo Heitor Poglia', userName: 'leopoglia' },
    { name: 'Felipe Mielke Vieira', userName: 'FelipeMielkeVieira' },
    { name: 'Eduarda Bolgenhagen De Campos', userName: 'eduardabolgenhagen' },
    { name: 'Matheus Franzener Hohmann', userName: 'MatheusFranzener' },
    { name: 'Leonardo Giuseppe de Souza Rafaelli', userName: 'LeonardoRafaelli' },
    { name: 'Camilly Vitoria da Rocha Goltz', userName: 'VitoriaCamilly' },
    { name: 'Bruna Alves Mafra', userName: 'BMafra' },
    { name: 'Otavio Matheus Neves', userName: 'otavionvs' }
];






function table() {
    let checarTabela = document.querySelector('ul');
    if(checarTabela){
        checarTabela.remove();
    }
    let table = document.createElement('ul');
    
    listUser.forEach(function (element) {
        const linha = pegarUsuario(
            element.name,
            element.userName);

        table.appendChild(linha);
    })
    document.body.appendChild(table);
}
table();

let botaoCadastro = document.createElement('button');
document.body.appendChild(botaoCadastro);
botaoCadastro.onclick = clickButtonRegisteryPerson;
botaoCadastro.innerText = "Cadastrar Pessoa";

function pegarUsuario(name, userName) {
    const row = document.createElement('li');
    row.id = 'linha';
    const columnName = document.createElement('div');
    const columnUserName = document.createElement('div');
    const buttonUsuario = document.createElement('button');
    const a = document.createElement('a');

    columnName.id = 'nome'
    columnName.innerText = "Nome: " + name;
    columnUserName.innerText = "Username: " + userName;
    a.innerText = 'Verificar';
    a.style.color = 'black';
    a.style.textDecoration = 'none';
    a.href='./userPage/index.html?' + userName;

    row.appendChild(columnName);
    row.appendChild(columnUserName);
    row.appendChild(buttonUsuario);
    buttonUsuario.appendChild(a);
    return row;
}

function clickButtonRegisteryPerson() {
    const modal = createModal();
    const content = getContentRegesteryPersonModal(modal.removeModal);

    modal.insertHeader(content.header);
    modal.insertMain(content.main);
    modal.insertFooter(content.footer);
}

function createModal() {
    let background = document.createElement('div');
    background.id = "background-modal";
    let modal = document.createElement('div');
    modal.id = "modal";
    background.appendChild(modal);
    document.body.appendChild(background);

    let header = document.createElement('div');
    let main = document.createElement('div');
    let footer = document.createElement('div');

    header.id = 'modal-header';
    main.id = 'modal-main';
    footer.id = 'modal-footer';

    modal.appendChild(header);
    modal.appendChild(main);
    modal.appendChild(footer);

    function removeModal() {
        background.remove();
    }

    function insertHeader(html) {
        header.appendChild(html);
    }

    function insertMain(html) {
        main.appendChild(html);
    }

    function insertFooter(html) {
        footer.appendChild(html);
    }

    let retorno = {
        background: background,
        modal: modal,
        removeModal: removeModal,
        insertHeader: insertHeader,
        insertMain: insertMain,
        insertFooter: insertFooter,
    }

    return retorno;
}

function getContentRegesteryPersonModal(removeModal) {
    const header = document.createElement('div');
    header.id = 'person-header';
    const title = document.createElement('h1');
    title.innerText = 'Cadastro Pessoa';
    header.appendChild(title);

    const main = document.createElement('div');
    main.id = 'person-main';

    const inputNome = document.createElement('input');
    inputNome.type = 'text';
    inputNome.placeholder = 'Nome';
    main.appendChild(inputNome);

    const inputSobrenome = document.createElement('input');
    inputSobrenome.type = 'text';
    inputSobrenome.placeholder = 'Usuario';
    main.appendChild(inputSobrenome);


    const footer = document.createElement('div');
    footer.id = 'person-footer';
    const buttonRegistery = document.createElement('button');
    buttonRegistery.innerText = 'Registrar';
    function registery() {
        const name = inputNome.value;
        const userName = inputSobrenome.value;

        if (!name || name == '') {
            return;
        }
        if (! userName ||  userName == '') {
            return;
        }
    
        registeryPerson(name,  userName);
        removeModal();
    }
    buttonRegistery.onclick = registery;

    const buttonCancel = document.createElement('button');
    buttonCancel.innerText = 'Cancelar';
    buttonCancel.onclick = removeModal;

    footer.appendChild(buttonRegistery);
    footer.appendChild(buttonCancel);

    return {
        header: header,
        main: main,
        footer: footer,
    }
}

function registeryPerson(name,  userName) {
    let person = {
        name: name,
         userName:  userName,
    }

    listUser.push(person);
    table();
}

// let input = document.createElement("input");
// document.body.appendChild(input);
// input.id = 'filtro';


// function myFunction() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById('filtro');
//     filter = input.value;
//     ul = document.querySelector("ul");
//     li = ul.getElementsByTagName('li');

//     for (i = 0; i < li.length; i++) {
//       a = li[i].getElementById("nome");
//       txtValue = a.innerText;
//       console.log(a, txtValue);
//       if (txtValue.indexOf(filter) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
//   }

// input.onkeyup = myFunction;