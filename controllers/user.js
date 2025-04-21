const express= require('express')
const app = express()
const userModel = require('../models/user-Model')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

exports.signup = (req,res)=>{
    res.render('signup')
}

exports.login = (req,res)=>{
    res.render('login')
}
exports.CYP = (req,res)=>{
    
    res.render('CYP')
}
exports.interest = (req,res)=>{
    res.render('interest')
}
exports.profile = (req,res)=>{
    res.render('profile')
}
