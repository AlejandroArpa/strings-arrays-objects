import inialRatigns,{prom} from "./calculator.js";

const ratings = inialRatigns();
const print = [];


const addToPrint = (value) => print.push(value);

if(ratings.length > 0 ){
    ratings.sort((a , b) => b - a);
    const prome = prom(ratings);
    const maxRating = ratings[0];
    const minRating = ratings[ratings.length - 1];
    const approbe = [];
    const reprobe = [];
    ratings.forEach(rating => rating>=70 ? approbe.push(rating) : reprobe.push(rating))
    addToPrint(prome);
    addToPrint(maxRating);
    addToPrint(minRating);
    addToPrint(approbe);
    addToPrint(reprobe);
    addToPrint(ratings);
    console.log(print);
}
else{
    alert("Lista vacia") 
}