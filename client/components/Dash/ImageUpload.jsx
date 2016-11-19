import React from 'react';
import axios from 'axios';
class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      tag: [],
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    var obj = this.state;
    obj['u_id'] = this.props.user.id;

    var context = this;
    axios.post('/api/upload', obj)
         .then(function(result) {
            if(result.data === 'duplicate image'){
              alert('Image Name already exists!')
            } else{
              context.getFeedOnImageUpload();
            }
          });
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file.name,
        imagePreviewUrl: reader.result
      });
    }
    var interest = reader.readAsDataURL(file);
    console.log('interest', interest);
  }

  handleTagChange(e) {
    e.preventDefault();
    let tags = e.target.value.split(', ');
    this.setState({
      tag: tags
    });
  }

  getFeedOnImageUpload(){
    var context = this;

    var obj = this.state;
    obj['u_id'] = this.props.user.id;
    axios.post('/api/feed', obj)
      .then(function(result){

        var tags = result.data.map((entry)=> entry.tag);

        var searchQuery = tags.concat('+');
        var getProducts = function(callback) {
          axios.post('/api/shopstyle', {offset: 0, fts: context.props.user.gender + '+' + searchQuery, limit: 50})
            .then(function(result){
              callback(null, result);
          });
        };

        getProducts(function(err, response) {
          if (err) console.log(err);
          else console.log(response.data.products, 'success getting data from api');
          context.props.setFeed(response.data.products);
        })

       });
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img className="preview-img" src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="preview-text">No preview available</div>);
    }

    return (
      <div className="preview-component">
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <p className="upload-instructions">Upload Image</p>
          <input className="file-input" id="file" name="file" type="file" onChange={(e)=>this.handleImageChange(e)} />
          <button className="file-button"><label className="file-label" htmlFor="file">Choose Image</label></button>
          <div className="img-preview">
            {$imagePreview}
          </div>
          <p className="upload-instructions">Add Tags (each separated by ", ")</p>
          <input className="tag-input" type="text" onChange={(e)=>this.handleTagChange(e)} />
          <br />
          <button className="submit-button" type="submit" onClick={(e)=>this.handleSubmit(e)}>Submit</button>
        </form>
      </div>
    )
  }
}

export default ImageUpload;
