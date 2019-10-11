import React from 'react';
import { Route } from 'react-router-dom';


class Levels extends React.Component {
    render () {
        return (
            <div>
                <button onClick ={() => this.setState({ isClicked: true })} >Standard</button>

                <button onClick ={() => this.setState({ isClicked: true })}
                >Expert</button>

                <Route path="/"/>
                    </div>
        )
    }
}

export default Levels;
