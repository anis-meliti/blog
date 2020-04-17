'use strict';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  password: String,
  avatar: String,
});

const User = mongoose.model('user', userSchema);
export default User;
