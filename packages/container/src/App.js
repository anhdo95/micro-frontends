import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import MarketingApp from './components/MarketingApp'

export default () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/auth" component={() => <></>} />
            <Route path="/" component={MarketingApp} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
