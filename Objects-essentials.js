let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

/* ******************************** */

let schedule = {};

function isEmpty(objectToCheck) {
    for (let key in objectToCheck) {
        console.log(`${key} : ${objectToCheck[key]}`);
        return false;
    } return true;
}

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false


/* ******************************** */

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
function sumSalaries(objWithSalaries) {
    let sums = 0;
    for (let worker in objWithSalaries) {
        if (typeof objWithSalaries[worker] === 'number') {
            sums += objWithSalaries[worker];
        }
    }
    return sums;
}

console.log (sumSalaries(salaries));

/* ******************************** */

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(objToMult) {
    for (let key in objToMult) {
        if (typeof objToMult[key] === 'number') {
            menu[key] *= 2;      
            /**Bad move but the tusk is so. 
             * Better to work in a function with its own variables and objects and not to use global ones */
        }
    }
}

multiplyNumeric(menu);

console.log(menu);