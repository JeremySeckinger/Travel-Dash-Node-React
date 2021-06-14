import axios from 'axios'

const url = 'http://localhost:5000/trips';

export const fetchTrips = () => axios.get(url)