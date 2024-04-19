let fullName = prompt("Ingrese su nombre completo");
const users = {};
const domain = "@myDomain.com";

const createUser = (name) =>{
    let fullName = name.toLowerCase();
    let arrayFullName = fullName.split(" ");
    let nameThreeFirsLetters = arrayFullName[0].slice(0, 3); 
    let lastNameThreeFirsLetters = arrayFullName[1].slice(0, 3); 
    let userName = nameThreeFirsLetters.concat(lastNameThreeFirsLetters);
    let userEmail = userName.concat(domain);
    return{
        [userName] : userEmail
    }
}

const appendUser = (user) =>{
    Object.assign(users, user);
}

const validateUser = (name) =>{
    let userObj = createUser(name);
    if (Object.keys(users).length === 0){
       appendUser(userObj);
    }
    else{

        if (Object.keys(users).includes(Object.keys(userObj)[0])){
            let name = Object.keys(userObj)[0];
            newName = name.concat('1');
            console.log(name); 
            let newEmail = newName.concat(domain);
            const userParce ={
                [newName] : newEmail 
            }
            appendUser(userParce);
        }
        else{
            appendUser(userObj);
        }
    } 
}

// Number.isNaN String Boolean Object

validateUser(fullName);
fullName = prompt("Ingrese su nombre completo");
validateUser(fullName);
fullName = prompt("Ingrese su nombre completo");
validateUser(fullName);
console.log(users);