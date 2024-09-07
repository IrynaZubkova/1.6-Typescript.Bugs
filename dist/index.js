"use strict";
function summ(obj) {
    const values = Object.keys(obj).map((keys) => {
        const elem = obj[keys];
        if (elem === undefined || elem === null)
            return 2021;
        if (typeof elem.cvalue === 'string')
            return parseInt(elem.cvalue) || 2021;
        if (typeof elem.cvalue === 'object')
            return summ(elem.cvalue);
        return typeof elem.cvalue === 'number' ? elem.cvalue : 2021;
    });
    let sum = 0;
    for (const value of values) {
        if (typeof value === 'number') {
            sum += value;
        }
    }
    return sum;
}
const testObject1 = {
    a: { cvalue: 10 },
    b: { cvalue: '20' },
    c: { cvalue: { d: { cvalue: 30 } } }
};
const testObject2 = {
    x: { cvalue: '15' },
    y: { cvalue: { z: { cvalue: '25' } } },
    w: { cvalue: undefined }
};
const testObject3 = {
    m: { cvalue: 'not a number' },
    n: { cvalue: { o: { cvalue: '100' } } },
    p: { cvalue: 50 }
};
console.log(summ(testObject1)); // Очікуваний результат: 60
console.log(summ(testObject2)); // Очікуваний результат: 2061
console.log(summ(testObject3)); // Очікуваний результат: 2171
