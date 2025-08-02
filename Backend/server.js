import express from 'express';
//const express = require("express");
const app = express();

app.get("/api/notes", (req, res) => {
    // Send the notes
    res.status(200).send("You got 22 notes");
});



app.listen(5001, () => {
    console.log('Server is running on Port: 5001'); 
});





