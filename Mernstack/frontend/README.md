Error about cors check the route if the cors is implemented if you see this kind of error 

Error: "GET http://localhost:5555/books net::ERR_FAILED 200 (OK)" 
  "Access to XMLHttpRequest at 'http://localhost:5555/books' from origin 'http://localhost:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource."

Solution:
"import express from "express";
import cors from "cors"; // Import cors middleware
import { Book } from '../models/bookModel.js';

const router = express.Router();

// Use cors middleware
router.use(cors());" implement cors in router

Error:
Error about the naming convention and spelling of the predifined function, double check inorder ot fix
and also the when the get method is error then double check the route, if correctly defined or the params is passed successfully 