// Write your solution in this file!
const employee = {
    name: "Toaster",
    address: "393 Bad Cat Ave"
}

//function updateEmployeeWithKeyAndValue(obj, key, value) {
    //obj[key] = value

    //return obj
//}

//console.log(updateEmployeeWithKeyAndValue(employee, "name", "Sam"))
//console.log(updateEmployeeWithKeyAndValue(employee, "address", "11 Broadway"))

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
  
    newObj[key] = value;
  
    return newObj;
  }
  
//console.log(updateEmployeeWithKeyAndValue(employee, "name", "Sam"))

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj
}

function deleteFromEmployeeByKey(obj, key){
    const newEmployee = { ...obj }
    delete newEmployee[key]
    return newEmployee
}
console.log(deleteFromEmployeeByKey(employee, "name"))

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key]
    return obj
}
console.log(destructivelyDeleteFromEmployeeByKey(employee, "name"))
