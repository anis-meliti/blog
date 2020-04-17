'use strict';

import mongoose from 'mongoose';

import { mongoUri } from './default.json';

const connectDb = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`💾 is connected ...`);
  } catch (error) {
    console.error(error);
  }
};
export default connectDb;
