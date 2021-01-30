import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageRecognition from './components/ImageRecognition/ImageRecognition';
import Logo from './components/Logo/Logo';
import './App.css';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import ImageLinkForm from './components/ImageLinkForm/Imagelinkform';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';


const particleOption = {
    "particles": {
          "number": {
              "value": 50
          },
          "size": {
              "value": 3
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              }
          }
      }
  }

  const initialState = {
    input: '',
    imageUrl: '',
    box: {},
    route: 'signin',
    isSignedIn: false,
    user: {
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: ''
    }
  }

class App extends Component {
  constructor() {
     super();
     this.state = initialState;
  }

loadUser = (data) => {
  this.setState({ user: {
    id: data.id,
    name: data.name,
    email: data.email,
    entries: data.entries,
    joined: data.joined
  }
 })
} 

//DOM Manupulation
calculateFaceLocation = (response) => {
  const clarifaiFaces = response.outputs[0].data.regions[0].region_info.bounding_box;
  console.log(clarifaiFaces);
  const image = document.getElementById('imageLink');
  const width = Number(image.width);
  const height = Number(image.height);
  return{
      topRow: clarifaiFaces.top_row * height,
      leftCol: clarifaiFaces.left_col * width,
      bottomRow: height - clarifaiFaces.bottom_row * height,
      rightCol: width - clarifaiFaces.right_col * width
  };
}

displayBox = (box) => {
  this.setState({box: box});
}

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
   this.setState({imageUrl: this.state.input});
    fetch('http://localhost:3000/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
            input: this.state.input 
        })
    })
    .then(response => response.json() )
    .then(response => {
     if (response) {
      fetch('http://localhost:3000/image', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ 
            id: this.state.user.id 
        })
      })
      .then(response => response.json())
      .then(count => {
          this.setState(Object.assign(this.state.user, { entries: count}))
        }).catch(console.log)
   }
    this.displayBox(this.calculateFaceLocation(response))
  })
   .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if( route === 'signout' ){
      this.setState({isSignedIn: false});
    }
    else if ( route === 'home' ){
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }       

render() {
  const { isSignedIn, imageUrl, route, box } = this.state;
  return (
    <div className="App">
      <Particles className='Particles' params = { particleOption } />
      <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
      <Logo /> 
      { route === 'home'
         ? <div>
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
            <Rank name={this.state.user.name}
                  entries={this.state.user.entries} />
            <ImageRecognition box={box} imageUrl={imageUrl} />
          </div>
        : ( route === 'signin'
           ? <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
           : <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
          )
      }
     </div>
  );
}
}

export default App;
 