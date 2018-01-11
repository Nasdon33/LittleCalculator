const root = process.env.SERVER_URL || 'http://localhost:8080'
const fetch = require('node-fetch');

const getSum = function (x, y) {
    return fetch(root+'/sum?x='+ x +'&y=' + y, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
}

const getSubtract = function (x, y) {
    return fetch(root+'/subtract?x='+ x +'&y=' + y, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
}

const getMultiply = function (x, y) {
    return fetch(root+'/multiply?x='+ x +'&y=' + y, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
}

const getDivide = function (x, y) {
    return fetch(root+'/divide?x='+ x +'&y=' + y, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
}


test('Sommo due numeri interi positivi', () => {
    return getSum(5,7)
    .then (getResponse => { return getResponse.json() })
    .then(jsonResponse => { expect(jsonResponse.value).toEqual(12)})
    .catch(err => { console.log(err) })
});

test('Sommo due numeri interi negativi', () => {
    return getSum(-5,-7)
    .then (getResponse => { return getResponse.json() })
    .then(jsonResponse => { expect(jsonResponse.value).toEqual(-12)})
    .catch(err => { console.log(err) })
});

test('Sommo un numero positivo con uno negativo', () => {
    return getSum(5,-7)
    .then (getResponse => { return getResponse.json() })
    .then(jsonResponse => { expect(jsonResponse.value).toEqual(-2)})
    .catch(err => { console.log(err) })
});

test('Sommo un numero negativo con uno positivo', () => {
    return getSum(-5,7)
    .then (getResponse => { return getResponse.json() })
    .then(jsonResponse => { expect(jsonResponse.value).toEqual(2)})
    .catch(err => { console.log(err) })
});

test('Sommo un numero non intero con uno positivo', () => {
    return getSum(2.3,7)
    .then (res => {expect(res.status).toBe(400)})
    .catch(err => { console.log(err) })
});

test('Sommo una stringa con uno positivo', () => {
    return getSum("marco",7)
    .then (res => {expect(res.status).toBe(400)})
    .catch(err => { console.log(err) })
});



test('Sottrazione tra due numeri interi positivi', () => {
    return getSubtract(5,7)
    .then (getResponse => { return getResponse.json() })
    .then(jsonResponse => { expect(jsonResponse.value).toEqual(-2)})
    .catch(err => { console.log(err) })
});

test('Sottrazione due numeri interi negativi', () => {
    return getSubtract(-5,-7)
    .then (getResponse => { return getResponse.json() })
    .then(jsonResponse => { expect(jsonResponse.value).toEqual(2)})
    .catch(err => { console.log(err) })
});

test('Sottraggo un numero positivo ad uno negativo', () => {
    return getSubtract(-5,7)
    .then (getResponse => { return getResponse.json() })
    .then(jsonResponse => { expect(jsonResponse.value).toEqual(-12)})
    .catch(err => { console.log(err) })
});

test('Sottraggo un numero negativo ad uno positivo', () => {
    return getSubtract(5,-7)
    .then (getResponse => { return getResponse.json() })
    .then(jsonResponse => { expect(jsonResponse.value).toEqual(12)})
    .catch(err => { console.log(err) })
});

test('Sottraggo un numero non intero ad uno positivo', () => {
    return getSubtract(2,-1.7)
    .then (res => {expect(res.status).toBe(400)})
    .catch(err => { console.log(err) })
});

test('Sottraggo una stringa ad uno positivo', () => {
    return getSubtract(7,"marco")
    .then (res => {expect(res.status).toBe(400)})
    .catch(err => { console.log(err) })
});



test('Moltiplicazione tra due numeri interi positivi', () => {
    return getMultiply(5,7)
    .then (getResponse => { return getResponse.json() })
    .then(jsonResponse => { expect(jsonResponse.value).toEqual(35)})
    .catch(err => { console.log(err) })
});

test('Moltiplicazione tra due numeri interi negativi', () => {
    return getMultiply(-5,-7)
    .then (getResponse => { return getResponse.json() })
    .then(jsonResponse => { expect(jsonResponse.value).toEqual(35)})
    .catch(err => { console.log(err) })
});

test('Moltiplicazione tra due numeri interi di segno opposto', () => {
    return getMultiply(5,-7)
    .then (getResponse => { return getResponse.json() })
    .then(jsonResponse => { expect(jsonResponse.value).toEqual(-35)})
    .catch(err => { console.log(err) })
});

test('Moltiplico un numero non intero ad uno positivo', () => {
    return getMultiply(2,-1.7)
    .then (res => {expect(res.status).toBe(400)})
    .catch(err => { console.log(err) })
});

test('Moltiplico una stringa ad uno positivo', () => {
    return getMultiply(7,"marco")
    .then (res => {expect(res.status).toBe(400)})
    .catch(err => { console.log(err) })
});


test('Divisione tra due numeri interi positivi', () => {
    return getDivide(20,5)
    .then (getResponse => { return getResponse.json() })
    .then(jsonResponse => { expect(jsonResponse.value).toEqual(4)})
    .catch(err => { console.log(err) })
});

test('Divisione tra due numeri interi negativi', () => {
    return getDivide(-10,-2)
    .then (getResponse => { return getResponse.json() })
    .then(jsonResponse => { expect(jsonResponse.value).toEqual(5)})
    .catch(err => { console.log(err) })
});

test('Divisione tra due numeri interi di segno opposto', () => {
    return getDivide(5,-1)
    .then (getResponse => { return getResponse.json() })
    .then(jsonResponse => { expect(jsonResponse.value).toEqual(-5)})
    .catch(err => { console.log(err) })
});

test('Divido un numero non intero con uno positivo', () => {
    return getDivide(3.5, 2)
    .then (res => {expect(res.status).toBe(400)})
    .catch(err => { console.log(err) })
});

test('Divido una stringa con uno positivo', () => {
    return getDivide("marco", 4)
    .then (res => {expect(res.status).toBe(400)})
    .catch(err => { console.log(err) })
});

test('Divisione tra due numeri interi positivi con risultato non intero', () => {
    return getDivide(25,10)
    .then (getResponse => { return getResponse.json() })
    .then(jsonResponse => { expect(jsonResponse.value).toEqual(2.5)})
    .catch(err => { console.log(err) })
});

test('Divisione di un numero intero per 0', () => {
    return getDivide(20,0)
    .then (res => {expect(res.status).toBe(400)})
    .catch(err => { console.log(err) })
});