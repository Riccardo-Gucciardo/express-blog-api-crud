
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

const id = parseInt(req.params.id);

const post =arrayPosts.find(arrayPosts=>arrayPosts.id === id);

if(!post){
    
    res.status(404)

    return res.json(
        {
            status : 404,
            error : "not found",
            message :"post not found"
        }
    );
}

    res.json(post)

    
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
const id = parseInt(req.params.id);

const post =arrayPosts.find(arrayPosts=>arrayPosts.id === id);

if(!post){
    
    res.status(404)

    return res.json(
        {
            status : 404,
            error : "not found",
            message :"post not found"
        }
    );
}
arrayPosts.splice(arrayPosts.indexOf(post), 1);

res.sendStatus(204)
    


    
}




module.exports = {index,show,store,update,patch,destroy};