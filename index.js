const express   = require('express');
const morgan    = require('morgan');
const mongoose  = require('mongoose');
const cors      = require('cors');
const path      = require('path');
const dotenv = require('dotenv');

const app = express();

// Database setupx
mongoose.connect(MONGODB_URI || 'mongodb://localhost:auth/auth', { 
  useNewUrlParser: true, 
  useCreateIndex: true
});

// Middlewares setup
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// If we are in production serve our clients build  folder
// This folder is created during production only
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', () => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); //relative path
  })
}

// Routes setup
const routes = require('./routes');
app.use(routes);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));