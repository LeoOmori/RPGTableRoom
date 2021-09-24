const {users} = require("../models");
const hashPassword = require("../../utils/hashPassword");

module.exports = {

    async store(req, res){

        const {name,email,password} = req.body;
        const passwordHash = await hashPassword(password);

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
            res.status(500).json({"message":"Internal error while creating a user"});
        }
    },

    async update(req, res){

        const { userId, name, email } = req.body;

        try{
            await users.update({name, email},{
                where:{
                    id:userId
                }
            });
            res.json({message:"user updated"});
        }catch(e){
            res.status(500).json({"message":"Internal error"});
        }
    },
    async show(req, res){

        const { userId } = req.params;

        try{
            const data = await users.findOne({where:{id:userId}});  
            if(!data) res.status(400).json({"message":"User not found"});
            res.json(data);

        }catch(e){
            console.log(e)
            res.status(500).json({"message":"Internal error"});
        }

    }

}