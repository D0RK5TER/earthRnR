// backend/routes/index.js
const express = require('express');
const router = express.Router();

const apiRouter = require('./api');
router.use('/api', apiRouter);

// Static routes
// Serve React build files in production
if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    // Serve the frontend's index.html file at the root route
    router.get('/', (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        res.sendFile(
            path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
    });
    // Serve the static assets in the frontend build folder
    router.use(express.static(path.resolve("../frontend/build")));
    // Serve the frontend's index.html file at all other routes 
    router.get(/^(?!\/?api).*/, (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        res.sendFile(
            path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
    });
}

if (process.env.NODE_ENV !== 'production') {
    if (process.env.NODE_ENV !== 'production') {
        router.get('/api/csrf/restore', (req, res) => {
            res.cookie('XSRF-TOKEN', req.csrfToken());
            res.status(201).json({});
        });
    }
}
module.exports = router;