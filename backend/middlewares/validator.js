'use strict';
import { check, validationResult } from 'express-validator';

export const registerRules = () => [
  check('email', 'this field is required !').notEmpty(),
  check('email', 'this field require a valid email !').isEmail(),
  check('name', 'this field is required !').notEmpty(),
];

export const validator = (req, res, next) => {
  const errors = validationResult(req);
  errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};
