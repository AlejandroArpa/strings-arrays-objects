import inialRatigns,{prom} from "./calculator.js";

const ratings = inialRatigns();
ratings.length > 0 ? alert(`El promedio es: ${prom(ratings)}`) : alert("No se puede calcular el promedio") 

