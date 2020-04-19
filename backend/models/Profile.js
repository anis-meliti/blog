'use strict';
import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  user: mongoose.Schema.Types.ObjectId,
  ref: 'user',
  bio: String,
  favTopic: [String],
});
const Profile = mongoose.model('profile', profileSchema);
export default Profile;
