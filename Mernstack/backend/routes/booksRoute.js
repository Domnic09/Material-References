import express from "express";
import cors from "cors";
import { Book } from '../models/bookModel.js';


const router = express.Router();
router.use(cors());

router.post('/', async (req, res) => {
    try{
        if (
           !req.body.title ||
           !req.body.author ||
           !req.body.publishYear 
        ) {
            return res.status(400).send({
                message: 'Send all required fields: title, author, pusblishYear',
            });
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };

        const book = await Book.create(newBook);

        return res.status(201).send(book);
    }catch (error){
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }
}); 

//take note async callback function handles our request
router.get('/', async (req, res) => {
    try{
        const books = await Book.find({});
        // return res.status(200).json(books);
        return res.status(200).json({
            count: books.length,
            data: books
        });

    } catch(err){
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }
});

//Route for Get one book from database by id
router.get('/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const book = await Book.findById(id);
        return res.status(200).json(book);
    } catch(err){
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }
});

//update the book need an id
router.put('/:id', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear 
         ) {
             return res.status(400).send({
                 message: 'Send all required fields: title, author, pusblishYear',
             });
         }
         const { id } = req.params;

         const result = await Book.findByIdAndUpdate(id, req.body);
         
         if(!result){
            return res.status(404).json({ message: "Book not found"});
         }
         return res.status(200).send({ message: "Book updates successfully"});

    } catch (error) {
        console.log(err.message);
        res.status(500).send({ message: err.message})
    }
});

//delete a bookd
router.delete('/:id', async (req, res) =>{
    try {
        const { id } = req.params;

        const result = await Book.findByIdAndDelete(id);
         
        if(!result){
            return res.status(404).json({ message: 'Books not found'});
        }
        return res.status(200).send({ message: 'Books deleted successfully'})
    } catch (error) {
       console.log(err.message);
       return res.status(500).send({ message: err.message });
    }
});

export default router;