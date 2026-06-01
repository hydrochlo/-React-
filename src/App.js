import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/Card.js';
import Data from './data.json';

function App(){

    let items;
    // for(let i=0; i<Data.length; i++){
    //   items.push(<Card title={Data[i].title} desc={Data[i].desc} />);
    // }
    
    items = Data.map((item) =>
      <Card title={item.title} desc={item.desc} />
    )

    return <>
        <h1 className='headingStyle'>Hello World!!! </h1>

        <Card title = "Solve 2 problems from CF" desc="solve this without any expternal help." />
        <Card title = "Push come code to GITHUB" desc="write some everyday and push them to GITHUB." />
        {items}
    </>
}

export default App;