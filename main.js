const express = require('express');
const app = express();

let port = process.env.PORT || 3000;

app.get('/', (req, res)=>{

   res.send({
       messsage:"Hola desde autmatic backend chido con heroku"
   });

});

app.listen(port, ()=>{
   console.log("inicié mi backend");
   
});