import express from 'express';
import {createServer, Server} from "http";
import bodyParser from 'body-parser';
import controller from './controllers'
import database from './config/database';
import cors from 'cors';
const app = express();

database.sync({
    alter: true,
});

app.use(cors());
app.use(bodyParser.json());
app.use(controller);

const server = createServer(app);
server.listen(process.env.PORT || 5000);