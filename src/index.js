import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
 
class App extends React.Component {
  
     //constructor(props) {
     // super(props);
       //this.state = {lat : null ,long : null, errmsg: ''};
      //};
      //lifecycle methods
       //alternative method we use to create the state i.e we have to take the value of constractor
      //as the value of the brouwer wich read the js. So as the value is shown blow is the 
      //same as that of cunstructor value.
    

      state = { lat : null ,long : null, errmsg: ''}

   
   componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
           (position) => {
                       this.setState({lat: position.coords.latitude});
                       this.setState({long: position.coords.longitude});
           },   
            (err) => this.setState({err: err.message})
         )
   }
  
   componentDidUpdate(){
     console.log ('my App component is Updated- rerender the conponent');
   }
   
        // render is the compusory methode to explain the React.component
        // connditional apply for the lat long.
   render() {
          if(this.state.lat && this.state.long && !this.state.err){
            return <SeasonDisplay lat = {this.state.lat} long  = {this.state.long} />
          }
          if(!this.state.lat && this.state.long && this.state.err){
            return <div>
                    Latitude : {this.state.err}<br/>
                    Longitude : {this.state.long}
            </div>
          }
          if(this.state.lat && !this.state.long && this.state.err){
          return <div>
                   Latitude: {this.state.lat}<br />
                   Longitude: {this.state.err}
          </div>
          }
          if(!this.state.lat && !this.state.long && this.state.err){
               return <div>
                     <h2>Error message : {this.state.err} </h2> 
               </div>
          }
          return <div> Loading!! Please Refresh the page. </div>
  };
};

ReactDOM.render(<App />, document.querySelector('#root'));