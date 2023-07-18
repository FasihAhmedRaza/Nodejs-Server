import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('I m hello world  server!')
})


app.get('/fasih', (req, res) => {
    res.send('I m fasih ahmed server!')
  })
  app.get('/fast', (req, res) => {
    res.send('I m fast server!')
  })
  

app.listen(port, () => {
  console.log(`my server app listening on port ${port}`)
})