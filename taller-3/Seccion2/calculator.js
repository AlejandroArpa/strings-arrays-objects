const inialRatigns = () => {
    const ratings = prompt("Ingrese las calificaciones separadas por una coma (,)");
    if(ratings.length>0){
        const arrayRatings = ratings.split(',');
        const arrayNumberRatings = [];
        arrayRatings.forEach(e => {
            arrayNumberRatings.push(Number(e));
        });
        return arrayNumberRatings;
    }
    else{
        alert("Lista vacia");
        return []
    }
}

const prom = (array) => {
    if(array.length > 0){
        const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue ,0);
        return (sum/array.length)
    }
    else{
        alert("Arreglo vacio");
    }
}


export {
    inialRatigns as default,
    prom,
}

