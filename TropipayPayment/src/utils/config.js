require('dotenv').config()

// SERVER
const PORT = process.env.PORT || 3003

// TROPIPAY TESTS
const TROPIPAY_TESTING_EMAIL =
  process.env.TROPIPAY_TESTING_EMAIL || 'developers+demo001@tropipay.com'
const TROPIPAY_TESTING_PASSWORD =
  process.env.TROPIPAY_TESTING_PASSWORD || '5tBVe#w650'

module.exports = {
  PORT,
  TROPIPAY_TESTING_EMAIL,
  TROPIPAY_TESTING_PASSWORD,
}
