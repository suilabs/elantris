import React, {Component} from 'react';
import ApiConnector from "../api/ApiConnector";
import Utils from "../Utils";

import ImageWithFlange from '../Components/ImageBox/ImageBoxWithFlange';
import ImageBox from '../Components/ImageBox/ImageBox';

import './admin.css';

const UploadedImages = ({images, onChange}) => {
  return (
    <div>
      {
        images.map((image, index) => (
          <div key={`div-image-${index}`}>
            {image.name}
            <ImageWithFlange img={Utils.getStaticPath() + image.url} alt={'image'}>
              {image.text}
            </ImageWithFlange>
            <input name={`image-${index}`} onChange={onChange}/>
          </div>
        ))
      }
    </div>
  );
};

const buildOptions = (typesSelected) => {
  return <option value="this">this</option>;
};

const FormField = ({label, type, handler, name, extraChildren, fillOptions, ...props}) => {
  let field = null;
  if (type === 'select') {
    field = (
      <select name={name} onChange={handler} >
        {fillOptions}
      </select>
    )
  } else {
    field = <input name={name} type={type} onChange={handler} {...props}/>;
  }
  return (
    <div className='sui-form-field'>
      <label htmlFor={name}>{label}</label>
      {field}
      {extraChildren}
    </div>
  )
};

class UploadProjectForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      key: null,
      title: null,
      subTitle: null,
      coverImage: null,
      types: null,
      images: [],
      position: null,
      error: null,
      lockImages: true,
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleImageText = this.handleImageText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  uploadImage (projectName, file) {
    const prom = ApiConnector.sendImage(projectName, file);
    prom.then(({filename, url}) => {
        const images = this.state.images;
        images.push({
          name: filename,
          url,
        });
        this.setState({
          images
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
  
  uploadCover (projectName, file) {
    ApiConnector.sendImage(projectName, file)
      .then(({url}) => {
        this.setState({
          coverImage: {
            url
          }
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  handleChange(e, index) {
    // if (e.currentTarget !== e.target) {
    //   return null;
    // }
    const { name, value } = e.target;
    if (name === 'image') {
      this.uploadImage(this.state.key, e.target.files[0]);
    } else if (name === 'coverImage') {
      this.uploadCover(this.state.key, e.target.files[0]);
    } else if (name === 'title') {
      const key = Utils.generateKey(value);
      this.setState({
        key,
        title: value,
        lockImages: key === ''
      })
    } else {
        this.setState({
        [name]: value,
        error: null
      })
    }
  }
  
  handleImageText(e) {
    const { name, value } = e.target;
    const index = parseInt(name.split('-')[1]);
    const images = this.state.images;
    images[index].text = value;
    this.setState(
      images
    );
  }
  
  handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();
  }
  
  render() {
    const {types, coverImage, images, error, lockImages, title, subTitle} = this.state;
    
    const formFields = [
      {label: 'Title', type: 'text', name: 'title'},
      {label: 'Subtitle', type: 'text', name: 'subTitle'},
      {label: 'Cover Image', type: 'file', name: 'coverImage', disabled: lockImages, extraChildren: (
        <div id="selectedImages" >
          {coverImage &&
            <ImageBox
              img={Utils.getStaticPath()+coverImage.url}
              title={title}
              descr={subTitle}
              href='#'
            />
          }
        </div>
      )},
      {label: 'Images', type: 'file', name: 'image', disabled: lockImages, extraChildren: (
          <div id="selectedImages" >
            {images.length && <UploadedImages images={images} onChange={this.handleImageText} />}
          </div>
        )},
      {label: 'Types', type: 'select', name: 'types', fillOptions: buildOptions(types)}
    ];
    return (
      <form onSubmit={this.handleSubmit}>
        {error && <div>{error}</div>}
        {formFields.map((fieldConfig) => {
          return <FormField key={fieldConfig.name} {...fieldConfig} onChange={this.handleChange}/>
        })}
        <div className="submit-box">
          <input type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

const AdminPage = () => {
  return <UploadProjectForm/>
};

export default AdminPage;
