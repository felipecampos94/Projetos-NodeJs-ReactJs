const express = require('express');

const mongoose = require('mongoose');

const requireDir = require('require-dir');

const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/curso', {useUnifiedTopology: true, useNewUrlParser: true } );

requireDir('./src/models')

app.use('/sistema', require('./src/routes/routes'));

app.listen(4000);

