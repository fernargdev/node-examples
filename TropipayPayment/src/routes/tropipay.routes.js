const express = require('express')
const router = express.Router()

const {
  helper,
  tropipayLoginTest,
} = require('../controllers/tropipay.controller')

router.get('/', helper)

router.post('/login', tropipayLoginTest)

module.exports = router
