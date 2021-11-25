let user = document.location.search;
user = user.replace('?', '');

getUserGithub(user);


function getUserGithub(userName) {
    fetch('https://fake-github.herokuapp.com/api/search/' + userName)
        .then(function (resultado) {
            resultado.json().then(function (data) {
                console.log('User Data:', data);
                showAvatarGithub(data);
                showNameGithub(data);
                showLoginGithub(data);
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}


getUserReposGithub(user);


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
    div.innerText = name.name;
    document.body.appendChild(div);
}

function showLoginGithub(login){
    let div = document.createElement('div');
    div.innerText = login.login;
    document.body.appendChild(div);
}

function showNamerepos(repos){
    let div = document.createElement('div');
    div.innerText = repos.name;
    document.body.appendChild(div);
}

function showLinkrepos(a){
    let div = document.createElement('a')
    div.href = a.svn_url
    div.innerText = a.svn_url;
    document.body.appendChild(div);
}
