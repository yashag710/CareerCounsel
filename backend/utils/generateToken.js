const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({email : user.email , id : user._id }, process.env.jwt_key);
}
module.exports.generateToken = generateToken; 