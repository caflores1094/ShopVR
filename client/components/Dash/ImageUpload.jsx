import React from 'react';
import axios from 'axios';
class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      tag: []
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
          console.log(result)
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

    reader.readAsDataURL(file)
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
        var productURL = 'http://api.shopstyle.com/api/v2/products/?pid=uid4025-36835155-23&filters=Retailer&limit=25&fts=' + searchQuery;
        var getProducts = function(url, callback) {
          axios.get(url)
            .then(function(result){
              console.log(result);
              callback(null, result);
          });
        };

        getProducts(productURL, function(err, response) {
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
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">No preview available</div>);
    }

    return (
      <div className="previewComponent">
        <h1>Image Upload</h1>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <p>Step 1: Upload Image</p>
          <input className="fileInput" type="file" onChange={(e)=>this.handleImageChange(e)} />
          <div className="imgPreview">
            {$imagePreview}
          </div>
          <p>Step 2: Add Tags (each separated by ", ")</p>
          <input className="tagInput" type="text" onChange={(e)=>this.handleTagChange(e)} />
          <p>Step 3: Submit</p>
          <button className="submitButton" type="submit" onClick={(e)=>this.handleSubmit(e)}>Submit</button>
        </form>
      </div>
    )
  }
}
  
export default ImageUpload;