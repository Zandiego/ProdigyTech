const { body, validationResult } = require('express-validator');

exports.validateUser = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email required'),
  body('age').isInt({ min: 0 }).withMessage('Age must be a number '),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  }
];

exports.validateUpdate = [
  body('name').optional().notEmpty(),
  body('email').optional().isEmail(),
  body('age').optional().isInt({ min: 0 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  }
];
