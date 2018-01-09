const root = process.env.SERVER_URL || 'http://localhost:6000'
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

const getDivision = function (x, y) {
    return fetch(root+'/division?x='+ x +'&y=' + y, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
}


test('Sommo due numeri interi normali', () => {
    return getSum(5,7)
    .then (res => expect(res).toBe(12))
    .catch(e => { console.log(e) })
});