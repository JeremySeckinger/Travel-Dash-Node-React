import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const fetchTrips = () => API.get('/trips')
export const createTrip = (newTrip) => API.post('/trips', newTrip);//takes in entire post, then axios post specifying url and the data being sent which is the entire trip data
export const updateTrip = (id, updatedTrip) => API.patch( `/trips/${id}`, updatedTrip);
export const deleteTrip = (id) => API.delete(`/trips/${id}`);
export const likeTrip = (id) => API.patch(`/trips/${id}/likeTrip`);

export const signIn = (formData) => API.post('/user/signin', formData)
export const signUp = (formData) => API.post('/user/signup', formData)