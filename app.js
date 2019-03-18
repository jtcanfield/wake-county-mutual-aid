#!/usr/bin/env node
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const http = require('http');
const firebase = require('firebase');

const config = {
  apiKey: 'AIzaSyBxF-kdsFqqxEQ83HnoD_-eDpcdPeHFyFQ',
  authDomain: 'wake-county-mutual-aid.firebaseapp.com',
  databaseURL: 'https://wake-county-mutual-aid.firebaseio.com',
  projectId: 'wake-county-mutual-aid',
  storageBucket: 'wake-county-mutual-aid.appspot.com',
  messagingSenderId: '363954067119',
};
firebase.initializeApp(config);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'server/public')));

app.get('/', (req, res) => {
  res.render('index');
});

// error handler
app.use('*', (req, res) => {
  res.status(404).send('404');
});

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);


function normalizePort(val) {
  const portInt = parseInt(val, 10);

  if (isNaN(portInt)) {
    // named pipe
    return val;
  }

  if (portInt >= 0) {
    // port number
    return portInt;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

const server = http.createServer(app);

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  console.log(`Listening on ${bind}`);
}

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
