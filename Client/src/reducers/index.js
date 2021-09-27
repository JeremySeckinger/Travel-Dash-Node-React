import { combineReducers } from "redux";

import trips from './trips';
import auth from './auth';

export default combineReducers({ trips, auth });