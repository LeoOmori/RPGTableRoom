const express = require("express");
const router = require("./src/routes");


app = express();

app.use(express.json());
app.use(router);


app.listen("3333",() => {
    console.log("server on")
})
