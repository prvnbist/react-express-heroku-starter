const express = require('express')
const app = express()
const port = 3000

app.get('/data', (req, res) => res.send({data: 'Praveen Bisht'}))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))