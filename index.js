const express = require('express');
const app = express();
app.use(express.json());

app.post('/studentlogin', (req, res) => {
    res.send('<html><body><h1>INSIDE Your Mom ???</h1></body></html>');
});	

//View API
app.get('/viewassignment', (req, res) => {
    res.send('<html><body><h1>INSIDE View Assignment Page</h1></body></html>');
});

//Update API
app.put('/studentupdateprofile', (req, res) => {
    res.send('<html><body><h1>INSIDE Update Profile Page</h1></body></html>');
});

//Delete API
app.delete('/studentdeleteprofile', (req, res) => {
    res.send('<html><body><h1>INSIDE Delete Profile Page</h1></body></html>');
});

//Start the server
app.listen(5000, () => {
    console.log('Student Microservice is running on port 5000');
}
);

