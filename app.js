const Joi = require('joi');  // Data validation
const express = require('express') // API framework
const app = express()
const port = process.env.PORT || 5000

// Documentation
// Express: https://expressjs.com/en/4x/api.html
// Joi: https://joi.dev/api/?v=17.4.2


app.use(express.json())
app.use(express.static('public'))

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send(`
  <h2>Weather Image API</h2>

  <p>Contains over 400 images based on type of weather, season, and time of day</p>
  
  <p>Example enpoint:</p>
  
  <a href="/img/fall/am1/clear/glenn-carstens-peters-dMX-4Lv0k7I-unsplash.jpg">/img/fall/am1/clear/glenn-carstens-peters-dMX-4Lv0k7I-unsplash.jpg</a>

  `)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
