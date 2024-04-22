let products = [{
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
const blackList = ['palabra1', 'palabra2', 'palabra3', 'palabra4', 'palabra5'];

const validateNum = (value) => typeof value ===  'number' && !Number.isNaN(value);
const captureProduct = (id) =>{
    const name = prompt("Ingrese el nombre del producto:");
    const price = Number (prompt("Ingrese el precio:"));
    const quantity = Number (prompt("Ingrese la cantidad:"));
    const description = prompt("Ingrese una descripcion");
    if(name && price && quantity && description && validateNum(price) && validateNum(quantity)){
        return {
            id, name, price, quantity, description
        }
    }
    else{
        return false;
    } 
}
const verifyId = (idx) => products.some( e => e.id === idx)
const showProducts = () =>{
    console.log(`Estos son los articulos guardados: \n`);
    console.log(products);
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

const verifyExistQty = (nameToVerify) =>{
    if(nameToVerify){
        const productToValidate = products.some( e => e.name.toLowerCase() === nameToVerify ) ? products.find( e => e.name.toLowerCase() === nameToVerify ) : false;
        if(productToValidate){
            if (productToValidate.quantity > 0)  {
                return [true, productToValidate.quantity]
            } 
            else {
                console.error("Cantidad 0");
                return [true, 0]
            }
            
        }
        else{
            console.error("Producto no existe");
            return [false, 0]
        } 
    }
    else{
        console.error("Valor ingresado vacio");
        return [false, 0];
    }
}
const stockPrice = () => products.reduce((amount, p) =>  amount + (p.price * p.quantity), 0 )

const findProductsBlack = () => products.filter(e => {
    const arrayWords = e.description.split(" ");
    console.log(arrayWords);
    let f = false;
    arrayWords.forEach(word => {
        if(blackList.includes(word)){
            f=true
        }
    });
    if (f){
        return e;
    }
});

while(confirm("Desea agregar un articulo?")){
    const product = captureProduct(products.length);
    product ? products.push(product) : alert("Datos incorrectos o vacios");
}

while(confirm("Desea duplicar un articulo?")){
    const id = Number (prompt("Ingrese el id del producto a duplicar"));
    if(validateNum(id)){
        let objProduct = false; 
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
        if(objProduct){
            objProduct["name"] = assignName(objProduct["name"],1)
            objProduct["id"] = products[products.length-1]["id"] + 1;
            products.push(objProduct);
        }
        else{
            alert("Id no encontrado")
        }
    }
    else{
        alert("Valor ingresado no numerico")
    }
}

showProducts();

while(confirm("Desea realizar una busqueda?")){
    if(confirm("Desea buscar por nombre?")){
        const toSearch = prompt("Ingrese el nombre a buscar:");
        if (toSearch){
            let f = false;
            let toShow
            products.forEach( e => {
                if(e['name'].toLowerCase() === toSearch.toLowerCase()){
                    toShow = e
                    f = true;
                }
            });
            f ? alert("Este es el producto: \n" + JSON.stringify(toShow)) : alert("Producto no encontrado")
        }
        else {
            alert("Valor vacio");
        }
    }
    else{
        const minPrice = Number( prompt("Ingrese el valor minimo del precio"));
        const maxPrice = Number (prompt("Ingrese el valor maximo del precio"));
        const toShow = [];
        if(validateNum(minPrice) && validateNum(maxPrice)){
            products.forEach( e => {
                if(e['price'] <= maxPrice && e['price'] >= minPrice){
                    toShow.push(e)
                }
            });
            console.log("Estos son los productos dentro de ese rango");
            console.log(toShow);
        }

    }
}

while(confirm("Desea actualizar algun articulo?")){
    const id = Number ( prompt("Ingrese el id a modificar "))
    let newPrice, newQuantity
    if(validateNum(id) && verifyId(id)){
        const objToMut = products.find( e => e.id === id);
        confirm("Desea modificar el nombre?") ? objToMut['name'] = prompt("Ingrese el nuevo nombre") : null;
        confirm("Desea modificar el precio?") ? newPrice = Number (prompt("Ingrese el nuevo precio")) : null;
        validateNum(newPrice) ? objToMut['price'] = newPrice : null;
        confirm("Desea modificar la cantidad?") ? newQuantity = Number (prompt("Ingrese el nuevo nombre")) : null;
        validateNum(newQuantity) ? objToMut['quantity'] = newQuantity : null;
        confirm("Desea modificar la descripcion") ? objToMut['description'] = prompt("Ingrese la nueva descripcion") : null;
        console.log(objToMut);
    }
    else{
        alert("Id no corresponde, o no valido");
    }
}

showProducts();

while(confirm("Desea eliminar un producto?")){
    const idx = Number ( prompt("Ingrese el id a eliminar "));
    validateNum(idx) && verifyId(idx) ? products = products.filter( e => e.id !== idx ) : alert("Valor ingresado erroneo"); 
}

showProducts();

while(confirm("Desea verificar existencia?")){
    const productName = prompt("Ingrese el nombre del producto a validar").toLowerCase();
    const answer = verifyExistQty(productName);
    answer[0] && answer[1] ? console.log(`Producto disponible con ${answer[1]} unidades`) : null;
}

while(confirm("Desea realizar una venta?")){
    const productName = prompt("Ingrese el nombre del producto a vender").toLowerCase();
    const answer = verifyExistQty(productName);
    let prod = false;
    answer[0] && answer[1] ? prod = products.find( e => e.name.toLowerCase() === productName ) : console.error("No se puede realizar la venta");
    if(prod){
        prod.quantity -= 1;
        console.log("Venta realizada"); 
    }
}

while(confirm("Desea realizar una compra?")){
    const productName = prompt("Ingrese el nombre del producto a comprar").toLowerCase();
    const answer = verifyExistQty(productName);
    let prod = false;
    answer[0] ? prod = products.find( e => e.name.toLowerCase() === productName ) : console.error("No se puede realizar la compra, producto no existe");
    if(prod){
        prod.quantity += 1;
        console.log("Compra realizada"); 
    }
}

showProducts();
console.log(stockPrice());
confirm("Desea organizar los productos de forma ascendente por precio?") ? products.sort((a , b) => a.price - b.price) : products.sort((b , a) => a.price - b.price) ; 
showProducts();
confirm("Desea organizar los productos de forma ascendente por cantidad?") ? products.sort((a , b) => a.quantity - b.quantity) : products.sort((b , a) => a.quantity - b.quantity) ; 
showProducts();
console.log(findProductsBlack());

