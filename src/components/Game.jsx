import React, { Component, Fragment } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      astronauts: []
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
                answer: true
              });
        } else {
            this.setState({
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
      this.setState({ astronauts: [] });
    }

    render() {
      const { number } = this.state;
      return (
          <Fragment>
            <form>
                <h5>Guess how many people are in space</h5>
                    <div className="flex">
                        <input type="number" value={number} min="0" onChange={this.handleChange} />
                        <input type="submit" onClick={this.handleSubmit} />
                    </div>
            </form>
            <div>
                {this.state.answer ? 'Correct!' : 'Try again :('}
            </div>
            <div className="container">
                {this.state.astronauts.map(astronaut =>
                    <div>
                        <p key={astronaut.name}>{astronaut.name}</p>
                    </div>
                )}
            </div>
        </Fragment>
      );
    }
}

export default Game;
