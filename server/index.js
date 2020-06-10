const express = require('express')
const app = express()
const port = 3000

app.set('secret', '789hjkbfdg9haiur')
app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
require('./routes/admin')(app)

app.listen(port, () => console.log(`server run in：http://localhost:3000`))

