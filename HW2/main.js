function makeObjectDeepCopy(obj) {
    const newObj = {};
    for (let el in obj) {
        if (obj[el] instanceof Object) {
            newObj[el] = deepClone(obj[el]);
            continue;
        }
        newObj[el] = obj[el];
    }
    return newObj;
}

function selectFromInterval(arr, min, max) {
    for (el in arr) {
        if (typeof arr[el] !== 'number' || !Number.isInteger(arr[el]) || isNaN(arr[el]) || arr[el] === Infinity) {
            throw new Error('Ошибка')
        }
    }
    if (!Array.isArray(arr)) {
        throw new Error('Ошибка')
    }
    if (min < max) {
        const lowestHigh = arr.find(n => (n >= max))
        const condition = val => (val >= min && val <= lowestHigh)
        return arr.filter(condition)
    } else if (max < min) {
        const lowestHigh = arr.find(n => (n >= min))
        const condition = val => (val >= max && val <= lowestHigh)
        return arr.filter(condition)
    }
}
let myIterable = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
        if (this.from >= this.to) {
            throw new Error('Ошибка')
        } else {
            this.current = this.from;
            return this
        }
    },
    next() {
        if (this.current <= this.to) {
            return {
                done: false,
                value: this.current++
            }
        } else {
            return {
                done: true
            }
        }
    }
}