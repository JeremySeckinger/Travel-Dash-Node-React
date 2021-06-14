// const GoogleStrategy = require('passport-google-oauth20').Strategy
// const mongoose = require('mongoose')
// const User = require('../models/User')

// module.exports = function(passport) {  //passport brought in from server.js
//     passport.use(new GoogleStrategy({
//         clientID : process.env.GOOGLE_CLIENT_ID,
//         clientSecret : process.env.GOOGLE_CLIENT_SECRET,
//         callbackURL: 'https://traveldashboard.herokuapp.com/auth/google/callback'  //added full callback URL when deploying to heroku otherwise it wasn't working as https 
//     },
//     async (accessToken, refreshToken, profile, done) => { // using async await since dealing with mongoose  done is callback when finished doing what we intend
//         const newUser = { //creating new user from google profile on signin
//             googleId: profile.id,
//             displayName: profile.displayName,
//             firstName: profile.name.givenName,
//             lastName: profile.name.familyName, 
//             image: profile.photos[0].value // note: photo comes in as array
//         }

//         try {
//             let user = await User.findOne({ googleId: profile.id })  // first looks for user, using findOne method with google ID with profile.id

//             if(user) {
//                 done(null, user) // iff user exists, call callback, null is error, and then pass user in
//             } else {
//                 user = await User.create(newUser)  //if there is no user we want to create one, using await and then taking model (ie User) and passing in newUser object that was just created (line 12)
//                 done(null, user) // and then done is called to end with null and the new user
//             }
//         } catch (err) { //catches error
//             console.error(err) //of whatever that error is
//         }
//     }))

//     passport.serializeUser((user, done) => {  //serializes user with unique cookie that identifies the session (from passport docs) Note: cleaned up docs format using arrow functions
//         done(null, user.id)                   // only the user id is stored in the session which keeps amount data stored small
//     })
    
//     passport.deserializeUser((id, done) => { 
//         User.findById(id, (err, user) => done(err, user))
//     })
// } 