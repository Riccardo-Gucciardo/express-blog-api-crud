const express = require("express");
const app = express()
const port = 3000;
const postrouter = require("./routers/postsRouter")
const notFound = require("./middleware/notFound")
const errorHandler = require("./middleware/errorHandler")

app.use(express.static('public'));
app.use(express.json());



app.use('/api/posts', postrouter)


app.use(errorHandler)
app.use(notFound);
app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`);  
     
})  