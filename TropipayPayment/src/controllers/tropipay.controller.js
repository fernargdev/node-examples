const axios = require('axios')
const config = require('../utils/config')
const { Tropipay } = require('@yosle/tropipayjs')

const helper = async (req, res) => {
  res.json({
    message: 'Tropipay API',
  })
}

const tropipayLoginTest = async (req, res) => {
  try {
    const response = await axios.post(
      'https://tropipay-dev.herokuapp.com/api/access/login',
      {
        email: config.TROPIPAY_TESTING_EMAIL,
        password: config.TROPIPAY_TESTING_PASSWORD,
      }
    )

    res.json(response.data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const tropipayPaymentCardsTest = async (req, res) => {}

module.exports = {
  helper,
  tropipayLoginTest,
  tropipayPaymentCardsTest,
}
