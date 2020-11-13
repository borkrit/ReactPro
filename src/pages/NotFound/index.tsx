import { navigate } from 'hookrouter';
import React, { Component } from 'react';
import { LinkEnum } from '../../routes';

class NotFound extends Component {
    render() {
        return (
            <div>
                Ups not found
                <button onClick={()=> navigate(LinkEnum.HOME)}>
                     BACK
                </button>
            </div>
        );
    }
}

export default NotFound;