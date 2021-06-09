import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import firebase from 'firebase';
import "firebase/firestore";

firebase.initializeApp(require('../.env'));

const db = firebase.firestore();

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.post('/', (request, response) => {
    db.collection('dados').add(request.body.data).catch(err => {
        console.log(err);
    });
    
    response.send('Rodando...');
});

app.listen(3333);