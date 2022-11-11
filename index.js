
let i=0
do {
    i++;
    console.log(i);
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

logOutKey()
logOutEntry()
