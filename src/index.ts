import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes";
import path from 'path';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();

// Set template engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware untuk serving static files (misalnya, CSS atau gambar)
app.use(express.static(path.join(__dirname, 'public')));

// To handle request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle routing
app.use(router);

app.listen(process.env.PORT, ()=> {console.log('Running on port', process.env.PORT)})