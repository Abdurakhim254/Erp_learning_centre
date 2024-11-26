console.log("\n\nShallow copy\n")
let a={name:"Azim",age:25}
let b=JSON.parse(JSON.stringify(a))
console.log(a,b)
a.name="Said"
a.age=77
console.log(a,b)

console.log("\nDeep copy\n")

let c={name:"Azim",age:25}
let d=c
console.log(c,d)
c.name="Akrom"
c.age=11
console.log(c,d)