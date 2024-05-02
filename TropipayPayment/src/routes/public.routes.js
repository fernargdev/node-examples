const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'public' })
})

router.get('/success', (req, res) => {
  res.sendFile('success.html', { root: 'public' })
})

router.get('/cancel', (req, res) => {
  res.sendFile('cancel.html', { root: 'public' })
})

module.exports = router
