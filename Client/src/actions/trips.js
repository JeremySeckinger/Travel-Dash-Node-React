import * as api from '../api';

// Action creators--functions that return actions
export const getTrips = () => async (dispatch) => { //redux-thunk is the "=> aync (dispatch)" portion
    try {
        const { data } = await api.fetchTrips(); //getting the response-->"{ data }"

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message)
    }
}