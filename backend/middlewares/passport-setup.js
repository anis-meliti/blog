'use strict';
import passport from 'passport';
import passportJwt from 'passport-jwt';

import { secretOrKey } from '../config/default.json';
import User from '../models/User';
const ExtractJwt = passportJwt.ExtractJwt;
const JwtStrategy = passportJwt.Strategy;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey,
};

passport.initialize();
passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const searchRes = await User.findById(jwt_payload.id).select('-password');
      searchRes ? done(null, searchRes) : done(null, false);
    } catch (error) {
      console.error(error);
    }
  })
);

export const isAuth = () => passport.authenticate('jwt', { session: false });
