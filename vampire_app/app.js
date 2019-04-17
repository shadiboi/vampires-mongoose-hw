// 1. Require your node modules
const mongoose = require('mongoose');

const Vampires = require('./models/vampire')
const vampireData = require('./populateVampires')


// 2. Require your model (and possibly your extra data source);

//require model
const connectionString = 'mongodb://localhost/vampires';

// 3. Connect your database and collection name

mongoose.connect(connectionString, { 
    useNewUrlParser: true ,
    useCreateIndex: true ,
});

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connected error ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log(`Mongoose disconnected to ${connectionString}`);
});



// 4. Open your mongoose connection

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

//adds all my vamp data instead of hard insert
// Vampires.collection.insertMany(vampireData,(err, data) => {
//     // if (err){
//     //     console.log(err);
//     // }
//     console.log("added provided vampire data")
//     mongoose.connection.close();
//   });


// Vampires.create({
//     name:'Shadi',
//     eye_color: 'brown',
//     loves: "girls",
//     victims: 3
// }, (err,createdVampire)=>{
//     //this is the callback function
//     //this is the response from mongodb
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(createdVampire);
//     }
// });

// Vampires.create({
//     name:'Izzy',
//     eye_color: 'green',
//     loves: "boys",
//     victims: 10
// },{
//     name:'Peyton',
//     eye_color: 'blue',
//     loves: "boys and girls",
//     victims: 5
// },
// {
//     name:'Allison',
//     eye_color: 'brown',
//     loves: "girls",
//     victims: 1
// },
//  (err,createdVampires)=>{
//     //this is the callback function
//     //this is the response from mongodb
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(createdVampires);
//     }
// });


// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

// ### Add some new vampire data

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
