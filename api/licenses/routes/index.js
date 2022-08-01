module.exports.get = async (req, res) => {
    const getLicenseService = require("../services/getLicense")
    
    const {httpStatusCode, httpData} = await getLicenseService(req);
    return res.status(httpStatusCode).end(httpData);
}

module.exports.post = async (req, res) => {
    const createLicenseService = require("../services/createLicense")

    const {httpStatusCode, httpData} = await createLicenseService(req);
    return res.status(httpStatusCode).end(httpData);
}

module.exports.put = async (req, res) => {
    const updateLicenseService = require("../services/updateLicense")

    const {httpStatusCode, httpData} = await updateLicenseService(req);
    return res.status(httpStatusCode).end(httpData);
}

module.exports.remove = async (req, res) => {
    const deleteLicenseService = require("../services/deleteLicense")

    const {httpStatusCode, httpData} = await deleteLicenseService(req);
    return res.status(httpStatusCode).end(httpData);
}
