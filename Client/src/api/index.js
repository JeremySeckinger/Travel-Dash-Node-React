import axios from 'axios'

const url = 'http://localhost:5000/trips';

export const fetchTrips = () => axios.get(url)
export const createTrip = (newTrip) => axios.post(url, newTrip);//takes in entire post, then axios post specifying url and the data being sent which is the entire trip data
export const updateTrip = (id, updatedTrip) => axios.patch( `${url}/${id}`, updatedTrip);
export const deleteTrip = (id) => axios.delete(`${url}/${id}`);
export const likeTrip = (id) => axios.patch(`${url}/${id}/likeTrip`);