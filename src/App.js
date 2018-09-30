import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Button from '@material-ui/core/Button';
import YourComponent from './Components/YourComponent';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Button variant="outlined">
        Sample Button from App Component
      </Button>
      <Switch>
        <Route path="/yourcomponent" component={YourComponent} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
