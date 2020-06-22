let fs = require("fs"); // built in node module that knows how to work with reading and writing files
const FILE_NAME = './assets/students.json';

let studentRepo = {
    get: function(resolve, reject) {
        fs.readFile(FILE_NAME, function(error, data) {
            if(error) {
                reject(error);
            }
            else {
                resolve(JSON.parse(data));
            }
        })
    },
    getById: function(id,resolve, reject) {
        fs.readFile(FILE_NAME, function(error, data) {
            if(error) {
                reject(error);
            } else {
                let student = JSON.parse(data).find(s => s.id == id);
                resolve(student);
            }
        })
    },
    search: function(searchObject, resolve, reject) {
        fs.readFile(FILE_NAME, function(error, data) {
            if(error) {
                reject(error);
            }
            else {
                let students = JSON.parse(data);
                if(searchObject) {
                    students = students.filter( s =>
                    (searchObject.id ? s.id == searchObject.id : true) &&
                    (searchObject.name ? s.name.toLowerCase().indexOf(searchObject.name.toLowerCase()) >= 0 : true));
                }
                resolve(students);
            }
        })
    }
};

module.exports = studentRepo;