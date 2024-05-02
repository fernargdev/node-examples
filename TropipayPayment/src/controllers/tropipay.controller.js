const { Tropipay } = require('@yosle/tropipayjs')

const helper = async (req, res) => {
  res.json({
    message: 'Tropipay API',
  })
}

const tropipayPaymentCardsTest = async (req, res) => {}

module.exports = {
  helper,
  tropipayPaymentCardsTest,
}
