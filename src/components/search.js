import React from 'react';

class Search extends React.Component {
   handleClick(e) {
      const node = this.refs.input;
      const text = node.value.trim();
      if (text) {
      this.props.onSearchClick(text);   
      }
   }
   render() {
      const inputStyle = {
         width: '80%',
         float: "left"
      }
      return (
         <div>
            <div className="form-group">
               <input style={inputStyle} className="form-control" type = 'text' ref = 'input' />
               <button className="btn btn-default" onClick = {(e) => this.handleClick(e)}>Search</button>
            </div>
         </div>
      );
   }
}

export default Search;