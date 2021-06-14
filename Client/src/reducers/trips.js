export default (trips = [], action) => { //trips is the state here, and is equal to an empty array
    switch (action.type) { //switch used here instead of many if statements
        case 'FETCH_ALL': 
            return action.payload;
        case 'CREATE':
            return trips;
        default:
            return trips;
    }
}