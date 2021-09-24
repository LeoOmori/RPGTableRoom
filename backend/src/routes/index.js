const router = require("express").Router();
const userRouter = require('./userRouters');
const authRouter = require("./authRouters");
const roomRouter = require("./roomRouters");
const playerRouter = require("./playerRouters");
const characterRouter = require("./characterRouters");

router.use(userRouter);
router.use(authRouter);
router.use(roomRouter);
router.use(playerRouter);
router.use(characterRouter);



module.exports = router;