const moment = require('moment') //uses moment to format date (refer to docs for specific format options)


//middleware to format date (handlebar helper)
module.exports = { 
    formatDate: function (date, format) {
        return moment(date).format(format) // createdAt is passed in as the date here from dashboard view line 21 using this handlebar helper middleware, and handlebars linked in the server at handlebar helper and handlebars server engine formatDate
    },

    //truncate function shortens visible text (for trips) to a specific size using the function below
    truncate: function (str, len) {
        if (str.length > len && str.length > 0) {  //if the string is longer than the length param and longer than 0
            let new_str = str + ' '  //creates variable with string  and empty string that can be assigned
            new_str = str.substr(0, len)  // extracts part of string from 0 to length parameter
            new_str = str.substr(0, new_str.lastIndexOf(' '))  //further extracts string from 0 to the last index of the empty string
            new_str = new_str.length > 0 ? new_str : str.substr(0, len)  //ternary to return new_str if > 0 or else it returns the extracted string from 0 to length parameter
            return new_str + '...' //finally returns the new_str with the elipses to show the cutoff text has more to view
        }
        return str
    },
    //stripTags strips tags from input text
    stripTags: function (input) {
        return input.replace(/<(?:.|\n)*?>/gm, '') //regular expression that looks for any front and back angle brackets and replace it with nothing
    },
    editIcon: function (tripUser, loggedUser, tripId, floating = true) {
        if (tripUser._id.toString() == loggedUser._id.toString()) { //converting tripUser id to string and comparing it to logged in users id
            if (floating) {  // checks for floating icon/btn
                return `<a href="/trips/edit/${tripId}" class="btn-floating halfway-fab blue"><i class="fas fa-edit fa-small"></i></a>`
            } else {  // if no floating icon returns link that goes to edit page using tripID
                return `<a href="/trips/edit/${tripId}"><i class="fas fa-edit"></i></a>`
            }
        } else {  //if logged in user is not story owner it's going to return nothing--so no icon will be visible
        return ''
        }
    },
    //found on stackoverflow to get handlebars to display status selected
    select: function (selected, options) {  //takes in the selected option, and then the options themselves, which were wrapped in the edit template
        return options
            .fn(this)
            .replace(
                new RegExp(' value="' + selected + '"'), //uses regex to select status
                '$& selected="selected"'
            )
            .replace(
                new RegExp('>' + selected + '</option>'),
                ' selected="selected"$&'
            )
    },
};