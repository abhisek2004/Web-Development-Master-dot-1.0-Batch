// Write a function that takes an array of objects and returns an array of all the values of a specified property name.


function valueOfObject(arrOfObj, propertyName) {
    const values = arrOfObj.map(obj => obj[propertyName]);
    return values;
}

const obj = [
    {
        Name: "Abhisek",
        Age: 20,
        City: "Jajpur",
        Gender: "Male"
    },
    {
        Name: "Khushi",
        Age: 17,
        City: "Jajpur",
        Gender: "Female"
    },
    {
        Name: "Bhosu",
        Age: 20,
        City: "Delhi",
        Gender: "Female"
    },
    {
        Name: "Sumit",
        Age: 24,
        City: "Mumbai",
        Gender: "Male"
    },
]

console.log(`Name : ${valueOfObject(obj, "Name")}`);
console.log(`Age : ${valueOfObject(obj, "Age")}`);
console.log(`City : ${valueOfObject(obj, "City")}`);
console.log(`Gender : ${valueOfObject(obj, "Gender")}`);