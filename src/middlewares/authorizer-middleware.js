const TokenUtil = require('../utils/token-utils')
const tokenUtil = new TokenUtil()
const PUBLIC_RESOURCES = require('../configs/public-resources')
const ResponseUtils = require('../utils/response-util')
const UnauthorizedException = require('../configs/exceptions/unauthorized-exception')


const authorize = async (req, res, next) => {
  try {
    const isPublic = PUBLIC_RESOURCES.find(resource => resource.path === req.originalUrl)
    if (isPublic) { next() } 
    else {
        let token = req.get('Authorization')
        if(!token) throw new UnauthorizedException()
        
        token = token.split(' ')[1]
        req.user = tokenUtil.verifyToken(token)
        next()
    }
  } catch (error) {
    ResponseUtils.errorResponse(res, error);
  }
}

module.exports = authorize
