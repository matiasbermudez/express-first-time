const express = require('express');
const path = require('path');
const app = express()

const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`Servidor http puerto : ${PORT}  ON 👌`)
});

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, './index.html'));
    console.log('Se Recibio una petiticion get')
})