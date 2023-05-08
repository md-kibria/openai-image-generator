const express = require('express')
const { generateimage } = require('../controllers/openaiController')
const router = express.Router()

router.post('/generateimage', generateimage)
router.get('/generateimage', generateimage)

module.exports = router