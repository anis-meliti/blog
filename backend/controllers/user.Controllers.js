'use strict';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { secretOrKey } from '../config/default.json';

const userController = {
  register: async (req, res) => {
    const { email, name, password, avatar, role } = req.body;
    try {
      const searchRes = User.findOne({ email });
      if (searchRes)
        return res.status(400).json({ errors: 'email already token' });
      const newUser = new User({
        email,
        name,
        password,
        avatar,
        role,
      });
      const salt = await bcrypt.genSalt(10);
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        try {
          const addRes = await newUser.save();
          res.status(201).json(addRes);
        } catch (error) {
          res.status(500).json({ errors: error });
        }
      });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const searchRes = await User.findOne({ email });
      if (!searchRes)
        return res.status(400).json({ errors: 'bad credentials!' });
      const isMatch = await bcrypt.compare(password, searchRes.password);
      if (!isMatch) return res.status(400).json({ errors: 'bad credentials!' });
      const payload = {
        id: searchRes._id,
        email: searchRes.email,
        name: searchRes.name,
        avatar: searchRes.avatar,
        role: searchRes.role,
      };
      jwt.sign(payload, secretOrKey, (err, token) => {
        if (err) throw err;
        res.json({ token: `Bearer ${token}` });
      });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },
};
export default userController;
