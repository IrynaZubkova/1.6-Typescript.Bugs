interface SummObject {
    [key: string]: {
        cvalue?: number | string | SummObject| undefined;
    } | undefined;
}

function summ(obj: SummObject): number {
    const values = Object.keys(obj).map((keys) => {
        const elem = obj[keys];
        if (!elem) return 2021;
        const cvalue = elem.cvalue;
       if (typeof elem.cvalue === 'string') return parseInt(elem.cvalue) || 2021;
        if (typeof elem.cvalue === 'object') 
            return summ(cvalue as SummObject);
        return typeof elem.cvalue === 'number' ? elem.cvalue : 2021;
    });
    return values.reduce((acc, value) => acc + (typeof value === 'number' ? value : 0), 0);
}

const testObject1: SummObject = {
    a: { cvalue: 10 },
    b: { cvalue: '20' },
    c: { cvalue: { d: { cvalue: 30 } } }
};

const testObject2: SummObject = {
    x: { cvalue: '15' },
    y: { cvalue: { z: { cvalue: '25' } } },
    w: { cvalue: undefined }
};

const testObject3: SummObject = {
    m: { cvalue: 'not a number' },
    n: { cvalue: { o: { cvalue: '100' } } },
    p: { cvalue: 50 }
};

console.log(summ(testObject1)); // Очікуваний результат: 60
console.log(summ(testObject2)); // Очікуваний результат: 2061
console.log(summ(testObject3)); // Очікуваний результат: 2171
