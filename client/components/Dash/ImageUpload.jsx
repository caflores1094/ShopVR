import React from 'react';
import axios from 'axios';
class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      shared: {
        file: null,
        data: null
      }
    };

    this.update = this.update.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getFeedOnImageUpload = this.getFeedOnImageUpload.bind(this);
  }

  update(info) {
    this.setState({
      shared: info
    });
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file);
  }

  getFeedOnImageUpload(){
    var context = this;
    var tags = this.state.shared.data;
    console.log('actual tags', tags);
    tags = tags.sort(function(a, b) {
      return a.length - b.length;
    });

    var searchQuery = tags.slice(0, 2).join(' ');
    console.log('searchQuery', searchQuery);
    var gender = this.props.user.gender === 'male' ? "men" : "women";
    var getProducts = function(callback) {
      axios.post('/api/shopstyle', {offset: 0, fts: gender + '+' + searchQuery, limit: 50})
        .then(function(result){
          console.log('result', result);
          callback(null, result);
      });
    };

    getProducts(function(err, response) {
      if (err) console.log(err);
      else /*console.log(response.data.products, 'success getting data from api');*/
      context.props.setFeed(response.data.products);
    });
  }

  onSubmit(e) {
    var context = this;
    var update = this.update;
    e.preventDefault();
    var image = this.refs.image.files[0];
    var formData = new FormData();
    formData.append('image', image, image.name);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/upload', true);
    xhr.responseType = 'json';
    xhr.onload = function () {
      if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
          update({file: image, data: xhr.response});
          context.getFeedOnImageUpload();
        }
      } else {
        console.log('error with xhr response');
      }
    };
    xhr.send(formData);
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img className="preview-img" src={imagePreviewUrl} />);
    }
    return (
      <div className="image-upload">
        <form onSubmit={this.onSubmit.bind(this)} encType="multipart/form-data">
          <input className="file-input" onChange={(e) => (this.handleImageChange(e))} ref="image" id="image" type="file" name="image" />
          <label className="file-button" htmlFor="image">Choose Image</label>
          <br />
          <input className="submit-button" type="submit" />
        </form>
        <div className="img-preview">
          {$imagePreview}
        </div>
      </div>
    );
  }
}

export default ImageUpload;
