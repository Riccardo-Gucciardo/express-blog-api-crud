
const arrayPosts = require("../data/posts.js")

function index(req,res){

    let filteredPosts = arrayPosts;

    if(req.query.tags) {
        filteredPosts = arrayPosts.filter(arrayPosts=>{
            return arrayPosts.tags.includes(req.query.tags)
        })
    }

    res.json(filteredPosts)



}
function show(req,res){
res.send(`Dettagli della pizza ${req.params.id}`)


    
}
function store(req,res){
    res.send('Creazione nuova pizza');


    
}
function update(req,res){
    res.send(`Modifica integrale della pizza ${req.params.id} `);


    
}
function patch(req,res){
    res.send(`Modifica parziale della pizza ${req.params.id} `);


    
}
function destroy(req,res){
    res.send(`Eliminazione della pizza  ${req.params.id}`);


    
}




module.exports = {index,show,store,update,patch,destroy};