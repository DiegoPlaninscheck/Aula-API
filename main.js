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
    const table = document.createElement('table');
    const row = document.createElement('tr');
    const columnName = document.createElement('th');
    const columnUserName = document.createElement('th');

    columnName.innerText = 'Nome';
    columnUserName.innerText = 'UserName';

    row.appendChild(columnName);
    row.appendChild(columnUserName);
    table.appendChild(row);

    listUser.forEach(function (element) {
        const linha = pegarUsuario(
            element.name,
            element.userName);

        table.appendChild(linha);
    })
    document.body.appendChild(table);
}
table();

function pegarUsuario(name, userName) {
    const row = document.createElement('tr');
    const columnName = document.createElement('td');
    const columnUserName = document.createElement('td');
    const buttonUsuario = document.createElement('button');
    const a = document.createElement('a');

    columnName.innerText = name;
    columnUserName.innerText = userName;
    a.innerText = 'Verificar'
    a.href='./userPage/index.html?' + userName;

    row.appendChild(columnName);
    row.appendChild(columnUserName);
    row.appendChild(buttonUsuario);
    buttonUsuario.appendChild(a);
    return row;
}


function getUserGithub(userName) {
    fetch('https://fake-github.herokuapp.com/api/' + userName)
        .then(function (resultado) {
            resultado.json().then(function (data) {
                console.log('User Data:', data);
                showUserGithub(data);
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}

function showUserGithub(user) {
    if (!user) return;
    let divName = document.createElement('div');
    divName.innerText = user.login;
    document.body.appendChild(divName);
}

function getUserReposGithub(userName) {
    fetch('https://api.github.com/users/' + userName + '/repos')
        .then(function (resultado) {
            resultado.json().then(function (data) {
                console.log('Repositories Data:', data);
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}