const express = require('express')
const router = express.Router()

const {
  helper,
  tropipayPaymentCardsTest,
} = require('../controllers/tropipay.controller')

router.get('/', helper)

module.exports = router
