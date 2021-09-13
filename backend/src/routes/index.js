const router = require("express").Router();
const userRouter = require('./userRouters');


router.use(userRouter);



module.exports = router;