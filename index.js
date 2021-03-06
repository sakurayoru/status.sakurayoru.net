'use strict'

const express = require('express')
const fs = require('fs-extra')
const request = require('sync-request')
const exec = require('child_process').spawnSync;
const app = express()
const server = app.listen(process.env.PORT || 24742, () => console.log("Node.js is listening to PORT:" + server.address().port))

app.disable('x-powered-by')
app.use(express.static('./public'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

  let neofetch = exec('neofetch', ['--stdout']).stdout.toString().replace(/\n/g,'<br>')
  let nodejs = exec('node', ['-v']).stdout.toString() .replace(/\n/g,'<br>')
  let pm2 = exec('pm2', ['list']).stdout.toString().replace(/\n/g,'<br>')
  //  let java = exec('java', ['-version']).stderr.toString().split('\n')[0]

  res.render('index',
    {
      neofetch: neofetch,
      pm2: pm2,
      versions: {
        nodejs: nodejs
    //    java: java
      }
    });
});

// neofetch
// pm2 list
// nodeバージョン
// java
