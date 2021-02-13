const cors = require('cors')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const partialResponse = require('partial-response-express')
const authorizer = require('./authorizer-middleware')

module.exports = (app) => {
    app.use(partialResponse())
    app.use(
    cors({
        origin: '*',
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
        maxAge: 5,
        credentials: true,
        allowMethods: ['GET', 'POST', 'UPDATE', 'PUT', 'PATCH', 'DELETE'],
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    }))
    app.use(bodyParser.json());
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
    app.use(bodyParser.urlencoded({ extended: true }))

    app.use(methodOverride('X-HTTP-Method-Override'))

    app.use(authorizer)
};
