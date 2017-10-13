import React from 'react';
let previousValue = -1;
class Gallery extends React.Component {
   handleClick(e) {
      if (previousValue === e) {
         this.props.onImageSelected({});
         previousValue = -1;
      } else {
         this.props.onImageSelected(this.props.photos.photos.photo[e]);
         previousValue = e;
      }
      
   }
   render() {
      const imageStyle = {
         margin: '1px'
      }
      let photos = [];
      let images = "";

      if (this.props.photos.photos !== undefined && Object.keys(this.props.photos.photos).length) {
         photos = this.props.photos.photos.photo;
      }
      
      if (photos.length) {
         images = photos.map((imgObj, index) => 
            <img width="75" style={imageStyle} title={imgObj.title} height="75" onClick = {() => this.handleClick(index)} key={index} id={index} src={imgObj.url_t} />
            );
      }
      
      return (
         <div>
            { images
                ? <div className="well"><h3>Gallery (select image)</h3>{images}</div>
                : <span></span>
            }
         </div>
      );
   }
}

export default Gallery;