import React from 'react';
import {
    connect
} from 'react-redux';
import {
    fetchPhotos,
    selectedPhoto
} from '../actions/photosAction';
import Search from './search';
import Gallery from './gallery';

class Layout extends React.Component {
    selectedImage(data) {
        this.props.dispatch(selectedPhoto(data));
    }
    render() {

        const {
            dispatch,
            photos
        } = this.props;

        let selectedImage;
        let error;
        if (photos.photos.error) {
            error = photos.photos.error.message;
        }
        if (Object.keys(photos.photos.selectedPhoto).length) {
            selectedImage = < div className='well'>
                < h3> Selected Image(Parent Component)< /h3>
                < div> Owners Name: { photos.photos.selectedPhoto.ownername }< /div>
                < div> Date taken: { photos.photos.selectedPhoto.datetaken }< /div>
                < div> Number of Views: { photos.photos.selectedPhoto.views }< /div>
                < img className="img-responsive" src={ photos.photos.selectedPhoto.url_l } />
            < / div>
        }
        return ( 
            <div>
                <div className='well'>
                    <h3>Search Gallery</h3>
                    <div className="col-sm-12 col-md-3">
                        <div>
                            <strong>Enter a gallery id below into the search.</strong>
                            <br /> 72157685768275292, 72157686851763760, 72157686852720870
                        </div>
                    </ div>
                    <div className="col-sm-12 col-md-9">
                        <div> Gallery id</div>
                        <Search onSearchClick={ text=> dispatch(fetchPhotos(text)) } />
                        <div className="text-danger">{error}</div>
                    </div>
                <div className="clearfix"></div>
            </ div>
                <Gallery onImageSelected={ data=> this.selectedImage(data) } photos = { this.props.photos.photos } /> 
                { selectedImage }
            </ div>
        );
    }
}

function mapStateToProps(state) {
    return {
        photos: state
    }
}

export default connect(mapStateToProps)(Layout);