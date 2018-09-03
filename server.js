var express = require('express');
var cmd = require('node-cmd');
var path = require('path')
const app = express();

cmd.get(
    'http://localhost:3000/static/PotreeConverter.exe C:/Pushpak/ForgeApp/resources/r03.las -o C:/Pushpak/ForgeApp/output --generate-page alphastar2',
    function (err, data, stderr) {
        console.log('the files are installed in : ', data," | error : "+err," | stderr : ",stderr)
    }
);
app.use('/static', express.static(path.join(__dirname, 'output')))


app.get('/', (req, res) => res.send('Base url set'));

app.listen(3000, () => console.log('Example app listening on port 3000!'))

