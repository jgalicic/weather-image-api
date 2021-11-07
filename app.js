const Joi = require('joi');  // Data validation
const express = require('express') // API framework
const app = express()
const port = process.env.PORT || 5000

// Documentation
// Express: https://expressjs.com/en/4x/api.html
// Joi: https://joi.dev/api/?v=17.4.2


app.use(express.json())
app.use(express.static('public'))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
