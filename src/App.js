import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/Card.js';

function App(){
    return <>
        <h1 className='headingStyle'>Hello World!!! </h1>
        <Card title = "Solve 2 problems from CF" desc="solve this without any expternal help." />
        <Card title = "Push come code to GITHUB" desc="write some everyday and push them to GITHUB." />
    </>
}

export default App;