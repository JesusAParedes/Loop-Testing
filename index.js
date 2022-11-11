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

logOutKey()