// basic server to proxy requests and avoid CORS errors.
const express = require('express')
// keep private keys safe
require('dotenv').config({ path: __dirname + '/.env' })
const axios = require('axios')
const md5 = require('blueimp-md5')
const cors = require('cors')
const app = express()
// avoid cors errors
app.use(cors())

const PORT = process.env.PORT || 4000

const publicKey = process.env.PUBLICKEY

const privateKey = process.env.PRIVATEKEY

const ts = process.env.TS

const stringToHash = ts + privateKey + publicKey

const hash = md5(stringToHash)

const baseUrl = process.env.BASEURL

app.get(`/allcharacters/`, (request, response) => {

  let characters = []
  let promises = []
  const limit = 1600

  for (i = 0; i < limit; i = i + 100) {
    promises.push(
      axios
        .get(`${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=100&offset=${i}`)
        .then(response => {
          characters.push(response.data.data.results);
        })
    )
  }

  Promise.all(promises).then(() => response.status(200).json(characters.flat().map(a => a.name)));


})


app.listen(PORT, () => console.log(`CORS-enabled web server running on port ${PORT}`))