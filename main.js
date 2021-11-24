function getUserGithub(userName) {
    fetch('https://api.github.com/users/' + userName)
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


// const listUser = [
//     { name: 'Bruno Henrique', userName: 'brunohvc' },
//     { name: 'Bruno Henrique', userName: 'brunohvc' },
//     { name: 'Bruno Henrique', userName: 'brunohvc' },
//     { name: 'Bruno Henrique', userName: 'brunohvc' },
//     { name: 'Bruno Henrique', userName: 'brunohvc' },
// ]