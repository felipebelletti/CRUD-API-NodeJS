const { apiReturn: makeResponse } = require("../../../lib/utils.js");
const { license } = require("../../../lib/prisma");

module.exports = async function createLicense(req) {
    const ERR_INSUFFICIENT_ARGS = makeResponse(400, false, `Insufficient arguments provided`);
    const { licenseId, licenseType } = req.query;

    if(!licenseId || !licenseType)
        return ERR_INSUFFICIENT_ARGS;
    
    try {
        const dbReturn = await license.create(
            {
                data: { licenseId, licenseType }
            }
        );
        const OK_SUCCESS = makeResponse(200, true, dbReturn)

        return OK_SUCCESS;
    } catch(err) {
        const ERR_UNKNOWN_ERROR = makeResponse(500, false, `A fatal error just occurred: ${err.message}`);
        return ERR_UNKNOWN_ERROR;
    }
}
