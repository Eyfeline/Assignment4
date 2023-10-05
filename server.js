const express = require('express');
const knexConfig = require('./Knexfile')[process.env.NODE_ENV || 'development'];

// Initialize Knex with the database configuration
const knex = require('knex')(knexConfig);

const app = express();

const port = 3000;
app.listen(port, () => console.log(`Listening on ${port}!`));

const staticRoute = express.static('public');
app.use('/public', staticRoute);
app.use('/', staticRoute); 


app.get("/api/:id", (req, res) => {
    knex('proverb').where({id_proverb: req.params.id}).select('proverb_text').then(result => {
        console.log(result);
        res.json(result);
    })
});

app.get("/api/create.html/:aName/:aBirth/:aDeath", (req, res) => {
    console.log(req.params.aName, req.params.aBirth, req.params.aDeath);
    knex('author').insert({author_name: req.params.aName, birth: req.params.aBirth, death: req.params.aDeath}).returning('*').then((result) => {
        console.log(result); // Log the result to the console
        res.json(result); // Send the JSON response with the query result
      })
})

app.get("/api/retrieve.html/:aName", (req, res) => {
    knex('author').whereILike('author_name', `%${req.params.aName}%`).select().then((result) => {
        console.log(result); // Log the result to the console
        res.json(result); // Send the JSON response with the query result
      })
})

app.get("/api/update.html/:id/:text", (req,res) =>{
    knex('proverb').where({id_proverb: req.params.id}).update('proverb_text', req.params.text).returning('*').then((result) => {
        console.log(result); // Log the result to the console
        res.json({"success": true}); // Send the JSON response with the query result
      });
})

app.get("/api/delete.html/:id", (req,res) => {
    knex('author').where({id_author: req.params.id}).del().returning('*').then((result) => {
        console.log(result); // Log the result to the console
        res.json({"success": true}); // Send the JSON response with the query result
      });
})

