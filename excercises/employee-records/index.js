var employees=[];
var Employee = function (name, jobTitle, salary, status = "Full Time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    // this.printEmployeeForm = function () {
    //     employees.push(`Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: \$${this.salary}/year, Status: ${this.status}`)
    //     // console.log(`\nName: ${this.name}\nJob Title: ${this.jobTitle}\nSalary: \$${this.salary}/year\nStatus: ${this.status}\n`);
    // }
}

var ben = new Employee("Ben","Instructor",50000);
var steve = new Employee("Steve","student",0,"Part Time");
var jen = new Employee("Jen", "student", 0, "Contract")





Employee.prototype.printEmployeeForm = function () {
    employees.push(`Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: \$${this.salary}/year, Status: ${this.status}`)
    // console.log(`\nName: ${this.name}\nJob Title: ${this.jobTitle}\nSalary: \$${this.salary}/year\nStatus: ${this.status}\n`);
}



// console.log(ben);
ben.printEmployeeForm();
steve.printEmployeeForm();
jen.printEmployeeForm();
console.log(employees.sort());