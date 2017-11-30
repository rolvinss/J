import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Users } from './../../api/users';


export default class SignupForm extends React.Component{

    constructor(props){
        super(props);
            this.state ={
                error: ''
            };
        }

    onSubmit(e){
        e.preventDefault();

        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();
        let MeteorUserId = Meteor.userId();
        console.log(MeteorUserId);
        Accounts.createUser({email, password}, (err) => {
                if (err) {
                    this.setState({error: err.reason});
                } else {
                    this.setState({error: ''});
                    Users.insert({
                      UserEmail: email,
                      UserMeteorId:MeteorUserId
                    });
                }
            }
        );
    }

    render(){
        return (
            <div>
                 {/* signupForm Here Starting Here */}
                    <div className="col-12 ml-auto">
                        <div className="card ">
                        <div className="card-header text-center">
                            <h4>
                            <i className="fa fa-user-plus "> &nbsp;Sign Up Here</i>
                            </h4>

                        </div>
                        <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="card-block row d-flex flex-row ">
                            <div className="form-group row mx-2">
                               {this.state.error ? <p>{this.state.error} </p> : undefined }
                            {/* <input type="text" className="form-control " id="name" placeholder="Enter Your Name" /> */}
                            </div>
                            <div className="form-group row mx-2">
                            <input type="email" ref="email" name="email" className="form-control" placeholder="Enter Email ID" />
                            <small className="form-text text-muted">Your email will not be shared with anyone</small>
                            </div>
                            {/* <div className="form-group row mx-2">
                            <div className="input-group">
                                <span className="input-group-addon">+91-</span>
                                <input type="number" className="form-control" maxLength={10} placeholder="Mobile Number" />
                            </div>
                            </div> */}
                            <div className="form-group row mx-2">
                            <input type="password" id="password" className="form-control" name="password" ref="password" placeholder="Create Password" />
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <div className="form-group" action="#">
                            <input type="checkbox" name="checkbox" defaultValue="check" id="agree" /> I have read and agree to the <a href="#"> Terms &amp;Privacy</a>
                            <br/>
                            <button type="submit" className="btn btn-danger" style={{width: '100%'}} name="submit" defaultValue="submit">Sign Up</button>
                            </div>
                        </div>
                        </form>
                        </div>
                    </div>

                    {/* signupForm ending */}
            </div>


        );

    }
}
