const fs = require("fs");
const userData = './allUser.json'


module.exports.getAllUser = (req, res) => {
    fs.readFile(userData, (err, data) => {
        if (err) {
            res.write("failed to read data")
            res.end()
        }
        else {
            res.write(data)
            res.end()
        }
    })
}