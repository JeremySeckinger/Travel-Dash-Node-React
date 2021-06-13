// const express = require('express')
// const passport = require('passport')
// const router = express.Router()

// // @desc Auth with Google
// // @route GET /auth/google
// router.get('/google', passport.authenticate('google', { scope: ['profile'] }))  //to authenticate we are using google strategy which we created in our passport.js file, we want the scope of what is in the profile

// // @desc Google auth callback
// // @route GET /auth/google/callback
// router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), //this is the callback it will hit --> fails, goes to root, passes goes to dashboard
//     (req, res) => {
//         res.redirect('/dashboard')
//     }   
// )

// // @desc  Logout user
// // @route /auth/logout
// router.get('/logout', (req, res) => {
//     req.logout() // logout method on request object 
//     res.redirect('/') // after logout redirects to homepage
// })

// module.exports = router