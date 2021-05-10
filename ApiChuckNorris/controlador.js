let api = new API();

function showJokes() {
    let output = '<table>';
    for (let i = 0; i < 10; i++) {
        api.getJoke('https://api.chucknorris.io/jokes/random')
            .then(function(data) {
                console.log(data);

                () => function(joke) {
                    output += `<tr><td>${joke.value}</td></tr>`;
                };
            }).catch(err => console.log(err));
    }
    output += `</table>`;
    document.getElementById('table').innerHTML = output;
}

function main() {
    let btnGenerar = document.getElementById('btnGenerar');
    btnGenerar.addEventListener('click', showJokes);
}


window.addEventListener('load', main);