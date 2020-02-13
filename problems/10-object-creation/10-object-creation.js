/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let x = {
    name: "Jesus",
    age: 34
}


class Stuff
{
    name ="Josue"
    age = 34
    constructor()
    {
        this.name
        this.age
    }
}

function person(name, age)
{
    this.name = name
    this.age = age
}

let obj = new Stuff

console.log(x)
console.log(obj)
console.log(new person("Amy",55))

