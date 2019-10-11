import React from 'react';
import GameExpert from './GameExpert';


class Expert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            isClicked: false
        };
    }

    render () {
        return (
            <div>
            <p>Enter a number between 1-100</p>
            
            <GameExpert />
            
            
        </div>
        );
    }}

export default Expert;