//Api de ejemplo para control API REST en Koa

import Koa from 'koa'
const cors = require('@koa/cors');
import bodyParser from 'koa-body'
import router from './router/index'

const app = new Koa()
app.use(cors())
const port = 3000

app.use(bodyParser({ multipart: true, urlencoded: true }))

app.use(router.routes())

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
