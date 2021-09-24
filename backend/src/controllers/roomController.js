const {rooms} = require("../models");
const { nanoid } = require('nanoid');

module.exports = {

    async store(req, res){

        const {userId,title,description,} = req.body;
        const code = nanoid(10);

        try{
            await rooms.create({ownerId:userId,title, description, code});
            return res.json({message:"room created successfully"})
        }catch(e){
            console.log(e)
            return res.status(500).json({"message":"Internal error"});
        }

    },

    async showOwnerRooms(req, res){

        const {userId} = req.body;

        try{
            const room = await rooms.findAll({
                where:{ownerId:userId}
            });
            return res.json(room);

        }catch(e){
            return res.status(500).json({"message":"Internal error"});
        }
        
    },

    async update(req, res){

        const {userId,title,description} = req.body;
        const {roomId} = req.params

        try{

            const data = await rooms.findOne({where:{id:roomId,ownerId:userId}});
            if(!data) return res.status(500).json({message:"room doesn't exist"});

            await rooms.update(
                {
                    title,
                    description,
                },
                {
                where:{
                    ownerId:userId,
                    id:parseInt(roomId)
                }
            })

            res.json({message:"User updated"});

        }catch(e){
            res.json(e)
            return res.status(500).json({"message":"Internal error"});
        }
        

    },

    async show(req, res){

        const{ roomId } = req.params;
        
        try{

            const data = await rooms.findOne({where:{id:roomId}});
            if(!data) return res.status(400).json({"message":"Room not found"});

            return res.json(data)

        }catch(e){
            return res.status(500).json({"message":"Internal error"});
        }

    },

    async delete(req, res){

        const {userId} = req.body;
        const {roomId} = req.params;

        try{
            const data = await rooms.findOne({where:{id:roomId}});
            if(!data) return res.status(400).json({message:"Room not found"});

            await rooms.destroy({where:{ownerId:userId,id:roomId}});

            res.json({message:"room deleted"});


        }catch(e){
            console.log(e)
            return res.status(500).json({"message":"Internal error"});
        }

    }

}