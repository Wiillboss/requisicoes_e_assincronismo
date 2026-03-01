// metodo GET não tem corpo da requisição, caso queria enviar informação, terá que ser pela URL, remove o body e headers.
async function inserir_post() {
    document.getElementById("posts").innerHTML = "Carregando...";

    let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Titulo de teste',
            body: 'Corpo de teste',
            userId: 4
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let json = await req.json();

    console.log(json);
}