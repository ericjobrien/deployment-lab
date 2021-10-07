const express = require('express');
const path = require('path');

const app = express();


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
});

// app.get('/css', (req, res) => {
//     res.sendFile(path.join(__dirname, '../stylesheet.css'));
// })

app.use('/css', express.static(path.join(__dirname, '../stylesheet.css')));

const port = process.env.PORT || 4004;

app.listen(port, () => {
    console.log(`Server is up on ${port}`);
})