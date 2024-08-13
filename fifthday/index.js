let bike=['honda','bmw','bajaj','yamaha','hero','royal enfield'];
console.log(bike);
bike.pop();
console.log(bike);


let car=['maruti','bmw','scorpio']
let allV=bike.concat(car)
console.log(allV)
let sliceB=bike.slice(1,4)
console.log(sliceB)

bike.splice(1,2,'kl','lk')
console.log(bike)
console.log(bike.indexOf('bajaj'))



bike.forEach((bike=>console.log(bike)))


// .forEach(bike=>console.log(bike))
// let length=bike.map(bike=> bike.length)
// console.log(length)

//for loop according to ES5 AND ES6 
for (let bik of bike){
    console.log(bik)
}

//filter

let vk= bike.filter(bike=>bike.length>3)
console.log(vk) 

let jk=bike.reduce((sum,bik)=>sum+bik.length,0)
console.log(jk)


//matrix 
let matrix=[ [1,2,3],[4,5,6],[7,8,9]]
console.log(matrix[[1][0]])

// (...) spread operator: it expands the elements inside the array
let arr1=[1,2,3]
let arr2=[...arr1,4,5,6]
console.log(arr2)
//(...) rest operator:
/*
it collects the elements inside the function
*/
function sum(...number){
return number.reduce((a,b)=>a+b)
console.log(sum(1,2,3,4,5,6))
}
//array destructing
let [first,second,third] =bike
console.log(first)
console.log(second)
//array membership
console.log(bike.includes('bmw'))

//sorting arrays
const y=bike.sort()
console.log(y)

let a=[[1,2,3],[4,5,6],[8,9,10],[11,12,13],[14,15,16]]

console.log(a.sort())
