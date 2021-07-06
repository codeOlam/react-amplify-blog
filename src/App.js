import React from 'react';
import logo from './logo.svg';
import './App.css';
import {withAuthenticator} from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!</h1>
        <h2> This is a clear indication that I can now do CI/CD</h2>
        <h4>We will be turning this to a blog app soon</h4>
      </header>
    </div>
  );
}

export default withAuthenticator(App, {includeGreetings: true});
