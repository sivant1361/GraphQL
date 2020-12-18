const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.connect("mongodb+srv://king:9994532266@node-netninja.4r9my.mongodb.net/graphql",{ useNewUrlParser: true,useUnifiedTopology: true });
mongoose.connection.once('open',()=>{
    console.log("Connected to database");
})

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});