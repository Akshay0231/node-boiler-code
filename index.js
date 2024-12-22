const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')

dotEnv.config()

const connectionUrl = process.env.MONGODB_URI || ''
if (!connectionUrl) {
  console.log('MONGODB_URI is not defiined. Please set it in environmental variables');
  process.exit(1)
}
const PORT = process.env.PORT || 3300

const app = express()


const startServer = async () => {
  try {
    await mongoose.connect(connectionUrl)
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  } catch (error) {
    console.log('Mongoose error : ', error.message)
  }
}

startServer()