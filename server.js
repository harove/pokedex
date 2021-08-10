var cors = require('cors')
const express = require('express')
const app = express()

// app.get("/", function(req,res){
//     res.send("Express here we go!")
// })
app.use(cors())
app.use("/pokemon/",require("./routes/pokemonRoute"))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000/");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  

app.listen(3005,function(){
    console.log('express server is running')
})