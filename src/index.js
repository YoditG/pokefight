const express = require('express')
const app = express();

const cors = require('cors');
const pokeRouter = require('./routes/pokeRouter');

app.use(cors())
app.use('/pokemon',pokeRouter)




const port = process.env.port || 3000;




app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})