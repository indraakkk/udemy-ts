function add(n1, n2) {
    if (typeof n1 !== 'number' || typeof n1 !== 'number') {
        throw new Error('invalid type');
    }
    else {
        return n1 + n2;
    }
}
var res = add(1, 3);
//    ^?
console.log("result is ".concat(add(1, 2)));
console.log("result is ".concat(res));
