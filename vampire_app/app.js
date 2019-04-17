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






// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
/////////////////////////////////////////////////

// Vampires.collection.insertMany(vampireData,(err, data) => {
//     // if (err){
//     //     console.log(err);
//     // }
//     console.log("added provided vampire data")
//     mongoose.connection.close();
//   });

// ### Add some new vampire data
/////////////////////////////////////////////////
//1. Using the create method, create 4 new vampires with any qualities 
// that you like two should be male and two should be female.

// Vampires.create({
//     name:'Shadita',
//     eye_color: 'brown',
//     loves: "girls",
//     victims: 3,
//     gender: 'm'
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
//     name:'Peyton',
//     eye_color: 'blue',
//     loves: "boys and girls",
//     victims: 5,
//     gender: "f"
// },
// {
//     name:'izzy',
//     eye_color: 'blue',
//     loves: ["girls",'hoes','trick','bellywackers'],
//     victims: 5,
//     gender: "m"
// },
// {
//     name:'Allison',
//     eye_color: 'brown',
//     loves: "girls",
//     victims: 1,
//     gender: "f"
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


// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

//1. Find all the vampires that that are females

// Vampires.find({gender:'f'},(err,foundGender) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(foundGender);
//     }
// });

//2. have greater than 500 victims
// Vampires.find({
//     victims:{
//     $gt:500
// }
// },(err,foundVics) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(foundVics);
//     }
// });

//3. have fewer than or equal to 150 victims
// Vampires.find({
//         victims:{
//         $lte:150
//     }
//     },(err,foundVics) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(foundVics);
//         }
//     });

// 4. have a victim count is not equal to 210234
// Vampires.find({
//         victims:{
//         $ne:210234
//     }
//     },(err,foundVics) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(foundVics);
//         }
//     });

//5. have greater than 150 AND fewer than 500 victims
Vampires.find({
        victims:{
        $gt:150,
        $lt: 500
    }
    },(err,foundVics) => {
        if (err) {
            console.log(err);
        } else {
            console.log(foundVics);
        }
    });

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
