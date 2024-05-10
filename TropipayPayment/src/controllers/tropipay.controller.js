const axios = require('axios')
const config = require('../utils/config')

const helper = async (req, res) => {
  res.json({
    message: 'Hello World!',
  })
}

const tropipayLogin = async () => {
  try {
    const response = await axios.post(
      'https://tropipay-dev.herokuapp.com/api/access/login',
      {
        email: config.TROPIPAY_TESTING_EMAIL,
        password: config.TROPIPAY_TESTING_PASSWORD,
      }
    )

    const token = response.data.token
    return token
  } catch (error) {
    console.error(error.message)
    return null
  }
}

const tropipayPay = async (req, res) => {
  try {
    const token = await tropipayLogin()
    if (!token) {
      res.status(500).json({ message: 'Error al iniciar sesión en Tropipay' })
      return
    }

    const response = await axios.post(
      'https://tropipay-dev.herokuapp.com/api/v2/movements/in/with_tpp_url',
      {
        reference: req.body.reference,
        concept: req.body.concept,
        description: req.body.description,
        amount: Math.round(req.body.amount * 100),
        currency: req.body.currency,
        lang: req.body.lang,
        urlSuccess: req.body.urlSuccess,
        urlFailed: req.body.urlFailed,
        urlNotification: req.body.urlNotification,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )

    const url = response.data.url
    res.json({ url: url })
  } catch (error) {
    res.status(500).json({ message: 'Error al realizar el pago en Tropipay' })
  }
}

module.exports = {
  helper,
  tropipayPay,
}
