const { apiReturn: makeResponse } = require("../../../lib/utils.js");
const { license } = require("../../../lib/prisma");

module.exports = async function updateLicense(req) {
    const ERR_INSUFFICIENT_ARGS = makeResponse(400, false, `Insufficient arguments provided`);
    const { licenseId, new_licenseType } = req.query;

    if(!licenseId || !new_licenseType)
        return ERR_INSUFFICIENT_ARGS;
    
    try {
        const dbReturn = await license.update(
            {
                where:  { licenseId },
                data: { licenseId, licenseType: new_licenseType }
            }
        );

        return makeResponse(200, true, dbReturn);
    } catch(err) {
        return makeResponse(500, false, `A fatal error just occurred: ${err.message}`);
    }
}
