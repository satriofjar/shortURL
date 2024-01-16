import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes";

dotenv.config();

const app = express();

app.use(router);

app.listen(process.env.PORT, ()=> {console.log('Running on port', process.env.PORT)})