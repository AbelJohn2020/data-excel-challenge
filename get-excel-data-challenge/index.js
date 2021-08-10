const express = require('express');
const file = require('./read-excel-data');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(cors());

app.get("/", (req, res) => {
    const query = file.getData();
    res.json(query);
});
app.listen(port, () => {
    console.log("Server is at: http://localhost:3001");
})