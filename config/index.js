var configValues = require("./config");

module.exports = {
    AccessDatabase: function () {

        return `mongodb+srv://${configValues.username}:${configValues.password}@cluster0-hquon.mongodb.net/`;
    }
}