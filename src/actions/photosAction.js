import axios from "axios";
export function fetchPhotos(galleryId) {
   return function(dispatch) {
   	axios.get("https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=2c328fd915033ec17eb1d56cb43585b0&gallery_id=" + galleryId + "&extras=owner_name%2Cdate_taken%2Cviews%2Curl_t%2Curl_l&format=json&nojsoncallback=1")
   	.then((response) => {
   		dispatch({
   			type:"FETCH_PHOTOS",
   			payload: response.data
   		})
   	})
   	.catch((err) => {
   		dispatch({
   			type:"FETCH_PHOTOS_ERROR",
   			payload: err
   		})
   	})
   }
}
export function selectedPhoto(selectedObject) {
   return function(dispatch) {
         dispatch({
            type:"SELECTED_PHOTO",
            payload: selectedObject
         })
   }
}