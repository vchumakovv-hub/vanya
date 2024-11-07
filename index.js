import express from 'express';
import Router from './src/routers/user.js';
// import cors from 'cors';
// import dotenv, { config } from 'dotenv';


let port = 5000;

const app = express();
app.use(express.json());

// app.use(cors());
app.use('/', Router);


app.listen(port, () => {console.log('started...');});