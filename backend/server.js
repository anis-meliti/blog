'use strict';

import express from 'express';
import connectDb from './config/connectDb';

const app = express();
app.use(express.json());
connectDb();
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`🚀 is 🏃 on ${PORT}`)
);
