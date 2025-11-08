import React from 'react';
import { IonApp } from '@ionic/react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './theme/variables.css';
import Enter from './pages/Enter';
import Home_visitors from './pages/Home_visitors';
import Login from './pages/Login';
import Register from './pages/Register';
import ListProductsVisitors from './pages/List_products_visitors';

const App: React.FC = () => {
  return (
    <IonApp>
      <Router>
        <Switch>
          <Route path="/enter" component={Enter} />
          <Route path="/home_visitors" component={Home_visitors} />
          <Route path="/login_entrepreneurs" component={Login} />
          <Route exact path="/register_entrepreneurs" component={Register} />
          <Route exact path="/list_products" component={ListProductsVisitors} />
          <Route exact path="/">
            <Redirect to="/enter" />
          </Route>
        </Switch>
      </Router>
    </IonApp>
  );
};

export default App;