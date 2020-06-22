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
    }
};

module.exports = studentRepo;