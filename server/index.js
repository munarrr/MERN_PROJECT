const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const routes = require('./routes/AuthRoute')
const app = express();
const PORT = config.get("serverPort")
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use("/api/auth",routes)
const start = async () => {
     try{
          await mongoose.connect(config.get('Url'))
          app.listen(PORT, () => { 
          console.log('server stjahrted' , PORT) })

     }catch(e){
          console.log(express)
     }
}


start()
