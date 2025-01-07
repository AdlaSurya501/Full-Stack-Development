class Person {
    constructor(name, age)
    {
        this.name = name
        this.age = age
    }
    greet() 
    {
        console.log(`Hi ${this.name}`)
    }
    isAdult()
    {
        return this.age>=18
    }   
}
const p1=new Person("Surya",18);
const p2=new Person("Rohith",15);
p1.greet();
console.log(p1.isAdult());