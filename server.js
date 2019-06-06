const express = require('express')
const app = express()
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/data', (req, res) => res.send({data: 'Praveen Bisht'}))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(process.env.PORT || 3000, () => console.log(`Example app listening on port ${port}!`))