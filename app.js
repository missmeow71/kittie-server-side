const express = require('express')
const cors = require('cors')

const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening non port 3000!'))