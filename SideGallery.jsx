import React, { Component, Fragment } from 'react';
// import Game from './Game';

class SideGallery extends Component {
  constructor(props){
    super(props);
    this.state = {
        astronauts: [],
        peopleNumber: ''
    };
  }
  
  onShow() {

    fetch("http://api.open-notify.org/astros.json")
    .then(response => response.json()) // result conversion in JSON 
    .then(data => {
        this.setState({
            astronauts: data.people,
            peopleNumber: data.number
          });
    });
  }
  componentDidMount(){
    this.onShow();
  }
    render(){
      
        return (
            <div className="container">
                    {this.state.astronauts.map(astronaut =>
                        <div>
                            <p>{astronaut.name}</p>
                        </div>
                        )}
            </div>
        );
    }
};

export default SideGallery;
