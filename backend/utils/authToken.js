const jwt = require('jsonwebtoken');


module.exports = {

    createJwt(userId, timeEx, secret){
        const tokenJwt = jwt.sign({userId}, secret, { expiresIn: timeEx });
        
        return tokenJwt;
    },
    
    validateJwt(token,secret){

        let payLoad = false;

        jwt.verify(token, secret, function(err, decoded) {
            payLoad = decoded
            if(err){
                payLoad = false
            }
        });

        return payLoad;
    }
}