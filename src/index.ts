import express, {Request, response, Response}from 'express';
import cors from 'cors';
import { request } from 'http';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use (cors ());

app.get('/', (request: Request, response: Response) => {
    return response.send('ok');
});

app.listen (8080, ()=> {
    console.log('api rodando....');
    
});