const {players,rooms} = require('../models'); 


module.exports = {

    async enterRoom(req, res){

        const { userId } = req.body;
        const { roomId } = req.params;

        try{
            const data = await rooms.findOne({where:{id:roomId}});
            if(!data) return res.status(400).json({message:"room doesn't exist"});
            if(data.ownerId == userId) return res.status(400).json({message:"You are the owner of this room"});

            await players.create({
                userId:userId,
                roomId:roomId
            });
            res.json({message:"You entered a room"});
        }catch(e){
            return res.status(500).json({"message":"Internal error"});
        }

    },
    async exitRoom(req, res){

        const { userId } = req.body;
        const { roomId } = req.params;

        try{

            const data = await rooms.findOne({where:{id:roomId}});
            if(!data) return res.status(400).json({message:"Room doesn't exist"});

            if(data.ownerId == userId) return res.status(400).json({message:"You are the owner of this room"});

            const newData = await players.findOne({where:{userId,roomId}});
            if(!newData) return res.status(400).json({message:"You are not in this room"});

            await players.destroy({
                where:{
                    userId,
                    roomId
                }
            });
            res.json({message:"You are not in this room anymore"});
        }catch(e){
            return res.status(500).json({"message":"Internal error"});
        }

    },

    async showPlayerRooms(req, res){

        const { userId } = req.body;
        try{
            const data = await players.findAll({
                where:{
                    userId,
                }
            });
            res.json(data);
        }catch(e){
            return res.status(500).json({"message":"Internal error"});
        }
    },



}