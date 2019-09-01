var minhaPromise = function(idade) {
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

minhaPromise(17)
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    })