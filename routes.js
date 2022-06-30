const express = require("express");
const { getAboutTeam } = require("./utils/utils");
const router = express.Router();

router.use(express.static('public')); 

router.get('/',(req,res)=>{
    res.render("pages/home");
}); 

router.get('/about',(req,res)=>{
    res.render("pages/about", {aboutTeam: getAboutTeam()});
}); 

module.exports = router;