const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/submit', (req, res) => {
    console.log(req.body);
    res.json({
        success: true,
        Message : "Data recived"
    });

})

app.listen(3000, () =>{
    console.log("Server running");
})