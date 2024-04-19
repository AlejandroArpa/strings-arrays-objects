let fullName = prompt("Ingrese su nombre completo");
const users = [];

const createUser = (name) =>{
    let fullName = name.toLowerCase();
    let arrayFullName = fullName.split(" ");
    let nameThreeFirsLetters = arrayFullName[0].slice(0, 3); 
    let lastNameThreeFirsLetters = arrayFullName[1].slice(0, 3); 
    let userName = nameThreeFirsLetters.concat(lastNameThreeFirsLetters);
    let userEmail = userName.concat("@myDomain.com");
    return{
        [userName]:userEmail
    }
}

const validateUser = (name) =>{
    const userObj = createUser(fullName);
    console.log("Holi")
    console.log(userObj.key[0]);
    // users.forEach(user => {
    //     if (user?.(userObj.key[0])){

    //     }
    // })
}

validateUser(fullName);
