//* Implementing actionTypes is a safeguard to make sure errors are caught within actions-->misspelling actions results in no error handling or linting on its own
//* for example misspelling the string 'CREATE' within actions will cause a failure that doesn't point to anything in particular-->as applications scale and more actions are created the mess gets bigger

export const CREATE = 'CREATE';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';
export const FETCH_ALL = 'FETCH_ALL';
