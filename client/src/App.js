import React, { Component, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';


const App = () => {
  const [data, setData] = useState(null);

  const callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  }


  useEffect(() => {
    callBackendAPI()
      .then(res => setData(res.express))
      .catch(err => console.error(err));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">{data}</p>
    </div>
  )
}






export default App;