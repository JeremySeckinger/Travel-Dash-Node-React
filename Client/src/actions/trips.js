import * as api from '../api';

// Action creators--functions that return actions
export const getTrips = () => async (dispatch) => { //redux-thunk is the "=> async (dispatch)" portion
    try {
        const { data } = await api.fetchTrips(); //getting the response-->"{ data }"

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error)
    }
}

export const createTrip = (trip) => async (dispatch) => { // dispatch comes from redux-thunk
    try {
        const { data } = await api.createTrip(trip); // destructure data from response, make api post request to backend server

        dispatch({ type: 'CREATE', payload: data }); //dispatches action with data as payload
    } catch (error) {
        console.log(error);
    }
} //from here the action needs to be dispatched-->go into the PostTripForm ('Form/Form')form to do this

export const updateTrip = (id, trip) => async (dispatch) => {
    try {
        const { data } = await api.updateTrip(id, trip);  //Returning updated trip here---response is deconstructed as data from response

        dispatch({ type: 'UPDATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteTrip = (id) => async (dispatch) => {
    try {
        await api.deleteTrip(id); //Not passing in any data here just deleting by id

        dispatch({ type: 'DELETE', payload: id }) 
    } catch (error) {
        console.log(error)
    }
}

export const likeTrip = (id) => async (dispatch) => {
    try {
        //taken from updateTrip--> only thing changed is .likeTrip input, and removed trip as parameter so it's just id not (id, trip)
        const { data } = await api.likeTrip(id);  //Returning updated trip here---response is deconstructed as data from response

        dispatch({ type: 'UPDATE', payload: data});
    } catch (error) {
        console.log(error)
    }
}