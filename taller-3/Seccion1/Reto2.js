const pwd = prompt("Ingrese una contraseña, recuerda debe tener al menos 8 caracteres, min: un numero, una letra y un caracter especial.");
let aux = false;
console.log(pwd.length);
const validates = [];
const specialsChars =  `!@#$%^&*()+=_-{}[]:;"'?<>,.|/\~${"`"}`;
const arraySpecialChars = specialsChars.split("");
const asciiArraySpecialChars = [];

arraySpecialChars.forEach(char => {
    asciiArraySpecialChars.push(char.charCodeAt());
})

const arrayToValidate = (start, end) => {
    let array = [];
    for (let i = start; i <= end; i++){
        array.push(i);
    }
    return array;
}

validates.push(arrayToValidate(48, 57));
validates.push(arrayToValidate(65, 90));
validates.push(arrayToValidate(97, 122));
validates.push(asciiArraySpecialChars);


console.log(validates)

const validatePwd = (pwd) =>{
    let asnwer = [];
    let asciiArrayPwd = [];
    pwd.length >=8 ? 
        asnwer.push([0, true])
        : asnwer.push([0, false])
    arrayPwd = pwd.split("");
    arrayPwd.forEach(char => {
        asciiArrayPwd.push(char.charCodeAt());
    });

    return asnwer
}

const asnwer = validatePwd(pwd);
console.log(asnwer[0]);