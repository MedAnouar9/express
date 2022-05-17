

const express =  require('express');
const app = express();
const port = 5000;

const { AddDate } = require('./Midelware');

  app.use(express.static(__dirname +'/public'));
  app.get("/",AddDate,(req,res,next)=>{
    res.sendFile(__dirname+ "/public/home.html");
  });
  app.get("/Services",AddDate,(req,res,next)=>{
    res.sendFile( __dirname +"/public/OurService.html");
  });
  app.get("/contact",AddDate,(req,res,next)=>{
    res.sendFile(__dirname+ "/public/ContactUs.html");
  });



app.listen(port, (err) => {
  (err) ? console.log(err) : console.log(`Go to your localhost at port : ${port}`);
})