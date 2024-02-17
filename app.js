var Status;
(function (Status) {
    Status[Status["GUEST"] = 0] = "GUEST";
    Status[Status["NOT_COMPLETE"] = 1] = "NOT_COMPLETE";
    Status[Status["COMPLETE"] = 2] = "COMPLETE";
})(Status || (Status = {}));
var person = {
    name: 'John',
    age: 30,
    hobbies: ['Sport', 'Reading'],
    role: [2, 'author'],
    status: Status.COMPLETE,
};
person.role = [0, 'admin'];
var product = {
    id: '123123',
    price: 123123,
    tags: ['new', 'hype'],
    details: {
        title: 'speed shoes',
        description: 'new hype',
    },
};
console.log(person.age);
console.log(product.details.title);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    //        ^?
    console.log(hobby.toUpperCase());
    // since hobby type is a string, then ts show list of support function for the string
    // if you force to access hobby.map(), ts will show error since this function not for string
}
if (person.status === Status.COMPLETE) {
    console.log('resistration is complete');
}
// any *please avoid of this usage of any, breakage ts purpose
var favoriteColor;
favoriteColor = ['#974957', [22, 22, 22]];
// union types
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combine(10, 11));
console.log(combine('10', 11));
