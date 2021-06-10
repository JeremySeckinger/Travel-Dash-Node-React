//middleware is just a function that has access to the request and response objects

//This piece ensures authorization with an if else to check for authentication and either move on (next) or redirect back to home page login
module.exports = {
    ensureAuth: function (req, res, next) { //next is the function called to move onto the next piece of middleware
        if(req.isAuthenticated()) {
            return next()
        } else {
            res.redirect('/')
        }
    },
    // ensure guest moves user to landing page without seeing the login if they are already authenticated
    ensureGuest: function (req, res, next) {
        if(req.isAuthenticated()) {
            res.redirect('/dashboard')
        } else {
            return next()
        }
    },
}