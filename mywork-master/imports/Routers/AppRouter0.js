import  React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Public from '../ui/other/Public';
import PageNotFound from '../ui/other/PageNotFound';
import  {
  Home,
  EditProfile1,
  CreateLog1,
  TestDashboard1,
  CreateQuestion,
  CreateTest,
} from '../ui/other/Pages';

 export const history = createHistory();

const AppRouter0 = () => (
  <Router history={history}>
  <Switch>
    <Route  path="/" component={Public} exact={true}/>
    <Route path="/home" component={Home} />
    <Route path="/EditProfile" component={EditProfile1} />
    <Route path="/createlog" component={CreateLog1} />
    <Route path="/testdashboard" component={TestDashboard1} />
    <Route path="/createquestion" component={CreateQuestion} />
    <Route path="/createtest" component={CreateTest} />
    <Route path="*"  component={PageNotFound} />
  </Switch>
  </Router>

);
export default AppRouter0;
