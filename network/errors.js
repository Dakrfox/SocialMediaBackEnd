const response = require ('./response');

function errors(err, req ,res, next) {
    console.error('[error]', err);
    response.error(req, res, err?.statusCode || 500, err.message);

}

module.exports = errors