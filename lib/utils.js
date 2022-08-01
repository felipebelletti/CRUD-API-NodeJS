module.exports.apiReturn = (_httpStatusCode, _apiSuccess, _apiRes) => {
    return {httpStatusCode: _httpStatusCode, httpData: JSON.stringify({status: _apiSuccess, data: _apiRes})}
}
