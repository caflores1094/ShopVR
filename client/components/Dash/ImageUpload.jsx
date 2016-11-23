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

  // handleSubmit(e) {
  //   e.preventDefault();
  //   var obj = this.state;
  //   obj['u_id'] = this.props.user.id;

  //   var context = this;
  //   axios.post('/api/upload', obj)
  //        .then(function(result) {
  //           if(result.data === 'duplicate image'){
  //             alert('Image Name already exists!')
  //           } else{
  //             context.getFeedOnImageUpload();
  //           }
  //         });
  // }

  // handleImageChange(e) {
  //   e.preventDefault();

  //   let reader = new FileReader();
  //   let file = e.target.files[0];

  //   reader.onloadend = () => {
  //     this.setState({
  //       file: file.name,
  //       imagePreviewUrl: reader.result
  //     });
  //   }
  //   var interest = reader.readAsDataURL(file);
  // }

  // handleTagChange(e) {
  //   e.preventDefault();
  //   let tags = e.target.value.split(', ');
  //   this.setState({
  //     tag: tags
  //   });
  // }

  // getFeedOnImageUpload(){
  //   var context = this;

  //   var obj = this.state;
  //   obj['u_id'] = this.props.user.id;
  //   axios.post('/api/feed', obj)
  //     .then(function(result){

  //       var tags = result.data.map((entry)=> entry.tag);

  //       var searchQuery = tags.concat('+');
  //       var getProducts = function(callback) {
  //         axios.post('/api/shopstyle', {offset: 0, fts: context.props.user.gender + '+' + searchQuery, limit: 50})
  //           .then(function(result){
  //             callback(null, result);
  //         });
  //       };

  //       getProducts(function(err, response) {
  //         if (err) console.log(err);
  //         else /*console.log(response.data.products, 'success getting data from api');*/
  //         context.props.setFeed(response.data.products);
  //       })

  //      });
  // }

  // render() {
  //   let {imagePreviewUrl} = this.state;
  //   let $imagePreview = null;
  //   if (imagePreviewUrl) {
  //     $imagePreview = (<img className="preview-img" src={imagePreviewUrl} />);
  //   } else {
  //     $imagePreview = (<div className="preview-text">No preview available</div>);
  //   }

  //   return (
  //     <div className="preview-component">
  //       <form method="post" action="/upload" encType="multipart/form-data" onSubmit={(e)=>this.handleSubmit(e)}>
  //         <p className="upload-instructions">Upload Image</p>
  //         <input className="file-input" id="file" name="image" type="file" onChange={(e)=>this.handleImageChange(e)} />
  //         <button className="file-button"><label className="file-label" htmlFor="file">Choose</label></button>
  //         <div className="img-preview">
  //           {$imagePreview}
  //         </div>
  //         <p className="upload-instructions">Add Tags (each separated by ", ")</p>
  //         <input className="tag-input" type="text" onChange={(e)=>this.handleTagChange(e)} />
  //         <br />
  //         <input className="submit-button" type="submit" onClick={(e)=>this.handleSubmit(e)} />
  //       </form>
  //     </div>
  //   );
  // }

  getInfo(event) {
    event.preventDefault();

    var image = this.refs.image.files[0];
    console.log('img', image);
    var formData = new FormData();
    formData.append('image', image, image.name);

    // let reader = new FileReader();
    // let file = event.target.files[0];
    // console.log('file', file);

    // reader.onloadend = () => {
    //   this.setState({
    //     file: file.name,
    //     imagePreviewUrl: reader.result
    //   });
    // }

    // var interest = reader.readAsDataURL(file);
  }

  onSubmit(e) {
    e.preventDefault();
    var image = this.refs.image.files[0];
    var formData = new FormData();
    formData.append('image', image, image.name);

    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", "/upload", true);
    // xhr.responseType = 'json';
    // xhr.onload = function () {
    //   if (xhr.readyState === xhr.DONE) {
    //     if (xhr.status === 200) {
    //       update({file: image, data: xhr.response});
    //     }
    //   } else {
    //     console.log('error with xhr response');
    //   }
    // };
    // xhr.send(data);
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img className="preview-img" src={imagePreviewUrl} />);
    }
    return (
      <div>
        <form method="post" action="/upload" encType="multipart/form-data">
          <input ref="image" type="file" name="image" onChange={(event)=>this.getInfo(event)} />
          <input type="submit" onSubmit={this.onSubmit.bind(this)} />
        </form>
        <div className="img-preview">
          {$imagePreview}
        </div>
      </div>
    );
  }
}

export default ImageUpload;
