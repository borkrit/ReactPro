import { navigate } from 'hookrouter';
import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <div>
                Ups not found
                <button onClick={()=> navigate('/')}>
                     BACK
                </button>
            </div>
        );
    }
}

export default NotFound;