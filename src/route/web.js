import express from "express";

let router = express.Router();

let initWebRouter = (app) => {
    router.get('/', (req, res) => {
        return res.send("HELLO WORLD");
    })
    return app.use("/", router);
}

module.exports = initWebRouter