const mongoose = require('mongoose')

//MDB works with promises so using async await here
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            //avoids some warnings in console
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useFindAndModify: false
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (err) {
        //if something goes wrong and we can't connect
        console.error(err)
        process.exit(1) //exits with failure (1)
    }
}

module.exports = connectDB