import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

// const PORT = process.env.PORT || 5555;

// const app = require('express');

const app = express();

//this is declared in order to make the request of api or route to be established 
// to test the api or route implemented here use postman

app.use(express.json());

//Route for save a new book

app.use('/books', booksRoute);

//Option 1: allow all origin with default of cors(*)
// app.use(cors());
//Option 2: Allow Custom Origins
app.use(
    cors({
        origin: 'http://localhost:5173/',
        method: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);

//get http method and result for the web server
app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('MERN stack');
});


//call back function recieves, response, and handled bec working
//with mongoose is an asynchronous process in our callback function

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });