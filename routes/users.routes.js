const express = require('express');
const router = express.Router();
// const {  } = require('../controllers/users.controller');

// Register a manager or employee
router.post('/register', );

// Authenticate user
router.post('/login', );

// Log user out
router.post('/logout', );

// Get user/profile details
router.get('/:id', );

// Update profile details
router.put('/:id', );

// Change password
router.put('/:id/password', );

// Approve/reject an employee  
router.put('/:id/status', );

module.exports = router;
