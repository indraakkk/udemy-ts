function add(n1: number, n2:number){
  if(typeof n1 !== 'number' || typeof n1 !== 'number'){
    throw new Error('invalid type')
  } else {
    return n1+n2
  }
}


const res = add(1,3)
//    ^?

console.log(`result is ${add(1,2)}`)
console.log(`result is ${res}`)
