const express = require('express')
const router = express.Router()
const { createRecord } = require('../controller/records')



router.post('/', createRecord)


module.exports = router