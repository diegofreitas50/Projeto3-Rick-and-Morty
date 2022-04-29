const route = require('./src/routes/personagem.router');
const connecteToDatabase = require('./src/database/database');
const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();

connecteToDatabase();

app.use(express.json());
app.use(cors());
app.use('/characters', route);


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
