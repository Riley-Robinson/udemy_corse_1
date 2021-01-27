import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const butttonText = 'Click Me!';

    return (
        <div>
            <label className="label" htmlFor="name"> Enter Name: </label>
            <input id="name" type="text"/>
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
               {butttonText} </button>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
 