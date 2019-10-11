import React from 'react';
import GameStandard from './GameStandard';


class Standard extends React.Component {

    render () {
        return (
            <div>
                <p>Enter a number between 1-10</p>
                
                <GameStandard />
                {/* generateRandomNum={this.generateRandomNum} */}
                
            </div>
        );
    }}

export default Standard;