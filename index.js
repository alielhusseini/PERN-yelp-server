// imports
const express = require('express')
const cors = require('cors')
require('dotenv/config')

// setup
const app = express()
const port = process.env.PORT || 5000
app.listen(5000, () => console.log(`server listening on port ${ port }`))
app.use(express.json())
app.use(cors())

// routes
app.use("/api/v1/restaurants", require('./routes/restaurantRoute'))