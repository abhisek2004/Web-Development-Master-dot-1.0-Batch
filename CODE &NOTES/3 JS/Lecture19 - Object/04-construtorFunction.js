function Employee(name,age,colony,street) {
    this.name = name;
    this.age = age;

    this.address = {
        street,
        colony,
    }
}

let emp1 = new Employee("Abhisek panda",69,"Guddul");
console.log(emp1.name);
console.log(emp1.address.colony);