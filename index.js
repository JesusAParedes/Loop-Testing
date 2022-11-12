
let i=0
do {
    i++;
    // Commented out by Ethan
    // console.log(i);
} while (i<1000)

let object = {
    firstName: 'Jane',
    lastName: 'Doe',
    birthDate: 'Jan 5, 1925',
    gender: 'female'
}

function logOutKey() {
    let cleaned = Object.keys(object)
    console.log(cleaned)
}

function logOutEntry() {
    let cleaned = Object.entries(object)
    console.log(cleaned)
}

// Commented out by Ethan
// logOutKey()
// logOutEntry()

const arrayOfPersons = [
    {
    firstName: 'Jeff',
    lastName: 'Dugg',
    birthDate: 'Feb 11, 1992',
    gender: 'male',
    },
    {
    firstName: 'Jonathan',
    lastName: 'Vo',
    birthDate: 'June 20, 1995',
    gender: 'male',
    },
    {
    firstName: 'Abigail',
    lastName: 'Anderson',
    birthDate: 'August 15, 1990',
    gender: 'female',
    },
    {
    firstName: 'Jane',
    lastName: 'Doe',
    birthDate: 'Jan 5, 1925',
    gender: 'female'
    },
]

function forLoopPersons() {
    for(let i = 0; i < arrayOfPersons.length ;i++) {
        console.log(arrayOfPersons[i].birthDate)
        if(arrayOfPersons[i].birthDate.slice(-1) % 2 == 1) {
            console.log(Object.entries(arrayOfPersons[i]))
        }
    }
}

let userFullInfo = arrayOfPersons.map(function(element){
    return `${element.firstName} ${element.lastName} ${element.birthDate} ${element.gender}`;
})
console.log(userFullInfo);


const male = arrayOfPersons.filter(prop => {
    return prop.gender === 'male'
});
console.log(male);


const before1990 = arrayOfPersons.filter(year => year.birthDate.slice(-4) < '1990');
console.log(before1990);

const valuebefore = arrayOfPersons.some(year => year.birthDate.slice(-4) < '1990');
console.log(valuebefore);


