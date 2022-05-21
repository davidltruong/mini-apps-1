var express = require('express');
var fs = require('fs');
var app = express();
var port = 8888;
var bodyParser = require('body-parser')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var path = require('path');

app.set('view engine', 'pug')
app.use(express.static('client'))
app.use(bodyParser.urlencoded({ extended: true }));


//function to handle data and convert to csv /////////////////////////////////////////////////////
var csv = function (data) {
  var result = 'firstName,lastName,county,city,role,sales<br>'
  var dataHandler = function (obj) {
    var firstName = obj.firstName;
    var lastName = obj.lastName;
    var county = obj.county;
    var city = obj.city;
    var role = obj.role;
    var sales = obj.sales;
    result += firstName + ',' + lastName + ',' + county
    + ',' + city + ',' + role + ',' + sales + '<br>';
    if (obj.children) {
      for (var i = 0; i < obj.children.length; i++) {
        dataHandler(obj.children[i])
      }
    }
  }
  dataHandler(data);
  return result;
}


//handle post request for submit button //////////////////////////////////////////////////////////

var filePath = path.join(__dirname, '/download.txt');

app.get('/download', (req, res) => {
  console.log('download')
  res.download('download.txt')
})

app.post('/', upload.single('file'), (req, res) => {
  var path = req.file.path;
  fs.readFile( './' + path , 'utf8', (err, data) => {
    var file = csv(JSON.parse(data))
    fs.unlink('./' + path, (err, data) => {
      var download = file.split('<br>').join('\n')
      fs.writeFile(filePath, download, function(err, data) {
        res.send(file)
      })
    })
  })
})

app.post('/upload_json', upload.single('data'), (req, res) => {
  var path = req.file.path;
  fs.readFile( './' + path , 'utf8', (err, data) => {
    var file = csv(JSON.parse(data))
    fs.unlink('./' + path, (err, data) => {
      res.render('upload_json', {div: file})
    })
  })
})

app.listen(port, function() {
  console.log(`App listening on port ${port}!`)
});