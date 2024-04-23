
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
}]

function displayArticles() {
    const tableBody = document.getElementById('articlesTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; 
    articles.forEach(article => {
        const row = tableBody.insertRow();
        row.innerHTML = `<td>${article.id}</td><td>${article.name}</td><td>${article.price}</td><td>${article.quantity}</td><td>${article.description}</td>`;
    });
}

function toggleHidden(elementId) {
    const form = document.getElementById(elementId);
    form.classList.toggle('hidden');
}

document.getElementById('showAddForm').addEventListener('click', () =>toggleHidden('forms'));

displayArticles();

// const validateNum = (value) => typeof value ===  'number' && !Number.isNaN(value);

/* How use idValidate 
idValidate recive two parameters (num, bool), the secondone is false by def. and have the task to switch the logic of the function, if it's true mean that I want to create a new ID 
so returns an ID available, if not returns true or false if the num parameter exist or not
*/

/* const idValidate = (newId, create = false) =>{ 
    const ids = [];
    products.forEach( e => {
        ids.push(e.id)
    });
    if(ids.includes(newId)){
        if(create){
            newId++;
            return idValidate(newId, true);
        }
        else{
            return true
        }
    }
    else{
        if(create){
            return newId
        }
        else{
            return false
        }
    }
}

const menu = () => {
    opt = Number (prompt(msgOptions));
    switch (opt){
        case 1:
            createArticle();
            menu();
        case 2:
            duplicateArticle();
            menu();
        case 3:
            displayArticles();
        case 13:
            return
        default:
            alert("Valor no valido");
            menu()
    }
}

const createArticle = () =>{
    const article = prompt(`Ingrese un articulo con las siguientes propiedades, cada una separada por punto y coma. 
        ( Nombre;Precio;Cantidad;Descripcion )`);
    let arrayArticle = article.split(';');
    arrayArticle[1] = Number(arrayArticle[1]);
    arrayArticle[2] = Number(arrayArticle[2]);
    if (arrayArticle[0] && validateNum(arrayArticle[1]) && validateNum(arrayArticle[2]) && arrayArticle[3]) {
        const product = {
            id : idValidate(0, true),
            name : arrayArticle[0],
            price : arrayArticle[1],
            quantity : arrayArticle[2],
            description : arrayArticle[3]
        }
        appendArticle(product);
        alert("Articulo agregado");
    }
    else{
        alert("Valores ingresados no validos");
    }
}

const appendArticle = (obj) => products.push(obj);


const duplicateArticle = () =>{
    const id = Number (prompt("Ingrese el id a duplicar "))
    if(idValidate(id)){
        let objProduct = {}; 
        products.forEach(e => {
            if (e["id"] === id ){
                objProduct = {
                    id: e['id'],
                    name: e['name'],
                    price: e['price'],
                    quantity: e['quantity'],
                    description: e['description']
                };
            }
        });
        objProduct["name"] = assignName(objProduct["name"])
        objProduct["id"] = idValidate(0, true);
        appendArticle(objProduct);
        alert("Articulo duplicado")
    }
    else{
        alert("id no existe");
    }
}

const assignName = (baseName, num = 1) =>{
    baseName += ` copy ${num}`;
    const nameSplit = baseName.split(" copy");
    const names = [];
    products.forEach(e => {
        names.push(e['name']);
    });
    if(names.includes(baseName)){
        num += 1;
        return assignName(nameSplit[0], num);
    }
    else{
        return baseName;
    }
}

menu();

 */