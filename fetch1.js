function loadPosts(){
    document.getElementById("posts").innerHTML = 'Carregando...';
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado){
            return resultado.json();
        })
        .then(function(json){
            console.log(json);
            document.getElementById("posts").innerHTML = json.length + ' posts';
        })
        .catch(function(erro){
            console.log("Deu problema!");
        });
}