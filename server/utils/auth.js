const jwt = require('jsonwebtoken');

// sets token secret and expiration date
const secret = 'mysecrethush';
const expiration = '2h';

module.exports = {

    // function for our authenticated routes
    authMiddleware: function (req, res, next) {
        // allows token to be sent via  req.query or headers
        // ["Bearer", "<tokenvalue>"]
        // verify token and get user data out of it
        // send to next endpoint


    },



    signToken: function ({ email, username, _id }) {
        const payload = { email, username, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};
