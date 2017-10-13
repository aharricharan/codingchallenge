export default function reducer(state = {
	photos:{},
	selectedPhoto:{},
	fetching: false,
	featched: false,
	error:null
}, action) {
	switch(action.type) {
		case "FETCH_PHOTOS":
		if (action.payload.photos) {
			return {...state, fetching: true, photos: action.payload.photos}
		} else {
			return {...state, fetching: true, error: action.payload, photos: {}}
		}
		
	}
	switch(action.type) {
		case "FETCH_PHOTOS_ERROR":
		return {...state, fetching: false, error: action.payload, photos: {}}
	}
	switch(action.type) {
		case "SELECTED_PHOTO":
		return {...state, fetching: true, selectedPhoto: action.payload}
	}
	return state;
}