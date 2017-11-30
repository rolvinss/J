import  React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';


import AppRouter0, {history} from './../imports/Routers/AppRouter0';
import Footer from './../imports/ui/other/Footer';
import { Logg } from '../imports/api/users';
import { Users } from '../imports/api/users';

const unauthenticatedPages = ['/'];
const authenticatedPages =['/home','/EditProfile','/EditProfile1'];

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathname = history.location;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if(isAuthenticated ){
    history.push('/home');
  } else if( !isAuthenticated ) {
    history.push('/');
  }
});

Meteor.startup( function () {
Tracker.autorun(() => {
  ReactDOM.render(<AppRouter0 />, document.getElementById('app'));
  ReactDOM.render(<Footer/>, document.getElementById('footer'));
});
});
