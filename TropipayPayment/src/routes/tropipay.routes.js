const express = require('express')
const router = express.Router()

const { helper, tropipayPay } = require('../controllers/tropipay.controller')

router.get('/', helper)
router.post('/pay', tropipayPay)

module.exports = router
