function add(num1: number, num2: number){
  return num1 + num2
}

const res = add(1,2)
//    ^?


type ToUppercaseWithPrefix<T extends string> = `PREFIX:${Uppercase<T>}`

type example = ToUppercaseWithPrefix<'whoa'>
//    ^?

