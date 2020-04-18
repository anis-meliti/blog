'use strict';

import express from 'express';
import connectDb from './config/connectDb';
import user from './routes/user';

const app = express();
app.use(express.json());
connectDb();

app.use('/user', user);

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`🚀 is 🏃 on ${PORT}`)
);
