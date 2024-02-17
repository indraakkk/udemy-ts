type Product = {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
};

enum Status {
  GUEST,
  NOT_COMPLETE,
  COMPLETE,
}

const person: {
  name: string;
  age: number;
  hobbies: string[]; // array of string
  role: [number, string]; // tuple
  status: Status;
} = {
  name: 'John',
  age: 30,
  hobbies: ['Sport', 'Reading'],
  role: [2, 'author'],
  status: Status.COMPLETE,
};

person.role = [0, 'admin'];

const product: Product = {
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

for (const hobby of person.hobbies) {
  //        ^?
  console.log(hobby.toUpperCase());
  // since hobby type is a string, then ts show list of support function for the string
  // if you force to access hobby.map(), ts will show error since this function not for string
}

if (person.status === Status.COMPLETE) {
  console.log('resistration is complete');
}

// any *please avoid of this usage of any, breakage ts purpose
let favoriteColor: any[];
favoriteColor = ['#974957', [22, 22, 22]];

// union types
function combine(input1: number | string, input2: number | string) {
  let result
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

console.log(combine(10, 11))
console.log(combine('10', 11))

