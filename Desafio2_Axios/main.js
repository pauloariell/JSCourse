var buscarGithub = function (gitUser) {
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        var gitUrl = 'https://api.github.com/users/'+gitUser+'/repos';
        xhr.open('GET',gitUrl);
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4){
                if (xhr.status === 200) {
                    resolve( JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição, status:'+ xhr.status);
                }
            }
        }
    })
}
document.querySelector('#btn').addEventListener("click", function() {
    var user = document.querySelector('#gitUser');
    addOneLi('Carregando...');
    buscarGithub(user.value)
    .then(function(response){
        criaLista(response);
        console.log(response);
    })
    .catch(function(error){
        addOneLi('Aternção, repositorio não encontrado');
        console.warn(error);
    })
});

function criaLista(repos) {
    var listElement = document.querySelector('#list');
    var liDocument;
    var ulElement = document.querySelector('ul[name=repos]');
    ulElement.innerHTML = '';
    if (repos.length === 0) {
        addOneLi('Aternção, Esse usuário Github não tem repositórios');
    } else {
        for (repo of repos) {
            liDocument = criaTagLi(repo);
            ulElement.appendChild(liDocument);
        }
        listElement.appendChild(ulElement);
    }
}
function addOneLi(Text) {
    var ulElement = document.querySelector('ul[name=repos]');
    ulElement.innerHTML = '';
    var liElement = document.createElement('li');
    var repoName = document.createTextNode(Text);
    liElement.appendChild(repoName);
    ulElement.appendChild(liElement);
}

function criaTagLi(repo) {
    var liDocument = document.createElement('li');
    var aDocument = document.createElement('a');
    
    aDocument.setAttribute('href',repo.html_url);
    var repoName = document.createTextNode(repo.name);

    aDocument.appendChild(repoName);
    liDocument.appendChild(aDocument);
    return liDocument;
}



////////////////////////////////////////////////////////////
var verifIdade = function(idade) {
    return new Promise(function(resolve,reject){
        window.setTimeout(
            function(){
            if (idade >= 18) {
                resolve( 'Usuário maior de idade:'+idade);
            } else {
                reject('Usuário menor de idade!');
            }
        }, 2000)
    })
}

verifIdade(17)
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    })