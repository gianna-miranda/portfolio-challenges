import React from 'react';

class GameExpert extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = {
            generatedNumber: null,
            guess: 0,
            count: 0,
            highScore: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
    }

    componentDidMount() 
    {
        this.generateRandomNum();
    }

    generateRandomNum = () => 
    {
        const randomNum =  Math.floor(Math.random() * 100) + 1
        this.setState ({
            generatedNumber: randomNum
        });
    }

    submitAnswer(event) 
    {
        event.preventDefault();
        let generatedNumber = this.state.generatedNumber;
        let guess = this.state.guess; 
        console.log(generatedNumber);
        console.log(guess);
        if(generatedNumber == guess)
        {
            this.winFucntion();   
        } else {
            this.loseFunction();
        }
    }

    handleChange(event) 
    {
        this.setState({guess: event.target.value});
    }

    winFucntion()
    {
        alert('You Win!!!')
        let highScore = this.state.highScore
        let count = this.state.count

        if (count < highScore)
        {
            this.setState({
                highScore: count
            })
            alert(highScore);
        }
    }

    loseFunction()
    {
        let generatedNumber = this.state.generatedNumber;
        let guess = this.state.guess;
        alert('You Lose.')
        if (guess > generatedNumber)
        {
            this.tooHigh();
        }
        else if (guess < generatedNumber)
        {
            this.tooLow();
        }
    }

    tooHigh()
    {
        alert('Your guess is too high!') 
    }

    tooLow()
    {
        alert('Your guess is too low!')
    }

    counter = () => 
    {
        let numberOfClicks = this.state.count + 1
        this.setState ({
            count: numberOfClicks
        });
    }

    resetGame(event) 
    {
        this.setState(
        {
            guess: 0,
            count: 0,
        });
        this.generateRandomNum()
    }
    
    render ()
    {
        return (
            <form onSubmit={this.submitAnswer}>
                    <input type="number" name="guess" min="1" max="100" value={this.state.guess} onChange={this.handleChange} />
                
                    {/* <input type="button" value="submit" onClick={this.submitAnswer} /> */}
                    <input type="submit" value="Submit" onClick={this.counter}/>

                    <p>Number of Guesses: {this.state.count}</p>

                    <button type="button" onClick={ this.resetGame.bind(this)}>Reset Game</button>
    
                {console.log(this.props.generateRandomNum)}
                </form>
        );
    }
}


export default GameExpert