export default (trips = [], action) => { //trips is the state here, and is equal to an empty array
    switch (action.type) { //switch used here instead of many if statements
        case 'DELETE':
            return trips.filter((trip) => trip._id !== action.payload); //filters out deleted trips
        case 'UPDATE':
        case 'LIKE': //Put below update using same logic since they are doing the same thing for different use cases
            return trips.map((trip) => trip._id === action.payload._id ? action.payload : trip); //mapping the trips array, updating the item in the array and returning the updated array
        case 'FETCH_ALL': 
            return action.payload;
        case 'CREATE':
            return [ ...trips, action.payload]; // returns trips using spread operator, and adds new trip that is stored in the action payload
        default:
            return trips;
    }
}