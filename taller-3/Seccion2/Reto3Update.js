
let articles = [{
    id: 0,
    name: 'Producto 1',
    price: 100,
    quantity: 10,
    description: 'Descripción del Producto 1 palabra3'
},
{
    id: 1,
    name: 'Producto 2',
    price: 1500,
    quantity: 1,
    description: 'Descripción del Producto 2'
},
{
    id: 2,
    name: 'Producto 3',
    price: 500,
    quantity: 100,
    description: 'Descripción del Producto 3 '
}]

function displayArticles(arrayToShow) {
    const tableBody = document.getElementById('articlesTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; 
    arrayToShow.forEach(article => {
        const row = tableBody.insertRow();
        row.innerHTML = `<td>${article.id}</td><td>${article.name}</td><td>${article.price}</td><td>${article.quantity}</td><td>${article.description}</td>`;
    });
}

function toggleHidden (elementId) {
    const section = document.getElementById(elementId);
    section.classList.toggle('hidden');
}

function onSubmit (event) {
    const elementId = this.id;
    const form = document.getElementById(elementId);
    const inputs = form.querySelectorAll('input');
    event.preventDefault();
    validateAddInputs(inputs);
    toggleHidden('sectionFormAdd');

}

const validateAddInputs = (inputs) => {
    inputs.forEach(element => {
        console.log(element.id);
    });
}

function search (){
    let findArticles = [];
    let names = [];
    articles.forEach( a => names.push(a.name.toLocaleLowerCase()) );
    findArticles = names.filter( e => e.includes(this.value.toLocaleLowerCase()) );
    findArticles.forEach((art, idx) => {
        articles.forEach(e => {
            e.name.toLocaleLowerCase() === art.toLocaleLowerCase() ? findArticles[idx] = e : null;
        });
    });
    displayArticles(findArticles);


}


displayArticles(articles);

document.getElementById('showAddForm').addEventListener('click', () =>toggleHidden('sectionFormAdd'));
document.getElementById('formAdd').addEventListener('submit', onSubmit);
document.getElementById('searchInput').addEventListener('change', search);