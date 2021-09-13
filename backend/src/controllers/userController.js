const {users} = require("../models");
const hashPassword = require("../../utils/hashPassword");

module.exports = {

    async store(req, res){

        const {name,email,password} = req.body;

        const passwordHash = await hashPassword(password);
        console.log(passwordHash)
 
        try{
            const user = await users.findOrCreate({ 
                where: {email},
                defaults: {
                    name,email,password:passwordHash
                } 
            });

            if(user[1]){
                res.json({"message":"User created"});
            }else{
                res.status(409).json({"message":"Email already in use"});
            }

        }catch(e){
            res.status(500).json({"message":"Internal error while creating a user"})
        }




    },

    update(req, res){


    },

    show(req, res){


    }




}