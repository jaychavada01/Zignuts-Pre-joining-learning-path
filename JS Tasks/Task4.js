/* Write a JavaScript program that creates a class called University with properties for university names and departments. Include methods to add a department, remove a department, and display all departments. Create an instance of the University class and add and remove departments. */

class University {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }

  addDepartment(department) {
    if (!this.departments.includes(department)) {
      this.departments.push(department);
      console.log(`Department "${department}" added to ${this.name}.`);
    } else {
      console.log(`Department "${department}" already exists in ${this.name}.`);
    }
  }

  removeDepartment(department) {
    const index = this.departments.indexOf(department);
    if (index !== -1) {
      this.departments.splice(index, 1);
      console.log(`Department "${department}" removed from ${this.name}.`);
    } else {
      console.log(`Department "${department}" does not exist in ${this.name}.`);
    }
  }

  displayDepartments() {
    console.log(`Departments in ${this.name}:`);
    if (this.departments.length === 0) {
      console.log("No departments available.");
    } else {
      this.departments.forEach((dept, index) => {
        console.log(`${index + 1}. ${dept}`);
      });
    }
  }
}

const myUniversity = new University("Oxford University");

myUniversity.addDepartment("Computer Science");
myUniversity.addDepartment("Mathematics");
myUniversity.addDepartment("Physics");

myUniversity.displayDepartments();

myUniversity.removeDepartment("Mathematics"); // Remove a department

myUniversity.displayDepartments(); // Display departments again to verify removal

myUniversity.removeDepartment("Biology"); // Attempt to remove a non-existent department

myUniversity.addDepartment("Physics"); // Add an already existing department
