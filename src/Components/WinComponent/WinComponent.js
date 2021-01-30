import React from 'react';

export default class WinComponent extends React.Component {
    render() {
        window.scrollTo(0, 0)
        return (
        <div>
          {alert("YOU WIN!!!!!!!!!")}
        </div>
        );
    }
}

