// backend/utils/validation.js
const { validationResult } = require('express-validator');

// middleware for formatting errors from express-validator middleware
// (to customize, see express-validator's documentation)
const handleValidationErrors = (req, _res, next) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        const errors = validationErrors
            .array()
            .map((error) => `${error.msg}`);

        const err = Error('Bad request.');

        if (errors.includes('Please provide a valid email or username.')
            || errors.includes('Please provide a password.')) {
            err.message = 'Validation error'
            err.status = 400
            err.errors = {
                'credential': 'Email or username is required',
                'password': 'Password is required'
            }
            next(err);
        }

        if (errors.includes('Please provide a valid email.') ||
            errors.includes('Please provide a username with at least 4 characters.') ||
            errors.includes('Password must be 6 characters or more.') ||
            errors.includes('Username cannot be an email.')) {
            err.message = 'Validation error'
            err.status = 400
            err.errors = {
                'email': 'Invalid email',
                'username': 'Username is required',
                'firstName': 'First Name is required',
                'lastName': 'Last Name is required'
            }
            next(err);
        }
        err.errors = errors;
        err.status = 400;
        err.title = 'Bad request.';
        next(err);
    }
    next();
};

module.exports = {
    handleValidationErrors
};