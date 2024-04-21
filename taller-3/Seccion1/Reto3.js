const email = prompt("Ingresa un correo");
const newEmail = email.split("");
const subString = email.split("@");
const check = []
console.log(subString);

const validate1 = (string) =>{
    let flag = false;
    let count = 0; 
    string.forEach(char => {
        if( char ==="@" ){
            flag = true
            count ++;
        }         
    });
    return [flag, count];
}

const validate2 = (subString) =>{
    const rigthSubString = subString[1].split("");
    let flag = false;
    let aux = false;
    rigthSubString.forEach((char, idx) =>{
        if(char === "." && idx === 0){
            aux = true;
        }
        else if (char=== "." && idx != 0){
            flag = true
        }
    })
    return [flag, aux]
}

const validate3 = (subString) => subString[0].includes(" ") || subString[1].includes(" ") 


check.push(validate1(newEmail));
check.push(validate2(subString));
check.push(validate3(subString));
console.log(check)

const msgs = [];
if(check[0][0] === false ){msgs.push("Agrega un arroba como minimo")}
if(check[0][0] === true && check[0][1] > 1 ){msgs.push("Mas de un arroba detectado")}
if(check[1][0] === false && check[1][1] === true){msgs.push("Punto inmediatamente despues del arroba")}
if(check[2] === true){msgs.push("Espacios en blanco encontrados")}

alert(msgs.join("\n"))

