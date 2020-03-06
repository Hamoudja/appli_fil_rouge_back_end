let countQuantite = 0;
let products = [];
let caddy = [];
let total = 0;
const btnAjt = document.getElementById('ajouter');

const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? { 'Content-Type': 'application/json' } : {}

    })
        .then(response => {
            return response.json();

        })
};

const getProduct = () => {
    sendHttpRequest('Get', 'http://localhost:5555/read').then((data) => {
        let result = `
        <h2 class="text-center"> Liste des produits</h2>
        <div class="container">
    <div class="row ">
        <table class="table table-striped table-sm">
                <thead class="thead bg-primary text-white">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Marque</th>
                    <th scope="col">Prix</th>
                    <th scope="col"></th>
                  </tr>
                </thead> <tbody>`;

        data.forEach((products) => {
            const { id, nom, Brand, Price, Quantity, idCategorie } = products
            result +=

                `<tr>
                    <th>${id}</th>
                    <th>${nom}</th>
                    <th>${Brand}</th>
                    <th> ${Price}</th>
                    <th> <button class="btn btn-primary" id="ajouter">+</button></th>
                    
                    </tr>`

            document.getElementById('result').innerHTML = result;
            
        });
        document.getElementById('result').innerHTML += `</tbody> </table> </div> </div>
        <button  class="btn btn-primary">Panier</button>
        <button  class="btn btn-primary">Commande</button>`;
        btnAjt.addEventListener('click', function (event) {
            alert('Ajouter');
          });
       
    })
}

function AjoutProduit() {
    alert('Ajouter');
}


getProduct();

