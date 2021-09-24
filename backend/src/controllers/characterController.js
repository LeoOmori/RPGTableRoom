const {characters,rooms} = require('../models');
const { Op } = require("sequelize");

module.exports = {

    async store(req, res){

        const { roomId, name, description, sheet, userId, isPublic } = req.body;

        try{
            const room = await rooms.findOne({where:{id:roomId}});
            if(!room) return res.status(400).json({message:"room doesn't exist"});

            const data = await characters.create({
                ownerId: userId,
                roomId,
                name,
                description,
                sheet,
                isPublic
            });

            return res.json(data);

        }catch(e){
            return res.status(500).json({"message":"Internal error"});
        }

    },
    async update(req, res){

        const { roomId, name, description, sheet, userId, isPublic } = req.body;
        const { characterId } = req.params;

        try{
    
            const room = await rooms.findOne({where:{id:roomId}});
            if(!room) return res.status(400).json({message:"room doesn't exist"});

            const data = await characters.update({
                ownerId: userId,
                roomId,
                name,
                description,
                sheet,
                isPublic
            },{
                where:{id:characterId,ownerId:userId, roomId}
            });

            if(!data[0]) return res.status(400).json({message:"Character not Found"})
            return res.json({message:"Character updated"});

        }catch(e){
            return res.status(500).json({"message":"Internal error"});
        }

    },
    async delete(req, res){


        const { userId } = req.body;
        const { characterId } = req.params;

        try{

            await characters.destroy({where:{id:characterId,ownerId:userId}})
            res.json({message:"character deleted"});
            
        }catch(e){
            return res.status(500).json({"message":"Internal error"});
        }


    },
    async show(req, res){

        const { characterId } = req.params;

        try{

            const data = await characters.findOne({where:{id:characterId}});
            if(!data) return res.status(400).json({message:"Character doesn't exist"});

            return res.json(data);

        }catch(e){
            return res.status(500).json({"message":"Internal error"});
        }
    },
    async allRoomCharacters(req, res){

        const { userId } = req.body;
        const { roomId } = req.params;

        try{
            const room = await rooms.findOne({where:{id:roomId}});
            if(!room) return res.status(400).json({message:"room doesn't exist"});

            const data = await characters.findAll({
                where:{
                    [Op.or]:[
                        {
                            roomId,
                            isPublic:true,
                        },
                        {
                            roomId,
                            ownerId:userId   
                        }
                    ]
                }
            });

            res.json(data);

        }catch(e){
            console.log(e)
            return res.status(500).json({"message":"Internal error"});
        }

    }

}