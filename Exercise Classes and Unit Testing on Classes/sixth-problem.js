//Todo
class Company{
    constructor(){
        this.departments = {}; 
    }
    addEmployee(name, salary, position, department){
        if(name == '' || name == undefined || name == null 
        || salary == '' || salary == undefined || salary == null
        || position == '' || position == undefined || position == null
        ||department == '' || department == undefined || department == null){
            throw new Error("Invalid input!");
        }
        if(salary < 0){
            throw new Error("Invalid input!");
        }
        if (!this.departments[department]) {
            
            this.departments[department] = {};
            this.departments[department].employees = [];
        }
        const employee = Object.assign({ name, salary: Number(salary), position });
        this.departments[department].employees.push(employee);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    bestDepartment(){
        let best = 0;
        let bestDepartment = {};
        for (const department in this.departments) {
            let depAvg = Number.MIN_VALUE;
            for (const employee in department.employee) {
                depAvg += employee.salary;
            }
            depAvg = depAvg / this.departments[department].employees.length;
            if (depAvg > best) {
                depAvg = best;
                bestDepartment = department;
            }
        }
        this.departments[bestDepartment].employees.sort((a, b) => b.salary - a.salary 
        || a['name'].localeCompare(b['name']));

        return `Best Department is: ${bestDepartment.name}\nAverage salary: ${best.toFixed(2)}\n${this.departments[bestDepartment].employees.map(x => `${x.name} ${x.salary} ${x.position}`).join('\n')}`;
        
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());