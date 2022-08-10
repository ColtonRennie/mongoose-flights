const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movies', {
  useUnifiedTopology: true,
});