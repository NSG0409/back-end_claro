import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/form', (request, response) => {
    console.log(request.body);
    response.send('caralho do caralho');
})

app.listen(3333);