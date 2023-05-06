const express  = require("express")
const {UserModel} = require("../model/user.model")

require('dotenv').config()

let userRoute = express.Router()

userRoute.get("/", async (req, res)=>{
    try {
        let user = await UserModel.find()
        res.send(user)
    } catch (error) {
        res.send("Something went wrong")
    }
})

userRoute.patch("/user/:id", async (req, res)=>{
    let id = req.params.id;
    let payload = req.body;
    try {
        await UserModel.findByIdAndUpdate({_id: id}, payload)
        res.send("Author has been updated")
    } catch (error) {
        res.send({Error: "Something went wrong"})
    }
})

userRoute.delete("/user/:id", async (req, res)=>{
    let id = req.params.id;
    try {
        await UserModel.findByIdAndDelete({_id: id})
        res.send("Author has been deleted")
    } catch (error) {
        res.send({Error: "Something went wrong"})
    }
})

userRoute.post("/add", async (req, res)=>{
    let {name, title, description} = req.body
    try {
        let date = Date.now()
        let user = new UserModel({name, title, description, date})
        await user.save()
        res.status(201).send("User register success")
    } catch (error) {
        console.log(error);
        res.send("Something went wrong")
    }
})

// "name": "prags",
// "title": "Hello ALL",
// "description": "ssadssadassadsadsadsa"

module.exports = {userRoute}