import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      astronauts: []
    };
  }
  onGame() {

    fetch("http://api.open-notify.org/astros.json")
    .then(response => response.json()) // result conversion in JSON 
    .then(data => {
        if (this.state.number === data.number){
            this.setState({
                astronauts: data.people,
                answer: true
              });
        } else {
            this.setState({
                astronauts: data.people,
                answer: false
              });
        }
    });
  }

    handleChange = (e) => {
      this.setState({ number: e.target.value });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.onGame();
    }

    render() {
      const { number } = this.state;
      return (
          <form>
            <h5>Guess how many people are in space</h5>
                <div className="flex">
                    <input type="number" value={number} min="0" onChange={this.handleChange} />
                    <input type="submit" onClick={this.handleSubmit} />
                </div>
                <div className="container">
                    {this.state.astronauts.map(astronaut =>
                        <div>
                            <p key={astronaut.name}>{astronaut.name}</p>
                        </div>
                        )}
            </div>
        </form>
      );
    }
}

export default Game;
