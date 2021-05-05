const express = require('express');
const router = express.Router();

router.post('/create', (req, res) => {
    res.json({message: 'Account Created'})
})

module.exports = router;