const jwt = require('jsonwebtoken');

function sign(user){
    console.log(user)
    return jwt.sign(user, 'secret');
}

module.exports = { sign }