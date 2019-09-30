//import mongoose from 'mongoose';
var mongoose = require('mongoose');

mongoose.connect('', {useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    var movieSchema = new mongoose.Schema({
        title: String,
        year: String
      });

    var personSchema = new mongoose.Schema({
        firstName: String,
        lastName: String,
        birthDate: Date
    });

    var actorSchema = new mongoose.Schema({
        
    });

    var directorSchema = new mongoose.Schema({
        
    });

      
    var Movie = mongoose.model('Movie', movieSchema);
    
    var jurassicPark = new Movie({ title: 'Jurassic Park', year: '1995' });
    
    // jurassicPark.save(function (err, jurassicPark) {
    //     if (err) return console.error(err);
    //   });
    jurassicPark.save().then(() => {
        console.log("success");
    })

});

