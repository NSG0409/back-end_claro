import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.post('/form', (request, response) => {
    console.log(request.body);
    //db.collection('clients').add(data) -> Firebase
    response.send('Rodando...');
})

app.listen(3333);