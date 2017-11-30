import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class HeaderPublic extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: '',
            LoginError: false,
        };
    }

    onSubmit(e){
        e.preventDefault();

        let email = this.refs.emailLogin.value.trim();
        let password = this.refs.passwordLogin.value.trim();

        Meteor.loginWithPassword({email}, password, (err) => {
            if(err){
                this.setState({
                  error: 'Unable to login. Check email or password',
                  LoginError: true,
                }, function(){ console.log(this.state.LoginError)} );

            } else {
                this.setState({error: ''});

            }
        });
    }
    LoginError(){
      if(this.state.LoginError){        
        return (
          <div className="alert alert-warning alert-dismissible fade show text-center" role="alert">
            <strong>Invalid Login</strong> Check your email id or password or Signup for new Account!
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          );
      }
    }

        render(){
            return (
                <div>
                   {/* headerPublic code starting*/}
                <nav className="navbar navbar-light navbar-toggleable-md bg-faded fixed-top">
                <div className="container">
                  <button className="navbar-toggler navbar-toggler-right" type="button" name="button" data-toggle="collapse" data-target="#navbarNav2">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <a className="navbar-brand" href="#">
                    <i className="fa fa-pencil-square-o fa-2x"><span className="logo "> acadlog </span></i>
                  </a>
                  <div className="collapse navbar-collapse" id="navbarNav2">
                    <form onSubmit={this.onSubmit.bind(this)} className="form-inline ml-auto">
                      <input type="text" ref="emailLogin" name="emailLogin" id="username" className="form-control mr-2" placeholder="Enter Email ID" />
                      <input type="password" id="passwordLogin" ref="passwordLogin" className="form-control mr-2" placeholder="Password" name="emailPassword" />
                      <div className="form-check">
                      </div>
                      <button className="btn btn-secondary" type="submit">
                        <i className="fa fa-sign-in "> &nbsp;Login</i>
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
              <div>
              {this.LoginError()}
              </div>
                {/* headerPublic code ending */}
                </div>
            );

        }
    }
