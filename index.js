import express from 'express'
import routes from './src/routes/crmRoutes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
const PORT = 4000

// mongoose connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// app is the express library
routes(app)

// serving static files - giving access to public folder - will be available to any endpoint that needs it
app.use(express.static('public'))

app.get('/', (req, res) => 
    res.send(`Note and express server running on port ${PORT}`)
)

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
)