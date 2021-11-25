console.log(document.location.search);



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