//Clase
class API {

    //Sacar mediante la API de Chuck Norris chistes
    getJoke(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
}