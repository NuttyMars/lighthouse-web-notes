class Employee {
  //based on root node
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }

  //adds subordinates to a node so they can be linked
  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  //gets number of subordinates an employee has
  get numberOfSubordinates() {
    return this.subordinates.length;
  }

  //gets number of levels between employee and CEO
  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }

    return numberOfPeople;
  }

  //determines if two employees have the same boss
  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }

  //depth first traversal
  //finds all employees who make oven a specific amount a year
  employeesThatMakeOver(amount) {

    //create a new employees array to hold every employee that makes over the specified amount
    let employees = [];

    //if the current employee makes over that amount, add them to the array
    if (this.salary > amount) {
      employees.push(this);
    }

    //loop through subordinates
    for (const subordinate of this.subordinates) {

      //call the method on all subordinates recursively
      const subordinatesThatMakeOver = subordinate.employeesThatMakeOver(amount);

      //combine results
      employees = employees.concat(subordinatesThatMakeOver);
    }

    return employees;
  }

  //depth first traversal
  //calculates total number of employees under a certain employee
  get totalEmployees() {

    //this is to include current node
    let totalEmployees = 1;

    for (const subordinate of this.subordinates) {
      if(this.numberOfSubordinates >= 0) {
        totalEmployees += subordinate.totalEmployees;
      }
    }
  
    return totalEmployees;
  }
}

//DRIVER CODE

//root node
const ada = new Employee("Ada", "CEO", 3000000.00);

//VP level
const craig    = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela   = new Employee("Angela", "VP Retail", 1000000);
const phil     = new Employee("Phil", "VP Marketing", 1000000);

//link root node with VP level
ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

//middle level
const simone  = new Employee("Simone", "Software", 200000);
const ali     = new Employee("Ali", "Software", 100000);
const karla   = new Employee("Karla", "Retail", 120000);
const florida = new Employee("Florida", "Marketing", 150000);
const david   = new Employee("David", "Marketing", 200000);
const brian   = new Employee("Brian", "Marketing", 100000);

//link VP level with middle
craig.addSubordinate(simone);
craig.addSubordinate(ali);
angela.addSubordinate(karla);
phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);

//leafs
const sarah    = new Employee("Sarah", "Software", 95000);
const andrew   = new Employee("Andrew", "Software", 90000);
const emma     = new Employee("Emma", "Marketing", 60000);
const jeremy   = new Employee("Jeremy", "Marketing", 60000);
const chandler = new Employee("Chandler", "Retail", 100000);

//link middle level with leafs
ali.addSubordinate(sarah);
ali.addSubordinate(andrew);
david.addSubordinate(emma);
david.addSubordinate(jeremy);
karla.addSubordinate(chandler);

//testing methods
console.log('Ada\'s boss: ', ada.boss);
console.log('---');
console.log('Craig\'s boss: ', craig.boss.name);
console.log('---');
console.log('Simone\'s boss: ', simone.boss.name);
console.log('---');
console.log('David\'s boss: ', david.boss.name);
console.log('---');
console.log('Arvinder subordinates: ', arvinder.numberOfSubordinates);
console.log('---');
console.log('Ada subordinates: ', ada.numberOfSubordinates);
console.log('---');
console.log('Phil subordinates: ', phil.numberOfSubordinates);
console.log('---');
console.log('Levels to CEO for Florida: ', florida.numberOfPeopleToCEO);
console.log('---');
console.log('Levels to CEO for Angela: ', angela.numberOfPeopleToCEO);
console.log('---');
console.log('Florida and David have the same boss:', florida.hasSameBoss(david));
console.log('---');
console.log('Florida and Craig have the same boss:', florida.hasSameBoss(craig));
console.log('---');
console.log('Employees in superior tax group:', ada.employeesThatMakeOver(418401).length);
console.log('---');
console.log('Number of employees in the entire company:', ada.totalEmployees);
console.log('---');
console.log('Number of employees in software development:', craig.totalEmployees);
console.log('---');