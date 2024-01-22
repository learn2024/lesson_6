import express from 'express';
import router from './routes.js';


var app = express();

app.listen(3000, );
app.use(express.json());

app.use('/api', router);