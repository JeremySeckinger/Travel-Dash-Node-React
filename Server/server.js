
// const path = require('path') //path is core node.js module
const express = require('express');
const mongoose = require('mongoose') // Added in after adding MongoStore session into session middleware (line 36)
const dotenv = require('dotenv');
const morgan = require('morgan') //shows requests made directly in console (HTTP method and such)
// const exphbs = require('express-handlebars')
// const methodOverride = require('method-override')
// const passport = require('passport')
// const session = require('express-session')
// const MongoStore = require('connect-mongo')
const connectDB = require('./config/db');
const tripsRoutes = require("./routes/trips");
const cors = require('cors');

//* Load config
dotenv.config({ path: './config/.env' })

connectDB()

const server = express();

//* Middleware found on stack overflow to solve preflight response error
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

//* Body parser
server.use(express.urlencoded({ extended: false })); //middleware to get data from req.body added after line 17 in trips.js
server.use(express.json()); // accepts json data, added in case needed at some point
server.use(cors());


server.use('/trips', tripsRoutes);


const PORT = process.env.PORT || 5000;

server.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

//! Previous server code below--refactored above
// const path = require('path') //path is core node.js module
// const express = require('express')
// const mongoose = require('mongoose') // Added in after adding MongoStore session into session middleware (line 36)
// const dotenv = require('dotenv')
// const morgan = require('morgan') //shows requests made directly in console (HTTP method and such)
// const exphbs = require('express-handlebars')
// const methodOverride = require('method-override')
// const passport = require('passport')
// const session = require('express-session')
// const MongoStore = require('connect-mongo')
// const connectDB = require('./config/db')

// //* Load config
// dotenv.config({ path: './config/.env' })

// //* Passport config
// require('./config/passport')(passport) //passport is being passed in as an argument that was just required above so that it can be used in the config passport file

// connectDB()

// const server = express()

// //* Body parser
// server.use(express.urlencoded({ extended: false })) //middleware to get data from req.body added after line 17 in trips.js
// server.use(express.json()) // accepts json data, added in case needed at some point

// //* Logging  --> Only want morgan running in dev mode hence the 'if' statement
// if(process.env.NODE_ENV === 'development') {
//     server.use(morgan('dev')) //morgan middleware
// }

// //pasted from method-override docs and placed near top purposefully
// //* Method override
// server.use(
//     methodOverride(function (req, res) {
//         if (req.body && typeof req.body === 'object' && '_method' in req.body) {  // checks request body and looks for underscore method
//              // look in urlencoded POST bodies and delete it
//             let method = req.body._method // | replaces with whatever we add whether it is put or delete
//             delete req.body._method       // |
//             return method                 // |
//         }
//     })
// )

// //* Handlebars helpers
// const { formatDate , stripTags, truncate, editIcon, select } = require('./helpers/hbs')  // destructured formatDate and bringing it in from helpers/hbs

// //* Handlebars
// server.engine(
//     '.hbs', 
//     exphbs({
//         helpers: {  // Added helpers here within express handlebars
//             formatDate, // bringing in date format helper
//             stripTags,  //function from helpers/hbs
//             truncate,   // ^^
//             editIcon, //brings in edit icon function from hbs helper
//             select, //helper brought in to select status of story in edit template 
//         },
//         defaultLayout: 'main', 
//         extname: '.hbs',
//     })
// ); //adds middleware for handlebars
// server.set('view engine', '.hbs');

// //* Sessions (note: needs to be placed above passport middleware)(copy and pasted from express-session docs)
// server.use(
//     session({
//         secret: 'keyboard cat',
//         resave: false, // means nothing is saved if no modifications
//         saveUninitialized: false, // set to false doesn't create a session until something is stored
//         store: MongoStore.create({ 
//             mongoUrl: process.env.MONGO_URI   // store added to create session storage in mongodb using .create taking in the mongo uri as an object
//         }) 
//     })
// )


// //* Passport middleware
// server.use(passport.initialize()) // comes straight from passport docs
// server.use(passport.session())

// //* Set global variable
// server.use(function(req, res, next) {  //passing in middleware function with access to request and response, with next being called when done
//     res.locals.user = req.user || null //req.user is available with the auth middleware, and declaring it with res.locals.user creates a global variable accessible from within templates, and sets to null if it doesnt exist
//     next()
// })


// //* Static folder
// server.use(express.static(path.join(__dirname, 'public'))) // absolute path to current directory going into public

// //* Routes
// server.use('/', require('./routes/index'))
// server.use('/auth', require('./routes/auth'))
// server.use('/trips', require('./routes/trips'))

// const PORT = process.env.PORT || 5000

// server.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))