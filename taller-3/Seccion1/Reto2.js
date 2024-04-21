const pwd = prompt("Ingrese una contraseña, recuerda debe tener al menos 8 caracteres, min: un numero, una letra y un caracter especial.");
let aux = false;
const validates = [];
const specialsChars =  `!@#$%^&*()+=_-{}[]:;"'?<>,.|/\~\`\\`; 
const arraySpecialChars = specialsChars.split(",");
const asciiArraySpecialChars = [];

arraySpecialChars.forEach((char) => {
    asciiArraySpecialChars.push(char.charCodeAt());
})

const arrayToValidate = (start, end) => {
    let array = [];
    for (let i = start; i <= end; i++){
        array.push(i);
    }
    return array;
}

validates.push(arrayToValidate(48, 57)); //Ascii 48 to 57 is Numbers
validates.push(arrayToValidate(65, 90)); //Ascii 65 to 90 is a-z
validates.push(arrayToValidate(97, 122)); //Ascii 97 to 122 is A-Z 
validates.push(asciiArraySpecialChars);


const validatePwd = (pwd) =>{
    let answer = [];
    let asciiArrayPwd = [];
    arrayPwd = pwd.split("");
    arrayPwd.forEach(char => {
        asciiArrayPwd.push(char.charCodeAt());
    });
    validates.forEach(toValidate =>{
        let flag = false;
        toValidate.forEach(char => {
            if (!flag){
                flag = asciiArrayPwd.includes(char);
            }
        }
        )
        answer.push(flag);
    })
    pwd.length >=8 ? 
        answer.push(true)
        : answer.push(false)

    return answer
}

const answer = validatePwd(pwd);
const msgs = [];
!answer[0] ? msgs.push("-Falta numero") : null; 
!answer[1] && !answer[2] ? msgs.push("-Falta letra") : null;
!answer[3] ? msgs.push("-Falta simbolo") : null;
!answer[4] ? msgs.push("-Contraseña demasiado corta") : null;
answer[0] && (answer[1] || answer[2]) && answer[3] && answer[4] ? msgs.push("Contraseña segura") : null; 
alert(msgs.join("\n"));
