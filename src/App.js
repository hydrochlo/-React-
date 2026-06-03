import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/Card/Card.js';
import Data from './data.json';
import List from './components/UniqueList/List.js';
import NestedList from './components/NestedList/NestedList.js';

function App(){

    let items;    
    // items = Data.map((item) =>
    //   <Card title={item.title} desc={item.desc} />
    // )

    // return <>
    //     <h1 className='headingStyle'>Hello World!!! </h1>

    //     <Card title = "Solve 2 problems from CF" desc="solve this without any expternal help." />
    //     <Card title = "Push come code to GITHUB" desc="write some everyday and push them to GITHUB." />
    //     {items}
    // </>

    return <>
        <NestedList />
    </>

}

export default App;