import React from 'react';
import ReactDOM from 'react-dom';

function App() {

    function getNumber() {
        // GET
        fetch('http://localhost:3333/')
            .then(result => result.text())
            .then(text => console.log(text))
            .catch(error => console.log(error));
    }

    function incNumber() {
        // POST
        fetch('http://localhost:3333/', { method: "POST" })
            .then(result => result.text())
            .then(text => console.log(text))
            .catch(error => console.log(error));
    }

    return (
        <div>
            <button onClick={getNumber}>Get Number</button>
            <button onClick={incNumber}>Increase Number</button>
        </div>
    )
}

ReactDOM.render(<App />, document.body);