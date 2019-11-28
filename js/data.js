obj = {}
console.log(obj)
person = {
    "name": "nn",
    "age": 23,
    "address": "ujuh"
}
console.log(person)
person.mobileno = 97865565
person.age=24
//or
person["mobileno"] = 9876455
console.log(person)
person.update = function (name) {
    person.name = name
    console.log(person.name)
    person.update("nn")
}
person = {
    "name": "nn",
    "age": 23,
    "address": "ujuh"
}
obj = object.create(null)
console.log(obj)
student = object.create(person)
student.rollno = 34
console.log(student)
//person.age=24
//console.log(person)
