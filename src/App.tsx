import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './components/Button';

type getType = {
    'userId': number,
    'id': number,
    'title': string,
    'body': string
}

function App() {
    const [get, setGet] = useState<Array<getType>>([])
    const getRequestHandler = () => {
        setGet([])
    }
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setGet(json))
    },[])
    return (
        <div className="App">
            <Button nickName={'CleanPage'} callBack={getRequestHandler}/>
            <p></p>
            {get.map((el) =>{
                return(
                    <li>
                     <span>{el.id}</span>
                     <span>{el.userId}</span>
                     <span>{el.title}</span>
                    </li>
                )
            })}
            {/*<header className="App-header">*/}
            {/*  <img src={logo} className="App-logo" alt="logo" />*/}
            {/*  <p>*/}
            {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
            {/*  </p>*/}
            {/*  <a*/}
            {/*    className="App-link"*/}
            {/*    href="https://reactjs.org"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    Learn React*/}
            {/*  </a>*/}
            {/*</header>*/}
        </div>
    );
}

export default App;