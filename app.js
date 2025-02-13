const express = require("express");
const app = express()
const port = 4000;
const postrouter = require("./routers/postsRouter")

app.use(express.static('public'));


app.use('/api/posts', postrouter)


app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`);
    
})