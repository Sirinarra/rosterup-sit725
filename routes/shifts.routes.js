const express = require('express');
const router = express.Router();
// const {  } = require('../controllers/shifts.controller');

// Create / Post a shift for cover
router.post('/', );

// Get Shifts
router.get('/', );

// Get Shift by ID
router.get('/:id', );

// Update Shift by ID
router.put('/:id', );

// Employee Claims Shift
router.post('/:id/claim', );

// Manager Approves / Rejects Employee Shift Claim
router.put('/:id/claim', );

// Original Employee Withdraws Shift
router.post('/:id/withdraw', );

module.exports = router;