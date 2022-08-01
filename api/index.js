const { get, post, put, remove } = require('./licenses/routes/')

module.exports.handler = async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return get(req, res);

        case "POST":
            return post(req, res);

        case "PUT":
            return put(req, res);

        case "DELETE":
            return remove(req, res);

        default:
            return res.status(405).end("Method not Allowed.")
    }
}
