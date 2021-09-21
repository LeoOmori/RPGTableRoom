const {secret} = require('../config/auth');
const {validateJwt} = require("../utils/authToken");

const JWT_SECRET = secret;

function authorization(req,res,next){

    const headerToken = req.headers['authorization'];
    if (!headerToken) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const token = headerToken.split(' ')[1];
    
    const validateToken = validateJwt(token,JWT_SECRET);

    if(!validateToken) return res.status(401).json({ message: "not valid Token" });
    req.body.userId = validateToken.userId;
    next();
}

module.exports = authorization;