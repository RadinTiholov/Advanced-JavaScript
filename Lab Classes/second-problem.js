function solve(){
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
    let persons = [];
    persons.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
    persons.push(new Person('SoftUni'));
    persons.push(new Person('Stephan', 'Johnson', 25));
    persons.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'));
    return persons;
}
console.log(solve());