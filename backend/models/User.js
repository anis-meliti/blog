'use strict';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  password: String,
  avatar: String,
  role: ['user', 'admin'],
});

const User = mongoose.model('user', userSchema);
export default User;
