class Person{
    constructor(fName ,lName, ageOfPerson, emailofPerson){
        this.firstName = fName;
        this.lastName = lName;
        this.age = ageOfPerson;
        this.email = emailofPerson;
    }
    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}
let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());
