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

  getFeedOnImageUpload(){
    var context = this;
    var tags = this.state.shared.data
    console.log('tags', tags.join('+'));

    var searchQuery = tags.slice(0, 2).join('+');
    console.log('searchQuery', searchQuery);
    var getProducts = function(callback) {
      axios.post('/api/shopstyle', {offset: 0, fts: context.props.user.gender + '+' + searchQuery, limit: 50})
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
          console.log('state after update', context.state.shared);
        }
      } else {
        console.log('error with xhr response');
      }
    };
    xhr.send(formData);
  }

  render() {
    console.log('state', this.state);
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img className="preview-img" src={imagePreviewUrl} />);
    }
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)} encType="multipart/form-data">
          <input ref="image" type="file" name="image" />
          <input type="submit" />
        </form>
        <div className="img-preview">
          {$imagePreview}
        </div>
      </div>
    );
  }
}

export default ImageUpload;
