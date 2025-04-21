const express= require('express')
const app = express()

exports.signup = (req,res)=>{
    res.render('signup')
}

exports.login = (req,res)=>{
    res.render('login')
}
exports.profile = (req,res)=>{
    res.render('CYP')
}
