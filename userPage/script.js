let user = document.location.search;
user = user.replace('?', '');

getUserGithub(user);
getUserReposGithub(user);

function getUserGithub(userName) {
    fetch('https://fake-github.herokuapp.com/api/search/' + userName)
        .then(function (resultado) {
            resultado.json().then(function (data) {
                console.log('User Data:', data);
                showNameGithub(data);
                showLoginGithub(data);
                showAvatarGithub(data);
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}


function getUserReposGithub(userName) {
    fetch('https://fake-github.herokuapp.com/api/search/' + userName + '/repos')
        .then(function (resultado) {
            resultado.json().then(function (data) {
                data.forEach(function(element){
                    showNamerepos(element);
                    showLinkrepos(element);
                });
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}

function showAvatarGithub(userName) {
    let foto = document.createElement('img');
    foto.src = userName.avatar_url;
    document.body.appendChild(foto);
}

function showNameGithub(name){
    let div = document.createElement('div');
    div.id = '#name'
    div.innerText = 'Name: ' + name.name;
    document.body.appendChild(div);
}

function showLoginGithub(login){
    let div = document.createElement('div');
    div.id = '#login'
    div.innerText = 'Login: ' + login.login;
    document.body.appendChild(div);
}

function showNamerepos(repos){
    let div = document.createElement('div');
    div.id = '#repos'
    div.innerText = 'Repositorios: ' + repos.name;
    document.body.appendChild(div);
}

function showLinkrepos(a){
    let div = document.createElement('a')
    div.id = '#link'
    div.href = a.svn_url
    div.innerText = 'Links: '+ a.svn_url;
    div.style.color = 'black';
    document.body.appendChild(div);
}
