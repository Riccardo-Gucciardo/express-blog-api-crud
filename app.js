const express = require("express");
const app = express()
const port = 4000;
const postController = require("./controllers/postController.js")




app.use('/api/posts', postController)


app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`);
    
})