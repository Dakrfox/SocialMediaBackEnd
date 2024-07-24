const jwt = require('jsonwebtoken');
const { error } = require('../network/response');
const config = require('../config');
const secret = config.jwt.secret;

function sign(user){
  return jwt.sign(user, secret);
}

function verify (token){
  return jwt.verify(token, secret);
}

const check = {
    own: function(req, owner) {
        const decoded = decodeHeader(req);
        console.log(decoded);

        if (decoded.id !== owner) {
            throw new Error('No puedes hacer esto');
        }
    },
}
function getToken(authorization) {
    if (!authorization) {
        throw new error(403, 'No tienes autorización por falta de token');
    }
    if (authorization.indexOf('Bearer ') === 0) {
        return authorization.replace('Bearer ', '');
    }
    return null;
}


function decodeHeader ( req){
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;
    return decoded;
}

module.exports = { sign, check }