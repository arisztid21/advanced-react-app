import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Elephant extends Component{
    render(){
        const {count} = this.props;
        const elephantsJsx = [];
        for (let i = 0; i< count; i++){
            elephantsJsx.push(<span>🐘</span>)
        }
        return(
            <div className='elephants'>
                🐘
                {elephantsJsx}
            </div>
        )
    }
}

Elephant.propTypes = {
    count: PropTypes.number.isRequired
}

export default Elephant;