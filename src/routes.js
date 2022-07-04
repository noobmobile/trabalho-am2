const express = require("express");
const { getAboutTeam, readText } = require("./utils/utils");
const router = express.Router();

router.use(express.static('public')); 

router.get('/',(req,res)=>{
    const text = readText("./resource/paragrafos.csv");
    res.render("pages/home", {text});
}); 

router.get('/about',(req,res)=>{
    res.render("pages/about", {aboutTeam: getAboutTeam()});
}); 

module.exports = router;