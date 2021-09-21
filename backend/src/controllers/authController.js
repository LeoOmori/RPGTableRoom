const {createJwt, validateJwt} = require("../../utils/authToken");
const {users} = require('../models');
const bcrypt = require("bcrypt");
const {secret, refreshSecret} = require("../../config/auth");


module.exports = {

    async login(req, res){

        const {email, password} = req.body;

        try{
            const user = await users.findOne( {where:{email} });

            if(!user) return res.status(403).json({message:"user not found"});

            const isCompatible = await bcrypt.compare(password, user.password);
            if(!isCompatible) return res.status(403).json({message:"wrong password"});

            const jwtToken = createJwt(user.id, '999y', secret);
            const refreshToken = createJwt(user.id, '999y', refreshSecret);

            return res.json({token:jwtToken, refreshToken});

        }catch(e){
            res.status(500).json({"message":"Internal error"});
        }
    },

    refreshToken(req, res){

        try{

            const refreshToken = req.headers['authorization'];
            if(!refreshToken) return res.status(401).json({message:'no refresh token provided'});
            
            const token = refreshToken.split(' ')[1];

            const validateToken = validateJwt(token,refreshSecret);
            if(!validateToken) return res.status(401).json({ message: "not valid Token" });
    
            const newJwtToken = createJwt(validateToken.userId, '999y', secret);
            const newRefreshToken = createJwt(validateToken.userId, '999y', refreshSecret);
    
            return res.json({token:newJwtToken, newRefreshToken});

        }catch(e){
            res.status(500).json({"message":"Internal error"});
        }
    }

}