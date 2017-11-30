import  React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Public from '../ui/other/Public';
import PageNotFound from '../ui/other/PageNotFound';
import HomePage from '../ui/other/HomePage';
import EditProfilePage1 from '../ui/other/EditProfilePage1';
import EditProfilePage from '../ui/other/EditProfilePage';

 export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
     <div>
  <Switch>
    <Route  path="/" component={Public} exact={true}/>
    <Route path="/home" component={HomePage} />
    <Route path="/EditProfile" component={EditProfilePage} />
    <Route path="/EditProfile1" component={EditProfilePage1} />
    <Route  component={PageNotFound} />
  </Switch>
  </div>
  </Router>

);
export default AppRouter;
