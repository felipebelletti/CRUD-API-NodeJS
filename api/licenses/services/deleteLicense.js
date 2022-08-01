const { apiReturn: makeResponse } = require("../../../lib/utils.js");
const { license } = require("../../../lib/prisma");

module.exports = async function deleteLicense(req) {
    const ERR_INSUFFICIENT_ARGS = makeResponse(400, false, `Insufficient arguments provided`);
    const { licenseId } = req.query;

    if(!licenseId)
        return ERR_INSUFFICIENT_ARGS;
    
    try {
        const dbReturn = await license.deleteMany({where: { licenseId }});

        return makeResponse(200, true, dbReturn);
    } catch(err) {
        return makeResponse(500, false, `A fatal error just occurred: ${err.message}`);
    }
}
