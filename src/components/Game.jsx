import React, { Component, Fragment } from 'react';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            astronauts: [],
            hasCorrectAnswer: false,
            hasTried: false,
            isLoading: false
        };
    }

    onGame() {
        fetch("https://cors-anywhere.herokuapp.com/http://api.open-notify.org/astros.json")
            .then(response => response.json()) // result conversion in JSON
            .then((data) => {
                const { number } = this.state;
                const answerNumber = parseInt(number, 0);
                if (answerNumber === data.number) {
                    this.setState({
                        astronauts: data.people,
                        hasCorrectAnswer: true,
                        isLoading: false
                    });
                } else {
                    this.setState({
                        hasCorrectAnswer: false,
                        isLoading: false
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
            hasTried: true,
            isLoading: true
        });
    }

    render() {
        const {
            number, isLoading, hasTried, hasCorrectAnswer, astronauts
        } = this.state;
        return (
            <Fragment>
                <div className="text-white h-100 game">
                    <form>
                        <h5>Guess how many people are in space</h5>
                        <input className="bar" type="number" value={number} min="0" onChange={this.handleChange} />
                        <input className="button" type="submit" value="GO" onClick={this.handleSubmit} />
                    </form>
                    <div>
                        {isLoading && <p> loading...</p> }

                        { hasTried && !isLoading
                    && (hasCorrectAnswer ? <p className="green"> Correct! </p> : <p className="red">Try again :(</p>)}
                    </div>

                    { hasCorrectAnswer &&
                            astronauts.map(astronaut => (
                                <p key={astronaut.name}>
                                    {' '}
                                    <a href={`http://en.wikipedia.org/wiki/${astronaut.name}`} target="_blank" rel="noopener noreferrer">{astronaut.name}</a>
                                </p>
                            ))
                    }
                </div>
            </Fragment>
        );
    }
}

export default Game;
