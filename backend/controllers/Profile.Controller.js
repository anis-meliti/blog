'use strict';

import User from '../models/User';
import Profile from '../models/Profile';
const profileController = {
  addProfile: async (req, res) => {
    const { bio, favTopic } = req.body;
    const { id } = req.params;
    try {
      const userSearch = await User.findById(id);
      if (!userSearch)
        return res.status(404).json({ errors: `user do not exist! ` });
      const newProfile = {
        user: id,
        bio,
        favTopic,
      };
      const addProfileRes = await newProfile.save();
      res.status(201).json(addProfileRes);
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },
  getProfile: async (req, res) => {
    const { id } = req.params.id;
    try {
      const searchRes = await Profile.findOne({ user: id });
      res.status.json(searchRes);
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },
  alterProfile: async (req, res) => {
    const { id } = req.params;
    const { newProfile } = req.body;
    try {
      const alterRes = await Profile.findOneAndUpdate(
        { user: id },
        { $set: { ...newProfile } }
      );
      res.status(200).json(alterRes);
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },
};
