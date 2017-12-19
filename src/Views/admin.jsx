/* eslint-disable */
// deshabilited as its just temporary
// TODO reformat
import React, { Component } from 'react';
import ApiConnector from '../api/ApiConnector';
import Utils from '../Utils';

import Loading from '../Components/Common/Loading';
import ImageWithFlange from '../Components/ImageBox/ImageBoxWithFlange';
import ImageBox from '../Components/ImageBox/ImageBox';

import './admin.css';
import ProjectService from '../Services/ProjectService';

const UploadedImages = ({ images, onChange }) => (
  <div>
    {
      images.map((image, index) => (
        <div key={`div-image-${index}`}>
          {image.name}
          <ImageWithFlange img={Utils.getStaticPath() + image.url} alt={'image'}>
            {image.text}
          </ImageWithFlange>
          <input name="image-box" data-index={index} onChange={onChange} />
        </div>
      ))
    }
  </div>
);

const buildOptions = types => [<option key="null" >Select a type...</option>, ...types.map((type) => {
  const { key, name } = type;
  return <option key={key} value={key}>{name}</option>;
}), (
    <option key="new-option" value="other">New type...</option>
  )];

const FormField = ({ label, type, handler, name, extraChildren, fillOptions, ...props }) => {
  let field = null;
  if (type === 'select') {
    field = (
      <select name={name} value={props.value} onChange={handler} >
        {fillOptions()}
      </select>
    );
  } else {
    field = <input name={name} type={type} onChange={handler} {...props} />;
  }
  return (
    <div className="sui-form-field">
      <label htmlFor={name}>{label}</label>
      {field}
      {extraChildren}
    </div>
  );
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
      typesList: null,
      images: [],
      position: null,
      message: null,
      lockImages: true,
      showNewTypes: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleImageText = this.handleImageText.bind(this);
    this.handleNewType = this.handleNewType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    Loading(this, (finished) => {
      ProjectService.getTypes()
        .then((types) => {
          finished();
          this.setState({
            typesList: types,
          });
        });
    });
  }

  uploadImage(projectName, file) {
    const prom = ApiConnector.sendImage(projectName, file);
    prom.then(({ filename, url }) => {
      const images = this.state.images;
      images.push({
        name: filename,
        url,
      });
      this.setState({
        images,
      });
    })
      .catch((err) => {
        console.log(err);
      });
  }

  uploadCover(projectName, file) {
    ApiConnector.sendImage(projectName, file)
      .then(({ url }) => {
        this.setState({
          coverImage: {
            url,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange(e, index) {
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
        lockImages: key === '',
      });
    } else if (name === 'image-box') {
      this.handleImageText(e);
    } else if (name === 'types' && value === 'other') {
      this.setState({
        showNewTypes: true,
      });
    } else {
      this.setState({
        [name]: value,
        message: null,
      });
    }
  }

  handleImageText(e) {
    const { value } = e.target;
    const index = e.target.dataset.index;
    // const index = parseInt(name.split('-')[1]);
    const images = this.state.images;
    images[index].text = value;
    this.setState(
      images,
    );
  }

  handleNewType(e) {
    const { value } = e.target;
    const { password } = this.state;
    ProjectService.createType(value, password)
      .then(({ data }) => {
        const newType = data.insertProjectType;
        const typesList = this.state.typesList;
        typesList.push(newType);
        this.setState({
          showNewTypes: false,
          types: newType,
          typesList,
        });
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    ProjectService.createProject(this.state)
      .then(({ data }) => {
        this.setState({
          message: `Project ${data.insertProject.title} Created`,
        });
      })
      .catch(({ errors }) => {
        this.setState({
          message: `Error: ${errors.message}`,
        });
      });
  }

  render() {
    const { types, typesList, coverImage, images, message, lockImages, title, subTitle, showNewTypes } = this.state;
    const formFields = [
      { label: 'Title', type: 'text', name: 'title' },
      { label: 'Subtitle', type: 'text', name: 'subTitle' },
      { label: 'Cover Image',
        type: 'file',
        name: 'coverImage',
        disabled: lockImages,
        extraChildren: (
          <div id="selectedImages" >
            {coverImage &&
            <ImageBox
              img={Utils.getStaticPath() + coverImage.url}
              title={title}
              descr={subTitle}
              href="#"
            />
            }
          </div>
        ) },
      { label: 'Images',
        type: 'file',
        name: 'image',
        disabled: lockImages,
        extraChildren: (
          <div id="selectedImages" >
            {images.length ? <UploadedImages images={images} onChange={this.handleImageText} /> : null}
          </div>
        ) },
      { label: 'Types', type: 'select', name: 'types', value: types ? types.key : '', fillOptions: () => buildOptions(typesList) },
      { label: 'Password', type: 'password', name: 'password' },
    ];

    if (showNewTypes) {
      formFields.push({
        label: 'Type name',
        type: 'text',
        name: 'newType',
        onBlur: this.handleNewType,
      });
    }

    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        {message && <div>{message}</div>}
        {formFields.map(fieldConfig => <FormField key={fieldConfig.name} {...fieldConfig} />)}
        <div className="submit-box">
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

const AdminPage = () => <UploadProjectForm />;

export default AdminPage;
