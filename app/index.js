const express = require("express");
const app = express();


app.get('/marley', (req, res) => {
    res.send('Marley')
})


app.listen(3002, ()=> { 
    console.log(`Port is running`)
})