const jwt = require('jsonwebtoken');

module.exports = {
    auth: async (req, res, next) => {
        try {

            //splits auth header and takes 2nd item as token
            const token = req.headers.authorization.split(" ")[1];

            //Checks for local auth (<500) or google auth (>500)
            const isCustomAuth = token.length < 500;
    
            let decodedData;
    
            //Local Auth middleware
            if(token && isCustomAuth) {
                decodedData = jwt.verify(token, 'test');
    
                req.userId = decodedData?.id;
            
            //Google Auth middleware
            } else {
                decodedData = jwt.decode(token);
                
                //sub is an ID to differentiate Google users
                req.userId = decodedData?.sub;
            }
    
            next();
        } catch (error) {
            console.log(error)
        }
    }
};