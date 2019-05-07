import React, { Component, Fragment } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      astronauts: [],
      hasCorrectAnswer: false,
      hasTried: false
    };
  }
  onGame() {

    fetch("http://api.open-notify.org/astros.json")
    .then(response => response.json()) // result conversion in JSON 
    .then(data => {
        const answerNumber = parseInt(this.state.number);
        if (answerNumber === data.number){
            this.setState({
                astronauts: data.people,
                hasCorrectAnswer: true
              });
        } else {
            this.setState({
                hasCorrectAnswer: false
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
      this.setState({ 
        astronauts: [], 
        hasTried: true 
      });
    }

    render() {
      const { number } = this.state;
      return (
          <Fragment>
            <form>
                <h5>Guess how many people are in space</h5>
                    <div className="flex">
                        <input className="bar" type="number" value={number} min="0" onChange={this.handleChange} />
                        <input className="button" type="submit" value="GO" onClick={this.handleSubmit} />
                    </div>
            </form>
            <div>
              { this.state.hasTried &&
                (this.state.hasCorrectAnswer ? <p className="green"> Correct! </p> : <p className="red">Try again :(</p>)

              }
            </div>
            <div className="container">
                {this.state.astronauts.map(astronaut =>
                    <div>
                        <p key={astronaut.name}> <a href={`http://en.wikipedia.org/wiki/${astronaut.name}`} target="_blank" >{astronaut.name}</a></p>
                    </div>
                )}
            </div>
        </Fragment>
      );
    }
}

export default Game;
