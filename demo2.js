str = "abc"

console.log( str.length ) 

d = new Date()

console.log( d.getTime() ) 

person = { 
    name: "Tarannum Rahman",
    job: "The Most Gracious Entrepenuer and Philanthopist",
    age: 21,


    greet: () => console.log("Hello " + person.name) 
}

person.age++;
person.greet() 

console.log(person.job)
console.log(person.age)
